-- =============================================================================
-- Aula Mada · campus personal, ajustos de la web i missatges de contacte
--
--  * profiles: curs, graus i assignatures triats en el registre guiat (/benvinguda).
--  * site_settings: preus, plans, límits, textos i dades de l'empresa. Els llegeix
--    tothom (la portada els mostra); només els administradors els canvien.
--  * contact_messages: formulari de contacte de la portada, amb send_contact().
-- =============================================================================

-- ------------------------------------------------------------------- perfil ---
alter table public.profiles
  add column study_year    smallint check (study_year between 1 and 8),
  add column degrees       text[] not null default '{}'
    check (cardinality(degrees) <= 10 and array_to_string(degrees, ',') ~ '^[a-z0-9,-]*$'),
  add column subjects      text[] not null default '{}'
    check (cardinality(subjects) <= 60 and array_to_string(subjects, ',') ~ '^[a-z0-9,-]*$'),
  add column onboarded_at  timestamptz;

grant update (study_year, degrees, subjects, onboarded_at) on table public.profiles to authenticated;

-- plans: gratuït, bàsic (per assignatures) i pro (un grau sencer i la IA)
alter table public.profiles drop constraint profiles_plan_check;
alter table public.profiles add constraint profiles_plan_check check (plan in ('free', 'basic', 'pro'));
alter table public.subscriptions drop constraint subscriptions_plan_check;
alter table public.subscriptions add constraint subscriptions_plan_check check (plan in ('basic', 'pro'));
alter table public.subscriptions alter column plan drop default;

-- ------------------------------------------------------------------ ajustos ---
create table public.site_settings (
  key         text primary key check (key ~ '^[a-z0-9_.-]{1,60}$'),
  value       jsonb not null,
  updated_at  timestamptz not null default now(),
  updated_by  uuid references auth.users (id) on delete set null default auth.uid()
);
comment on table public.site_settings is 'Ajustos de la web (preus, plans, textos, empresa): públics, editables pels administradors.';

create trigger site_settings_touch before update on public.site_settings
  for each row execute function public.touch_updated_at();

alter table public.site_settings enable row level security;

create policy "ajustos: tothom els llegeix" on public.site_settings
  for select to anon, authenticated using (true);
create policy "ajustos: els administradors els afegeixen" on public.site_settings
  for insert to authenticated with check ((select public.is_admin()));
create policy "ajustos: els administradors els canvien" on public.site_settings
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "ajustos: els administradors els esborren" on public.site_settings
  for delete to authenticated using ((select public.is_admin()));

-- ------------------------------------------------------- missatges de contacte ---
create table public.contact_messages (
  id          bigint generated always as identity primary key,
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  topic       text not null default 'general' check (topic in ('general', 'support', 'billing', 'content', 'press')),
  body        text not null check (char_length(body) between 1 and 5000),
  lang        text not null default 'ca' check (lang in ('ca', 'es', 'en')),
  user_id     uuid references auth.users (id) on delete set null,
  handled     boolean not null default false,
  created_at  timestamptz not null default now()
);
create index contact_messages_created on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

create policy "contacte: els administradors el llegeixen" on public.contact_messages
  for select to authenticated using ((select public.is_admin()));
create policy "contacte: els administradors el marquen" on public.contact_messages
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));

-- s'hi entra només amb aquesta funció: valida i limita a 5 missatges per correu i dia
create function public.send_contact(p_name text, p_email text, p_body text, p_topic text default 'general', p_lang text default 'ca')
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  e text := lower(trim(p_email));
begin
  if (select count(*) from public.contact_messages m where m.email = e and m.created_at > now() - interval '1 day') >= 5 then
    raise exception 'massa missatges' using errcode = 'check_violation';
  end if;
  insert into public.contact_messages (name, email, topic, body, lang, user_id)
  values (
    left(trim(p_name), 120), e,
    case when p_topic in ('general', 'support', 'billing', 'content', 'press') then p_topic else 'general' end,
    left(trim(p_body), 5000),
    case when p_lang in ('ca', 'es', 'en') then p_lang else 'ca' end,
    auth.uid()
  );
end;
$$;

-- -------------------------------------------------------------- privilegis ---
revoke all on table public.site_settings, public.contact_messages from anon, authenticated;
grant select on table public.site_settings to anon, authenticated;
grant insert, update, delete on table public.site_settings to authenticated;
grant select, update (handled) on table public.contact_messages to authenticated;

revoke execute on function public.send_contact(text, text, text, text, text) from public, anon, authenticated;
grant execute on function public.send_contact(text, text, text, text, text) to anon, authenticated;
