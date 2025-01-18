import React from "react";
import Testimonials from "@/components/Testimonials/Testimonials";
import { websiteName } from "@/data/base";
import { Metadata } from "next";

const pageTitle = "Testimonials";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription = "Here is what people say about me";
const pageKeywords = "testimonials, partners, mentors, collaborators";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
    </>
  );
}
