# Pindi Restaurant

A responsive restaurant website for Pindi Restaurant on Pandara Road, New Delhi, built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Run locally

Install dependencies with Bun, then start the development server:

```sh
bun install
bun run dev
```

## Supabase setup

Copy `.env.example` to `.env` and set your Supabase project URL and **publishable/anon key**. The browser client in `src/lib/supabase.ts` is optional and stays unavailable until both values are set. Never put a Supabase service role key in a browser environment variable.

```sh
cp .env.example .env
```

Add database tables and row-level security policies in Supabase before querying them from the website. The client is ready to use with your project; this repository does not yet define a database schema or any data-backed site features.

## Build

```sh
bun run build
```
