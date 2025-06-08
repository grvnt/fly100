import BlogList from "../components/General/BlogList";
import { getAllPosts } from "../lib/blogApi";
import { PostData } from "../types/post";
import Header from "@/components/General/Header";
import ConvertKitForm from "@/components/General/ConvertKitForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fly100 | 100% Commitment to Mastery of Mind & Self through Paragliding",
  description:
    "100% commitment to mastery, flow, and freedom through paragliding. Fly100 is a movement for pilots chasing presence, performance, and purpose in the sky.",
};

export default async function Home() {
  const posts: PostData[] = await getAllPosts();

  return (
    <main>
      <Header />
      {/* <EmailCaptureHero /> */}
      <ConvertKitForm />
      {/* <BlogList posts={posts} /> */}
    </main>
  );
}
