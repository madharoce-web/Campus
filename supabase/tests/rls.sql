-- Proves de la migració: RLS, privilegis i funcions. Cada comprovació falla amb una excepció.
\set ON_ERROR_STOP on
set client_min_messages = warning;

insert into auth.users (id, email, raw_user_meta_data) values
  ('00000000-0000-0000-0000-00000000000a', 'ana@example.com', '{"full_name": "Ana", "lang": "es"}'),
  ('00000000-0000-0000-0000-00000000000b', 'bru@example.com', '{"lang": "xx"}'),
  ('00000000-0000-0000-0000-0000000000ad', 'admin@example.com', '{}');
update public.profiles set role = 'admin' where id = '00000000-0000-0000-0000-0000000000ad';

do $$ begin
  assert (select display_name from public.profiles where id = '00000000-0000-0000-0000-00000000000a') = 'Ana', 'perfil amb nom';
  assert (select lang from public.profiles where id = '00000000-0000-0000-0000-00000000000a') = 'es', 'perfil amb idioma';
  assert (select lang from public.profiles where id = '00000000-0000-0000-0000-00000000000b') = 'ca', 'idioma desconegut → ca';
end $$;

-- ---- l'Ana
set role authenticated;
set request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000a';

insert into public.user_state (key, value, updated_at) values ('lx-done', '[1,2]', now()), ('eco-prac', '{}', now());
update public.user_state set value = '[1,2,3]' where key = 'lx-done';
insert into public.activity (subject, item, kind, correct) values ('logica', 'xr-1', 'exercise', true);
update public.profiles set display_name = 'Ana M.', degree = 'informatica', lang = 'ca';

do $$ begin
  assert (select count(*) from public.user_state) = 2, 'veu el seu progrés';
  assert (select count(*) from public.profiles) = 1, 'només veu el seu perfil';
  assert not public.is_admin(), 'no és administradora';
end $$;

-- no pot canviar-se el rol ni el pla
do $$ begin
  begin
    update public.profiles set plan = 'pro';
    raise exception 'ha pogut canviar el pla';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.profiles set role = 'admin';
    raise exception 'ha pogut canviar el rol';
  exception when insufficient_privilege then null;
  end;
end $$;

-- no pot fer servir les funcions del tauler d'administració
do $$ begin
  begin
    perform * from public.admin_item_stats(1);
    raise exception 'una usuària normal agrega l''activitat';
  exception when insufficient_privilege then null;
  end;
  begin
    perform * from public.admin_signups(30);
    raise exception 'una usuària normal veu les altes';
  exception when insufficient_privilege then null;
  end;
  begin
    perform * from public.admin_waitlist();
    raise exception 'una usuària normal veu la llista d''espera';
  exception when insufficient_privilege then null;
  end;
end $$;

-- no pot escriure progrés d'una altra persona
do $$ begin
  begin
    insert into public.user_state (user_id, key, value) values ('00000000-0000-0000-0000-00000000000b', 'x', 'y');
    raise exception 'ha escrit progrés d''una altra persona';
  exception when insufficient_privilege then null;
  end;
end $$;

-- no pot llegir la llista d'espera ni escriure-hi directament
do $$ begin
  assert (select count(*) from public.waitlist) = 0, 'no veu la llista d''espera';
  begin
    insert into public.waitlist (email, degree) values ('x@example.com', 'ade');
    raise exception 'ha escrit directament a la llista d''espera';
  exception when insufficient_privilege then null;
  end;
end $$;

-- ---- en Bru: no veu res de l'Ana
set request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
do $$ begin
  assert (select count(*) from public.user_state) = 0, 'no veu el progrés de l''Ana';
  assert (select count(*) from public.activity) = 0, 'no veu l''activitat de l''Ana';
  assert (select count(*) from public.profiles) = 1, 'només veu el seu perfil';
end $$;
update public.user_state set value = 'hack';  -- no afecta cap fila
delete from public.user_state;                 -- no afecta cap fila

-- ---- visitant sense sessió: només pot apuntar-se a la llista d'espera
reset request.jwt.claim.sub;
set role anon;
select public.join_waitlist('  Nou@Example.com ', 'ade', 'es');
select public.join_waitlist('nou@example.com', 'ade', 'es');  -- repetit: no fa res
do $$ begin
  begin
    perform count(*) from public.profiles;
    raise exception 'el visitant llegeix perfils';
  exception when insufficient_privilege then null;
  end;
  begin
    perform public.delete_my_account();
    raise exception 'el visitant pot cridar delete_my_account';
  exception when insufficient_privilege then null;
  end;
end $$;

-- ---- administradora: veu perfils, activitat i llista d'espera, però no el progrés
set role authenticated;
set request.jwt.claim.sub = '00000000-0000-0000-0000-0000000000ad';
do $$ begin
  assert public.is_admin(), 'és administradora';
  assert (select count(*) from public.profiles) = 3, 'veu tots els perfils';
  assert (select count(*) from public.activity) = 1, 'veu l''activitat';
  assert (select count(*) from public.waitlist) = 1, 'veu la llista d''espera (sense duplicats)';
  assert (select email from public.waitlist) = 'nou@example.com', 'correu normalitzat';
  assert (select count(*) from public.user_state) = 0, 'no veu el progrés en brut';
  -- tauler d'administració
  assert (select attempts from public.admin_item_stats(1) where item = 'xr-1') = 1, 'intents per exercici';
  assert (select correct from public.admin_item_stats(1) where item = 'xr-1') = 1, 'encerts per exercici';
  assert (select count(*) from public.admin_item_stats(5)) = 0, 'mínim d''intents';
  assert (select sum(n) from public.admin_signups(30)) = 3, 'altes';
  assert (select n from public.admin_waitlist() where degree = 'ade') = 1, 'llista d''espera per grau';
end $$;

-- ---- l'Ana esborra el compte: desapareix tot
set request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000a';
select public.delete_my_account();
reset role;
do $$ begin
  assert (select count(*) from auth.users where id = '00000000-0000-0000-0000-00000000000a') = 0, 'compte esborrat';
  assert (select count(*) from public.user_state where user_id = '00000000-0000-0000-0000-00000000000a') = 0, 'progrés esborrat';
  assert (select count(*) from public.activity where user_id = '00000000-0000-0000-0000-00000000000a') = 0, 'activitat esborrada';
  assert (select count(*) from public.profiles where id = '00000000-0000-0000-0000-00000000000a') = 0, 'perfil esborrat';
end $$;

-- ---- límit de claus per compte
set role authenticated;
set request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
insert into public.user_state (key, value) select 'k' || g, 'v' from generate_series(1, 500) g;
do $$ begin
  begin
    insert into public.user_state (key, value) values ('k501', 'v');
    raise exception 'ha superat el límit de claus';
  exception when check_violation then null;
  end;
end $$;
reset role;

-- ---- ajustos de la web i contacte (migració del campus)
set role anon;
reset request.jwt.claim.sub;
select public.send_contact('Visitant', 'Visit@Example.com', 'Hola', 'general', 'es');
do $$ begin
  perform count(*) from public.site_settings;
  begin
    insert into public.site_settings (key, value) values ('billing', '{}');
    raise exception 'el visitant escriu ajustos';
  exception when insufficient_privilege then null;
  end;
  begin
    perform count(*) from public.contact_messages;
    raise exception 'el visitant llegeix el contacte';
  exception when insufficient_privilege then null;
  end;
end $$;
set role authenticated;
set request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
do $$ begin
  assert (select count(*) from public.contact_messages) = 0, 'una persona normal no veu el contacte';
  begin
    insert into public.site_settings (key, value) values ('billing', '{"enabled": true}');
    raise exception 'una persona normal canvia els preus';
  exception when insufficient_privilege then null;
  end;
end $$;
update public.profiles set study_year = 2, degrees = '{informatica}', subjects = '{mates,logica}', onboarded_at = now();
do $$ begin
  assert (select study_year from public.profiles) = 2, 'desa el curs del registre guiat';
end $$;
set request.jwt.claim.sub = '00000000-0000-0000-0000-0000000000ad';
insert into public.site_settings (key, value) values ('billing', '{"enabled": false, "basePrice": 5}');
do $$ begin
  assert (select count(*) from public.contact_messages) = 1, 'l''administradora veu el contacte';
  assert (select email from public.contact_messages) = 'visit@example.com', 'correu normalitzat';
end $$;
reset role;

\echo 'rls.sql: totes les comprovacions han passat'
