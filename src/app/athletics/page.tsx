import React from "react";
]import { Metadata } from "next";
import { websiteName } from "@/data/base";

const pageTitle = "Athletics";
const pageDescription =
  "Tom Zhang plays ultimate frisbee and baseball. Check out my athletic metrics, highlights, clips, and goals."
const pageKeywords = "Tom Zhang, ultimate, ultimate frisbee, frisbee, baseball, sports, athletics";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function Athletics() {
  return (
    <>
      <section>
        Coming soon! I play baseball (NY Blues, Stingers, EH Carpes) and
        ultimate frisbee (Elites Ultimate: TORO)
      </section>
    </>
  );
}
