import EmailCaptureHero from "../components/General/EmailCaptureHero";
import BlogList from "../components/General/BlogList";
import { getAllPosts } from "../lib/blogApi";
import { PostData } from "../types/post";
import Header from "@/components/General/Header";
import ConvertKitForm from "@/components/General/ConvertKitForm";
export default async function Home() {
  const posts: PostData[] = await getAllPosts();

  return (
    <main>
      <Header />
      {/* <EmailCaptureHero /> */}
      <ConvertKitForm />  
      <BlogList posts={posts} />
    </main>
  );
}
