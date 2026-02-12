import { fetchPublishedPosts, fetchPostBySlug } from "@/lib/blogSupabase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSEOTags } from "@/lib/seo";

type Params = {
  slug: string;
};

// No generateStaticParams: blog data comes from Supabase (needs request context for cookies), so we render on demand.
export const dynamic = "force-dynamic";

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return getSEOTags({
      title: "Post not found | fly100",
      canonicalUrlRelative: "/blog",
    });
  }

  const description =
    post.subtitle ||
    "Paragliding reflections from fly100.";

  return getSEOTags({
    title: `${post.title} | fly100`,
    description,
    canonicalUrlRelative: `/blog/${post.slug}`,
    openGraph: {
      title: post.title,
      description,
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const displayDate = new Date(
    post.published_at ?? post.created_at
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="pt-8 pb-16">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          {"Paragliding"}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-gray-400">{displayDate}</p>
      </header>

      <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content_markdown}
        </ReactMarkdown>
      </div>

      <footer className="mt-12 border-t border-white/10 pt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Join the community
        </p>
        <p className="mt-2 text-sm text-gray-300">
          If this resonated, you&apos;ll love the deeper conversations and
          practical breakdowns inside the fly100 community.
        </p>
        <a
          href="/wingmates"
          className="mt-4 inline-flex items-center rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          Explore Wingmates
        </a>
      </footer>
    </article>
  );
}

