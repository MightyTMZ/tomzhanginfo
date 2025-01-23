import React from "react";
import { Metadata } from "next";
import { websiteName } from "@/data/base";
import { AthleticCollapsibleList } from "./AthleticCollapsibleList";
import {
  speedAndAgility,
  powerAndStrength,
  explosiveness,
  endurance,
  conditioning,
} from "@/data/athleticProgress";
import styles from "./Athletics.module.css";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Athletics";
const pageDescription =
  "Tom Zhang plays ultimate frisbee and baseball. Check out my athletic metrics, highlights, clips, and goals.";
const pageKeywords =
  "Tom Zhang, ultimate, ultimate frisbee, frisbee, baseball, sports, athletics";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function Athletics() {
  return (
    <>
      <section className={styles.athleticsPage}>
        <ReturnHomeButton />
        <p
          className={`mt-4 mb-4 ${styles.aboutPara}`}
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            marginBottom: "30px",
          }}
        >
          I am a dedicated baseball and ultimate frisbee athlete with
          aspirations to lead my school's varsity baseball team (Earl Haig
          Secondary School) as captain this spring. This summer, I aim to
          compete with Elites Ultimate TORO, continuing to challenge myself at
          the highest levels of competition. Off the field, I am committed to
          rigorous training in speed, agility, power, strength, explosiveness,
          endurance, and conditioning to maximize my athletic potential. Explore
          my performance metrics below, and feel free to reach out with any
          inquiries or opportunities.
        </p>

        <AthleticCollapsibleList
          title="Speed and Agility"
          items={speedAndAgility}
        />
        <AthleticCollapsibleList
          title="Power and Strength"
          items={powerAndStrength}
        />
        <AthleticCollapsibleList title="Explosiveness" items={explosiveness} />
        <AthleticCollapsibleList title="Endurance" items={endurance} />
        <AthleticCollapsibleList title="Conditioning" items={conditioning} />
      </section>
    </>
  );
}
