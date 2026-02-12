import { createClient } from "@/lib/supabase/server";

type DbPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  cover_image: string | null;
  status: "draft" | "published";
  content_markdown: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export async function fetchPublishedPosts(): Promise<DbPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts", error);
    throw error;
  }

  return data ?? [];
}

export async function fetchPostBySlug(
  slug: string
): Promise<DbPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    if ((error as any).code === "PGRST116") {
      return null;
    }
    console.error("Error fetching post by slug", error);
    throw error;
  }

  return data;
}

