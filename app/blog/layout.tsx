import React from "react";
import Header from "@/components/General/Header";
import Footer from "@/components/General/Footer";
import { getSEOTags } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = getSEOTags({
  title: "Blog | fly100",
  description:
    "Longform essays and guides on paragliding, mindset, and XC mastery from fly100.",
  canonicalUrlRelative: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <div className="w-full max-w-3xl px-4 py-12 md:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

