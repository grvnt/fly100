import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    title,
    slug,
    subtitle,
    cover_image,
    content_markdown,
    status,
  } = await req.json();

  if (!title || !slug || !content_markdown) {
    return NextResponse.json(
      { error: "title, slug and content_markdown are required" },
      { status: 400 }
    );
  }

  const published_at =
    status === "published" ? new Date().toISOString() : null;

  const { data, error } = await supabase
    .from("posts")
    .upsert(
      {
        slug,
        title,
        subtitle,
        cover_image,
        content_markdown,
        status: status ?? "draft",
        published_at,
      },
      { onConflict: "slug" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error saving post", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ post: data });
}

