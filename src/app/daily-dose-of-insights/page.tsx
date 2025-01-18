import React from "react";
import QuotesScroller from "@/components/QuotesScroller/QuotesScroller";
import { websiteName } from "@/data/base";
import Head from "next/head";

const DailyDoseOfInsights = () => {
  const fullTitle = websiteName + " - " + "Daily Dose of Insights";

  <Head>
    <title>{fullTitle}</title>
  </Head>;

  return (
    <div>
      <QuotesScroller />
    </div>
  );
};

export default DailyDoseOfInsights;
