"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("draft");

  useEffect(() => {
    if (!slug && title) {
      setSlug(slugify(title));
    }
  }, [title, slug]);

  async function handleSave(nextStatus: "draft" | "published") {
    setIsSaving(true);
    setStatus(nextStatus);
    try {
      const res = await fetch("/api/blog/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          subtitle,
          cover_image: coverImage || null,
          content_markdown: content,
          status: nextStatus,
        }),
      });

      if (!res.ok) {
        console.error("Failed to save post", await res.text());
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              New blog post
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Write in markdown on the left, see how it will look on the right.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={isSaving}
              onClick={() => handleSave("draft")}
            >
              {isSaving && status === "draft" ? "Saving…" : "Save draft"}
            </Button>
            <Button
              disabled={isSaving}
              onClick={() => handleSave("published")}
            >
              {isSaving && status === "published" ? "Publishing…" : "Publish"}
            </Button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Slug</label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="post-slug"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subtitle</label>
              <Input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Short subheading under the title"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Cover image URL</label>
              <Input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="/blog/my-post/cover.jpg"
              />
              <p className="text-xs text-gray-500">
                Upload to Supabase Storage or /public and paste the URL here.
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Content (markdown supported)
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm font-mono leading-relaxed text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Write using markdown shortcuts:

# Heading
## Subheading

**Bold**, *italic*, > quotes, - lists, and
![Alt text](/blog/my-post/image.jpg) for images.`}
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none border-l border-white/10 pl-6">
            <h1>{title || "Untitled post"}</h1>
            {subtitle && <p className="text-gray-400">{subtitle}</p>}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || "Start typing on the left to see a live preview."}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </main>
  );
}

