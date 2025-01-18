import React from "react";
import Testimonials from "@/components/Testimonials/Testimonials";
import { websiteName } from "@/data/base";
import Head from "next/head";

const TestimonialsPage = () => {
  const pageTitle = "Testimonials";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
