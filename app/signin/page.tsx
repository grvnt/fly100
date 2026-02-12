import { Suspense } from "react";
import SignInForm from "./SignInForm";
import config from "@/config";

function SignInFallback() {
  return (
    <main className="p-8 md:p-24" data-theme={config.colors.theme}>
      <div className="text-center mb-4">
        <a href="/" className="btn btn-ghost btn-sm">
          Home
        </a>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12">
        Sign-in to Fly100
      </h1>
      <div className="max-w-xl mx-auto text-center text-base-content/70">
        Loading…
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInFallback />}>
      <SignInForm />
    </Suspense>
  );
}
