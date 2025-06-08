import React from "react";
import { websiteName } from "@/data/base";
import Head from "next/head";
import { Metadata } from "next";
import AboutPage from "@/components/LandingPageSections/About/AboutPage";

const pageTitle = "About";
const pageDescription =
  "Learn more about Tom Zhang, his work, skills, and expertise in various fields like AI, programming, entrepreneurship, and more.";
const pageKeywords =
  "Tom Zhang, about, AI, entrepreneurship, programming, tech, machine learning, software engineer";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,

  openGraph: {
    images: [
      {
        url: "https://tomzhang.info/og-images/ogi_about.jpg",
        width: 1120,
        height: 630,
        alt: "Tom Zhang's Personal Website",
      },
    ],
  },
};

export default function AboutMe() {
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
      <AboutPage />
    </>
  );
}
