import React from "react";
import { websiteName } from "@/data/base";
import Head from "next/head";
import { Metadata } from "next";
import Newsletter from "@/components/LandingPageSections/Newsletter/Newsletter";

const pageTitle = "Blog and Newsletter";
const pageDescription =
  "My blogs and newsletter that I have wrote over the years. Read by awesome people from around the world.";
const pageKeywords =
  "Tom Zhang, about, AI, entrepreneurship, programming, tech, machine learning, software engineer";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function NewsletterPage() {
  return (
    <>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={websiteName + " - " + pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="your-image-url-here.jpg" />{" "}
        {/* Optionally add an image for social sharing 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={websiteName + " - " + pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="your-image-url-here.jpg" />{" "}*/}
        {/* Optionally add an image for Twitter */}
        <title>{fullTitle}</title>
      </Head>
      <Newsletter />
    </>
  );
}
