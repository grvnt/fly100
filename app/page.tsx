import EmailCaptureHero from "../components/General/EmailCaptureHero";
import BlogList from "../components/General/BlogList";
import { getAllPosts } from "../lib/blogApi";
import { PostData } from "../types/post";
import Header from "@/components/General/Header";

export default async function Home() {
  const posts: PostData[] = await getAllPosts();

  return (
    <main>
      <Header />
      <EmailCaptureHero />
      <BlogList posts={posts} />
    </main>
  );
}
