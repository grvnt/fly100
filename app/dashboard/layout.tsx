import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import config from "@/config";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // In production, keep /dashboard protected.
  // In development, don't block access while auth is being debugged,
  // so you can reach internal tools like the blog editor.
  if (!user && process.env.NODE_ENV === "production") {
    redirect(config.auth.loginUrl);
  }

  return <>{children}</>;
}
