import type { Metadata } from "next";
import config from "@/config";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
} = {}): Metadata => {
  const appName = String(config.appName);
  const appDescription = String(config.appDescription);
  const siteUrl = `https://${config.domainName}/`;
  const ogTitle = (openGraph?.title ?? appName) as string;
  const ogDescription = (openGraph?.description ?? appDescription) as string;

  return {
    title: (title || appName) as string,
    description: description || appDescription,
    keywords: keywords || [appName],
    applicationName: appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : siteUrl
    ),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: (openGraph?.url ?? siteUrl) as string,
      siteName: appName,
      locale: "en_US",
      type: "website" as const,
    },
    twitter: {
      title: ogTitle,
      description: ogDescription,
      card: "summary_large_image" as const,
      creator: "@marc_louvion",
    },
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Marc Lou",
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};
