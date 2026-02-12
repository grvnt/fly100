"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import supabase from "@/lib/supabase/client";
import config from "@/config";

type ErrorType = "no_code" | "exchange_failed" | null;

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"exchanging" | "done" | "error">("exchanging");
  const [errorType, setErrorType] = useState<ErrorType>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const code = searchParams.get("code");
    const hash = typeof window !== "undefined" ? window.location.hash?.slice(1) : "";
    const hashParams = hash ? new URLSearchParams(hash) : null;
    const access_token = hashParams?.get("access_token");
    const refresh_token = hashParams?.get("refresh_token");

    // Implicit flow: tokens in hash (Supabase sometimes returns this instead of PKCE)
    if (access_token && refresh_token) {
      supabase.auth
        .setSession({ access_token, refresh_token })
        .then(({ error }) => {
          if (error) {
            setErrorMessage(error.message || "");
            setErrorType("exchange_failed");
            setStatus("error");
            return;
          }
          window.location.replace(config.auth.callbackUrl);
        })
        .catch((err) => {
          setErrorMessage(err?.message || String(err));
          setErrorType("exchange_failed");
          setStatus("error");
        });
      return;
    }

    // PKCE: code in query
    if (!code) {
      setErrorType("no_code");
      setStatus("error");
      return;
    }

    supabase.auth
      .exchangeCodeForSession(code)
      .then(({ error }) => {
        if (error) {
          setErrorMessage(error.message || "");
          setErrorType("exchange_failed");
          setStatus("error");
          return;
        }
        window.location.replace(config.auth.callbackUrl);
      })
      .catch((err) => {
        setErrorMessage(err?.message || String(err));
        setErrorType("exchange_failed");
        setStatus("error");
      });
  }, [searchParams]);

  if (status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center max-w-md space-y-4">
          <p className="text-red-400 font-medium">Sign-in failed.</p>
          {errorType === "no_code" && (
            <p className="text-sm text-base-content/70">
              No authorization code or tokens were received. In Supabase go to{" "}
              <strong>Authentication → URL Configuration → Redirect URLs</strong> and add{" "}
              <code className="text-xs bg-black/30 px-1 rounded">http://localhost:3000/auth/callback</code>.
              Then try signing in again.
            </p>
          )}
          {errorType === "exchange_failed" && (
            <>
              <p className="text-sm text-base-content/70">
                The authorization code or session could not be exchanged.
              </p>
              {errorMessage && (
                <p className="text-xs text-red-300/90 font-mono break-all">
                  {errorMessage}
                </p>
              )}
              <p className="text-sm text-base-content/60">
                Start a fresh sign-in from the sign-in page (do not refresh this page). If you see &quot;code already been used&quot; or &quot;invalid grant&quot;, the code expired or was already used — go back and click Sign in with Google again.
              </p>
            </>
          )}
          <a href={config.auth.loginUrl} className="inline-block text-indigo-400 underline">
            Back to sign-in
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <p className="text-base-content/70">Signing you in…</p>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center p-8">
          <p className="text-base-content/70">Loading…</p>
        </main>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
