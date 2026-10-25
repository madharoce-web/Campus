-- =============================================================================
-- Aula Mada · comptes, progrés al núvol, activitat, subscripcions i llista d'espera
--
-- Principis:
--  * RLS a totes les taules: cada persona només veu i canvia les seves files.
--  * Privilegis mínims explícits (no depenem dels privilegis per defecte del projecte).
--  * `role` i `plan` dels perfils només els canvia el servidor (service role o funcions
--    del servidor), mai el navegador: l'usuari només pot actualitzar nom, grau i idioma.
--  * Els administradors veuen dades agregades (perfils, activitat, llista d'espera), però
--    no el progrés en brut de ningú (user_state).
-- =============================================================================

-- ---------------------------------------------------------------- perfils ---
create table public.profiles (
  id            uuid primary key references auth.users (id) on delete cascade,
  display_name  text check (char_length(display_name) <= 80),
  degree        text check (degree ~ '^[a-z0-9-]{1,40}$'),
  lang          text not null default 'ca' check (lang in ('ca', 'es', 'en')),
  role          text not null default 'user' check (role in ('user', 'admin')),
  plan          text not null default 'free' check (plan in ('free', 'pro')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
comment on table public.profiles is 'Un perfil per compte: nom, grau, idioma, rol i pla.';

-- és administrador qui fa la crida? (security definer: evita la recursió de RLS)
create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

-- cada compte nou rep el seu perfil (nom de Google o del formulari, idioma de la web)
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  l text := meta ->> 'lang';
begin
  insert into public.profiles (id, display_name, lang)
  values (
    new.id,
    left(nullif(trim(coalesce(meta ->> 'full_name', meta ->> 'name', '')), ''), 80),
    case when l in ('ca', 'es', 'en') then l else 'ca' end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;

create policy "perfil: llegir el propi" on public.profiles
  for select to authenticated using (id = (select auth.uid()));
create policy "perfil: els administradors els llegeixen tots" on public.profiles
  for select to authenticated using ((select public.is_admin()));
create policy "perfil: actualitzar el propi" on public.profiles
  for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

-- ------------------------------------------------- progrés (espill de localStorage) ---
-- Una fila per clau de localStorage que la web sincronitza. `updated_at` és l'hora de
-- la darrera escriptura al navegador: en fusionar dispositius guanya la més recent.
create table public.user_state (
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  key         text not null check (char_length(key) between 1 and 200),
  value       text not null check (octet_length(value) <= 1048576),
  updated_at  timestamptz not null default now(),
  primary key (user_id, key)
);
comment on table public.user_state is 'Progrés de cada persona: les claus de localStorage de la web.';

-- límit de claus per compte (protegeix l'espai de la base de dades)
create function public.user_state_quota()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (select count(*) from public.user_state s where s.user_id = new.user_id) >= 500 then
    raise exception 'user_state: massa claus per a aquest compte' using errcode = 'check_violation';
  end if;
  return new;
end;
$$;

create trigger user_state_quota before insert on public.user_state
  for each row execute function public.user_state_quota();

alter table public.user_state enable row level security;

create policy "progrés: llegir el propi" on public.user_state
  for select to authenticated using (user_id = (select auth.uid()));
create policy "progrés: afegir el propi" on public.user_state
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "progrés: actualitzar el propi" on public.user_state
  for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "progrés: esborrar el propi" on public.user_state
  for delete to authenticated using (user_id = (select auth.uid()));

-- --------------------------------------------------------------- activitat ---
-- Intents d'exercicis i exàmens: estadístiques, repàs adaptatiu i el tauler d'administració.
create table public.activity (
  id           bigint generated always as identity primary key,
  user_id      uuid not null default auth.uid() references auth.users (id) on delete cascade,
  subject      text not null check (char_length(subject) <= 60),
  item         text not null check (char_length(item) <= 200),
  kind         text not null check (kind in ('exercise', 'quiz', 'exam', 'lab', 'code')),
  correct      boolean,
  score        numeric(6, 2),
  duration_ms  integer check (duration_ms >= 0),
  created_at   timestamptz not null default now()
);
create index activity_user_created on public.activity (user_id, created_at desc);
create index activity_subject_item on public.activity (subject, item);

alter table public.activity enable row level security;

create policy "activitat: llegir la pròpia" on public.activity
  for select to authenticated using (user_id = (select auth.uid()));
create policy "activitat: els administradors la llegeixen tota" on public.activity
  for select to authenticated using ((select public.is_admin()));
create policy "activitat: afegir la pròpia" on public.activity
  for insert to authenticated with check (user_id = (select auth.uid()));

-- ---------------------------------------------------------- subscripcions ---
-- Preparada per al pla Pro: només l'escriu el servidor (webhook del proveïdor de pagaments).
create table public.subscriptions (
  user_id                   uuid primary key references auth.users (id) on delete cascade,
  provider                  text not null check (provider in ('paddle', 'lemonsqueezy', 'stripe')),
  provider_customer_id      text,
  provider_subscription_id  text unique,
  plan                      text not null default 'pro' check (plan in ('pro')),
  status                    text not null check (status in ('trialing', 'active', 'past_due', 'canceled', 'paused')),
  current_period_end        timestamptz,
  updated_at                timestamptz not null default now()
);

create trigger subscriptions_touch before update on public.subscriptions
  for each row execute function public.touch_updated_at();

alter table public.subscriptions enable row level security;

create policy "subscripció: llegir la pròpia" on public.subscriptions
  for select to authenticated using (user_id = (select auth.uid()));

-- ---------------------------------------------------------- llista d'espera ---
-- «Avisa'm» dels graus que encara no hi són. S'hi entra només amb join_waitlist().
create table public.waitlist (
  id          bigint generated always as identity primary key,
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  degree      text not null check (degree ~ '^[a-z0-9-]{1,40}$'),
  lang        text not null default 'ca' check (lang in ('ca', 'es', 'en')),
  created_at  timestamptz not null default now(),
  unique (email, degree)
);

alter table public.waitlist enable row level security;

create policy "llista d'espera: només els administradors" on public.waitlist
  for select to authenticated using ((select public.is_admin()));

create function public.join_waitlist(p_email text, p_degree text, p_lang text default 'ca')
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.waitlist (email, degree, lang)
  values (
    lower(trim(p_email)),
    p_degree,
    case when p_lang in ('ca', 'es', 'en') then p_lang else 'ca' end
  )
  on conflict (email, degree) do nothing;
end;
$$;

-- --------------------------------------------------------- esborrar el compte ---
-- Dret de supressió (RGPD): esborra el compte i, en cascada, perfil, progrés i activitat.
create function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  me uuid := auth.uid();
begin
  if me is null then
    raise exception 'cal iniciar la sessió' using errcode = 'insufficient_privilege';
  end if;
  delete from auth.users where id = me;
end;
$$;

-- -------------------------------------------------------------- privilegis ---
revoke all on table public.profiles, public.user_state, public.activity, public.subscriptions, public.waitlist
  from anon, authenticated;

grant select on table public.profiles to authenticated;
grant update (display_name, degree, lang) on table public.profiles to authenticated;
grant select, insert, update, delete on table public.user_state to authenticated;
grant select, insert on table public.activity to authenticated;
grant select on table public.subscriptions to authenticated;
grant select on table public.waitlist to authenticated;

revoke execute on function
  public.is_admin(), public.touch_updated_at(), public.handle_new_user(), public.user_state_quota(),
  public.join_waitlist(text, text, text), public.delete_my_account()
  from public, anon, authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.join_waitlist(text, text, text) to anon, authenticated;
grant execute on function public.delete_my_account() to authenticated;
