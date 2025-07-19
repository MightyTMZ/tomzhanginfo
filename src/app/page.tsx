import React from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(
  () => import("@/components/LandingPageSections/Hero/Hero")
);
const AboutPage = dynamic(
  () => import("@/components/LandingPageSections/About/AboutPage")
);
const MissionStatement = dynamic(
  () =>
    import("@/components/LandingPageSections/MissionStatement/MissionStatement")
);
const Quote = dynamic(
  () => import("@/components/LandingPageSections/Quote/Quote")
);
const OrbitView = dynamic(
  () => import("@/components/LandingPageSections/OrbitView/OrbitView")
);
/*const Contact = dynamic(
  () => import("@/components/LandingPageSections/Contact/Contact")
);*/
import { websiteName } from "@/data/base";
import { Metadata } from "next";

const pageTitle = "Home";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription =
  "Welcome to my personal website! View my projects, prototypes, experiments, integrations, photos, etc. Enjoy!";
const pageKeywords =
  "tom, tom zhang, earl haig, canada, north york, baseball, programming, harvard, orbitview billionaire, ai, tech, ar vr, finance, economics, ultimate frisbee";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
  openGraph: {
    images: [
      {
        url: "https://tomzhang.info/og-images/ogi_home.jpg",
        width: 1120,
        height: 630,
        alt: "Tom Zhang's Personal Website",
      },
    ],
  },
};

export default function Home() {
  // title: Tom Zhang - Home

  return (
    <>
      <Hero />
      <AboutPage />
      <MissionStatement />
      <OrbitView />
      <Quote />
      {/*<Contact />*/}
    </>
  );
}
