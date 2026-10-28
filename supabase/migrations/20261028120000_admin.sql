-- =============================================================================
-- Aula Mada · tauler d'administració (/admin), només lectura
--
-- Funcions agregades per al tauler: altes, intents per exercici i llista d'espera. Totes són
-- security definer i comproven is_admin(): a qualsevol altra persona li tornen un error. Així el
-- navegador de l'administrador no ha de baixar l'activitat en brut, i ningú més no la pot agregar.
-- =============================================================================

-- altes per dia, grau i pla (els darrers p_days dies)
create function public.admin_signups(p_days integer default 90)
returns table (day date, degree text, plan text, n bigint)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'només administradors' using errcode = 'insufficient_privilege';
  end if;
  return query
    select (p.created_at at time zone 'Europe/Andorra')::date, coalesce(p.degree, ''), p.plan, count(*)
    from public.profiles p
    where p.created_at >= now() - make_interval(days => greatest(1, least(p_days, 3650)))
    group by 1, 2, 3
    order by 1 desc, 2, 3;
end;
$$;

-- intents i percentatge d'encerts per exercici (per trobar exercicis mal plantejats)
create function public.admin_item_stats(p_min_attempts integer default 5)
returns table (subject text, item text, kind text, attempts bigint, graded bigint, correct bigint, users bigint, last_at timestamptz)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'només administradors' using errcode = 'insufficient_privilege';
  end if;
  return query
    select a.subject, a.item, a.kind, count(*), count(a.correct), count(*) filter (where a.correct),
           count(distinct a.user_id), max(a.created_at)
    from public.activity a
    group by a.subject, a.item, a.kind
    having count(*) >= greatest(1, p_min_attempts)
    order by a.subject, a.item, a.kind;
end;
$$;

-- llista d'espera per grau
create function public.admin_waitlist()
returns table (degree text, n bigint, last_at timestamptz)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'només administradors' using errcode = 'insufficient_privilege';
  end if;
  return query
    select w.degree, count(*), max(w.created_at)
    from public.waitlist w
    group by w.degree
    order by 2 desc, 1;
end;
$$;

revoke execute on function public.admin_signups(integer), public.admin_item_stats(integer), public.admin_waitlist()
  from public, anon, authenticated;
grant execute on function public.admin_signups(integer), public.admin_item_stats(integer), public.admin_waitlist()
  to authenticated;
