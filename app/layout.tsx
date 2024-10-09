import React from 'react'
import { Inter } from 'next/font/google'
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import "./globals.css";
// Remove the ThemeProvider import
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        {children}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://fly100.ck.page/28797b89a2/index.js"
          data-uid="28797b89a2"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
