import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "../types/post";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt ?? data.description,
    coverImage: data.coverImage,
    description: data.description,
    content,
  };
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return getPostData(slug);
  });
}

export function getPostBySlug(slug: string): PostData | null {
  try {
    return getPostData(slug);
  } catch {
    return null;
  }
}
