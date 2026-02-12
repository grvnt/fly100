import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import config from "@/config";

const BLOG_AUTHOR_EMAIL = process.env.BLOG_AUTHOR_EMAIL?.trim().toLowerCase();

// Only the configured blog author can access /dashboard/blog/* (new post, edit, etc.).
// Other dashboard users (e.g. Wingmates members) can use the rest of the dashboard but not the blog editor.
export default async function BlogEditorLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!BLOG_AUTHOR_EMAIL) {
    return <>{children}</>;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(config.auth.loginUrl);
  }

  const email = user.email?.toLowerCase();
  if (email !== BLOG_AUTHOR_EMAIL) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
