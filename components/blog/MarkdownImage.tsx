import Image from "next/image";

type MarkdownImageProps = {
  src?: string;
  alt?: string;
  title?: string;
};

/**
 * Renders markdown images with Next.js Image for optimization (WebP, sizing, lazy load).
 * Use in public/blog (e.g. /blog/my-post/photo.jpg) or Supabase URLs (already in remotePatterns).
 */
export default function MarkdownImage({ src, alt, title }: MarkdownImageProps) {
  if (!src) return null;

  return (
    <span className="my-4 block overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt ?? ""}
        title={title}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, 800px"
        className="h-auto w-full object-contain"
      />
    </span>
  );
}
