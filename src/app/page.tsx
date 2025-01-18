import React from "react";
import Hero from "@/components/LandingPageSections/Hero/Hero";
import About from "@/components/LandingPageSections/About/About";
import MissionStatement from "@/components/LandingPageSections/MissionStatement/MissionStatement";
import Quote from "@/components/LandingPageSections/Quote/Quote";
import Contact from "@/components/LandingPageSections/Contact/Contact";
import { websiteName } from "@/data/base";
import { Metadata } from "next";

const pageTitle = "Home";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription =
  "Welcome to my personal website! View my projects, prototypes, experiments, integrations, photos, etc. Enjoy!";
const pageKeywords =
  "tom, tom zhang, earl haig, canada, north york, baseball, programming, billionaire, ai, tech, ar vr, finance, economics, ultimate frisbee";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function Home() {
  // title: Tom Zhang - Home

  return (
    <>
      <Hero />
      <About />
      <MissionStatement />
      <Quote />
      <Contact />
    </>
  );
}
