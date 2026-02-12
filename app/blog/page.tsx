import { fetchPublishedPosts } from "@/lib/blogSupabase";
import BlogList from "@/components/General/BlogList";
import type { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";

// Render at request time so Supabase server client (cookies) has request context.
export const dynamic = "force-dynamic";

export const metadata: Metadata = getSEOTags({
  title: "Paragliding Blog | fly100",
  description:
    "Deep-dive essays and guides on paragliding, risk, mindset, and XC flying from fly100.",
  canonicalUrlRelative: "/blog",
});

export default async function BlogIndexPage() {
  const posts = await fetchPublishedPosts();

  return (
    <section>
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Journal
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
          The Art of Paragliding
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl">
          Longform reflections on risk, mastery, and the inner game of XC
          paragliding.
        </p>
      </header>

      <BlogList
        posts={posts.map((post) => ({
          slug: post.slug,
          title: post.title,
          date: post.published_at ?? post.created_at,
          category: "Essay",
          excerpt: post.subtitle ?? "",
          coverImage: post.cover_image ?? "",
          content: post.content_markdown,
        }))}
      />
    </section>
  );
}

