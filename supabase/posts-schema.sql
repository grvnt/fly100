-- Blog posts table for fly100. Run in Supabase SQL Editor.
-- If the table already exists but is missing columns, run only the ALTER statements.

-- Create table (skip if you already have a posts table):
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  cover_image text,
  content_markdown text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Add missing columns if you created the table without them:
-- alter table public.posts add column if not exists status text not null default 'draft';
-- alter table public.posts add column if not exists published_at timestamptz;
-- alter table public.posts add column if not exists updated_at timestamptz not null default now();

-- RLS (optional): allow read for all, write for authenticated users
-- alter table public.posts enable row level security;
-- create policy "Public read" on public.posts for select using (true);
-- create policy "Authenticated write" on public.posts for all using (auth.role() = 'authenticated');
