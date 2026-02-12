import { createClient } from "@/lib/supabase/server";

type DbPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  cover_image: string | null;
  status?: "draft" | "published";
  content_markdown: string;
  published_at?: string | null;
  created_at: string;
  updated_at?: string;
};

// Posts table: see supabase/posts-schema.sql. We try full columns first, then minimal (id, slug, title, content_markdown) if you have different column names.
export async function fetchPublishedPosts(): Promise<DbPost[]> {
  const supabase = await createClient();

  const fullSelect = "id, slug, title, subtitle, cover_image, content_markdown, created_at";
  let result = await supabase
    .from("posts")
    .select(fullSelect)
    .order("created_at", { ascending: false });

  if (result.error && (result.error as { code?: string }).code === "42703") {
    result = await supabase
      .from("posts")
      .select("id, slug, title, content_markdown")
      .order("id", { ascending: false });
  }
  if (result.error && (result.error as { code?: string }).code === "42703") {
    result = await supabase
      .from("posts")
      .select("id, slug, title, content")
      .order("id", { ascending: false });
  }

  if (result.error) {
    if ((result.error as { code?: string }).code === "42703") {
      throw new Error(
        "Blog: Supabase 'posts' table needs at least: id, slug, title, and content_markdown (or content). Run supabase/posts-schema.sql in SQL Editor."
      );
    }
    console.error("Error fetching posts", result.error);
    throw result.error;
  }

  const rows = (result.data ?? []) as (DbPost & { content?: string })[];
  return rows.map((r) => ({
    ...r,
    content_markdown: r.content_markdown ?? r.content ?? "",
    subtitle: r.subtitle ?? null,
    cover_image: r.cover_image ?? null,
    created_at: r.created_at ?? new Date(0).toISOString(),
  }));
}

export async function fetchPostBySlug(slug: string): Promise<DbPost | null> {
  const supabase = await createClient();

  let result = await supabase
    .from("posts")
    .select("id, slug, title, subtitle, cover_image, content_markdown, created_at")
    .eq("slug", slug)
    .single();

  if (result.error && (result.error as { code?: string }).code === "42703") {
    result = await supabase
      .from("posts")
      .select("id, slug, title, content_markdown")
      .eq("slug", slug)
      .single();
  }
  if (result.error && (result.error as { code?: string }).code === "42703") {
    result = await supabase
      .from("posts")
      .select("id, slug, title, content")
      .eq("slug", slug)
      .single();
  }

  if (result.error) {
    if ((result.error as { code?: string }).code === "PGRST116") {
      return null;
    }
    if ((result.error as { code?: string }).code === "42703") {
      throw new Error(
        "Blog: Supabase 'posts' table needs at least: id, slug, title, content_markdown (or content). Run supabase/posts-schema.sql."
      );
    }
    console.error("Error fetching post by slug", result.error);
    throw result.error;
  }

  const r = result.data as DbPost & { content?: string };
  return r
    ? {
        ...r,
        content_markdown: r.content_markdown ?? r.content ?? "",
        subtitle: r.subtitle ?? null,
        cover_image: r.cover_image ?? null,
        created_at: r.created_at ?? new Date(0).toISOString(),
      }
    : null;
}

