import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://fly100.co
// - Name: Fly100
// - Description: The online resource for XC paraglider's striving to fly 100 km and beyond
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: grant@fly100.co

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for Fly100
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: October 9, 2024

Privacy Policy for Fly100

1. Introduction

Welcome to Fly100 ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://fly100.co (the "Site"). Fly100 is the online resource for XC paraglider's striving to fly 100 km and beyond.

2. Information We Collect

We collect personal information that you provide to us, including name, email address, and payment information. We also collect non-personal information through web cookies.

3. How We Use Your Information

We use the information we collect for order processing purposes.

4. Sharing of Your Information

We do not share your personal information with any other parties.

5. Children's Privacy

We do not knowingly collect any personal information from children under the age of 13.

6. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by sending an email to the address you have provided us.

7. Contact Us

If you have any questions about this Privacy Policy, please contact us at grant@fly100.co.

By using Fly100, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
