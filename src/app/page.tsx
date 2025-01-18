import React from "react";
import Hero from "@/components/LandingPageSections/Hero/Hero";
import About from "@/components/LandingPageSections/About/About";
import MissionStatement from "@/components/LandingPageSections/MissionStatement/MissionStatement";
import Quote from "@/components/LandingPageSections/Quote/Quote";
import Contact from "@/components/LandingPageSections/Contact/Contact";
import { websiteName } from "@/data/base";
import Head from "next/head";

const Home = () => {
  // title: Tom Zhang - Home

  const pageTitle = "Home";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Hero />
      <About />
      <MissionStatement />
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
