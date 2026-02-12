"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase/client";
import config from "@/config";
import { REQUIRE_DASHBOARD_AUTH } from "@/lib/dashboardAuth";

const BLOG_AUTHOR_EMAIL = process.env.NEXT_PUBLIC_BLOG_AUTHOR_EMAIL?.trim().toLowerCase();

export default function BlogEditorGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!REQUIRE_DASHBOARD_AUTH) {
      setAllowed(true);
      return;
    }
    if (!BLOG_AUTHOR_EMAIL) {
      setAllowed(true);
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace(config.auth.loginUrl);
        return;
      }
      const email = session.user?.email?.toLowerCase();
      if (email === BLOG_AUTHOR_EMAIL) {
        setAllowed(true);
      } else {
        router.replace("/blog");
      }
    });
  }, [router]);

  if (!allowed) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-base-content/70">Checking…</p>
      </main>
    );
  }

  return <>{children}</>;
}
