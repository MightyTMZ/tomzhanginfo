import React from "react";
import QuotesScroller from "@/components/QuotesScroller/QuotesScroller";
import { websiteName } from "@/data/base";
import { Metadata } from "next";

const fullTitle = websiteName + " - " + "Daily Dose of Insights";
const pageDescription = "Discover how Tom gets his daily dose of insights";
const pageKeywords =
  "daily, insights, Tom, Tom Zhang, Zhang, quotes, inspiration, motivation, everyday, hard work";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function DailyDoseOfInsights() {
  const d = new Date();

  let greetingMessage = "";
  const hours = d.getHours();

  if (hours < 12) {
    greetingMessage = "Good morning!";
  } else if (hours < 18) {
    greetingMessage = "Good afternoon!";
  } else {
    greetingMessage = "Good evening!";
  }

  return (
    <div className="pr-6 pl-6">
      <div style={{ maxWidth: "1200px", fontSize: "16px", fontFamily: "Montserrat" }}>
        <h1>
          {greetingMessage} Get your dose of insights by pressing the pause/play
          button along with the back/forward buttons
        </h1>
      </div>
      <hr /> <br />
      <br />
      <QuotesScroller />
    </div>
  );
}
