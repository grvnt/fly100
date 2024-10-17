import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData } from '../types/post';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
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
  
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    return getPostData(slug);
  });
}

export function getPostBySlug(slug: string): PostData {
  return getPostData(slug);
}

// You can add more blog-related API functions here, such as:
// export async function getPostById(id: string) { ... }
// export async function createPost(postData: PostData) { ... }
// export async function updatePost(id: string, postData: PostData) { ... }
// export async function deletePost(id: string) { ... }
