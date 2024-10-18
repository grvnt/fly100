import BlogList from "../components/General/BlogList";
import { getAllPosts } from "../lib/blogApi";
import { PostData } from "../types/post";
import Header from "@/components/General/Header";
import ConvertKitForm from "@/components/General/ConvertKitForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fly100 | Become an XC Paragliding Jedi",
  description:
    "The online resource for XC paragliding pilots.",
};

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
