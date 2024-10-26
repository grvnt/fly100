import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "../types/post";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // Check if the file exists before trying to read it
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  console.log(`Reading post: ${slug}`);
  console.log(`Front matter:`, matterResult.data);
  console.log(`Content:`, matterResult.content);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
    excerpt: matterResult.data.excerpt,
    coverImage: matterResult.data.coverImage,
    content: matterResult.content,
  };
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    console.error("Posts directory does not exist:", postsDirectory);
    return []; // Return an empty array if the directory doesn't exist
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
  } catch (error) {
    console.error(`Error fetching post for slug: ${slug}`, error);
    return null; // Return null if the post is not found
  }
}

// You can add more blog-related API functions here, such as:
// export async function getPostById(id: string) { ... }
// export async function createPost(postData: PostData) { ... }
// export async function updatePost(id: string, postData: PostData) { ... }
// export async function deletePost(id: string) { ... }
