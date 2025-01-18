import React from "react";
import About from "@/components/LandingPageSections/About/About";
import { websiteName } from "@/data/base";
import Head from "next/head";

const AboutMe = () => {
  const pageTitle = "About";
  const pageDescription =
    "Learn more about Tom Zhang, his work, skills, and expertise in various fields like AI, programming, entrepreneurship, and more.";
  const pageKeywords =
    "Tom Zhang, about, AI, entrepreneurship, programming, tech, machine learning, software engineer";

  const fullTitle = websiteName + " - " + pageTitle;

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
      <About />
    </>
  );
};

export default AboutMe;
