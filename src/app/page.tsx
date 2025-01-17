import React from "react";
import Hero from "@/components/LandingPageSections/Hero/Hero";
import About from "@/components/LandingPageSections/About/About";
import MissionStatement from "@/components/LandingPageSections/MissionStatement/MissionStatement";
import Quote from "@/components/LandingPageSections/Quote/Quote";
import Contact from "@/components/LandingPageSections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <MissionStatement />
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
