import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  content: string;
  [key: string]: any;
}

export function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  };
}

export function getAllPosts(): PostData[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      content
    } as PostData;
  });
}

export function getPostBySlug(slug: string): PostData {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    content
  } as PostData;
}

// You can add more blog-related API functions here, such as:
// export async function getPostById(id: string) { ... }
// export async function createPost(postData: PostData) { ... }
// export async function updatePost(id: string, postData: PostData) { ... }
// export async function deletePost(id: string) { ... }
