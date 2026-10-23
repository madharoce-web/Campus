#!/usr/bin/env bash
# Prova la migració de supabase/migrations en un Postgres net amb Docker:
# esquema auth imitat, migracions i les comprovacions de supabase/tests/rls.sql.
#   bash tools/test-db.sh
set -euo pipefail
cd "$(dirname "$0")/.."
NAME=aulamada-test-db
docker rm -f "$NAME" >/dev/null 2>&1 || true
docker run -d --name "$NAME" -e POSTGRES_PASSWORD=postgres postgres:17-alpine >/dev/null
trap 'docker rm -f "$NAME" >/dev/null 2>&1 || true' EXIT
for _ in $(seq 1 60); do docker exec "$NAME" pg_isready -U postgres -q && break; sleep 1; done
sleep 1
run() { docker exec -i "$NAME" psql -q -v ON_ERROR_STOP=1 -U postgres "$@"; }
run < supabase/tests/auth-stub.sql
for f in supabase/migrations/*.sql; do echo "migració: $f"; run < "$f"; done
run < supabase/tests/rls.sql
