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
import { FaFlagUsa } from "react-icons/fa";
import { SiAircanada } from "react-icons/si";
import { GiFrisbee } from "react-icons/gi";

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
          I am a dedicated baseball and ultimate frisbee athlete projected to
          lead my school&apos;s varsity baseball team (Earl Haig Secondary
          School) as captain this spring and as a key player on co-ed ultimate
          frisbee team.
          <br />
          <br />I have been a rep-elite baseball player for four years,
          traveling to numerous cities across North America to compete,
          including{" "}
          <span className={styles["inline-flex"]}>
            South Bend, Indiana &nbsp;
            <FaFlagUsa />
            &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Buffalo, New York &nbsp;
            <FaFlagUsa />
            &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Toronto, Ontario &nbsp;
            <SiAircanada /> &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Detroit, Michigan &nbsp;
            <FaFlagUsa />
            &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Ottawa, Ontario &nbsp;
            <SiAircanada /> &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Chicago, Illinois &nbsp;
            <FaFlagUsa />
            &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Windsor, Ontario &nbsp;
            <SiAircanada /> &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Barrie, Ontario &nbsp;
            <SiAircanada /> &nbsp;
          </span>
          ;{" "}
          <span className={styles["inline-flex"]}>
            Caledon, Ontario &nbsp;
            <SiAircanada /> &nbsp;
          </span>
          , and many more. This summer (2025), I aim to compete with Elites
          <span className={styles["inline-flex"]}>
            Elites Ultimate TORO &nbsp;
            <GiFrisbee /> &nbsp;
          </span>
          , continuing to challenge myself at the highest levels of competition
          on a provincial and national scale.
          <br />
          <br />
          Off the field, I am committed to rigorous training in speed, agility,
          power, strength, explosiveness, endurance, and conditioning to
          maximize my athletic potential. Explore my performance metrics below,
          and feel free to reach out with any inquiries or opportunities.
          <br />
          <br />
          Below are my stats in the gym
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
