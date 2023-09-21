# Install locally

- `npm i`
- `npx supabase login`
- `npx supabase link --project-ref pzghgulijbwjamtfycih`
- `npx supabase start`
- `npx supabase status`
- `npx supabase db pull`
- `npx supabase migration up`

# Use api

Headers to send:

- `apikey: <apikey from supabase dashboard>`
- `Content-Type: application/json`

## Get competitions

`GET /rest/v1/competition`

## Create competition

`POST /rest/v1/competition` with data `{"name": "Tennis"}`