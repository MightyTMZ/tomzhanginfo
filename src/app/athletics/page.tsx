import React from "react";
import styles from "./ConnectWithMe.module.css";
import Contact from "@/components/LandingPageSections/Contact/Contact";
import { socialLinks } from "@/data/socials";
import Link from "next/link";
import { Metadata } from "next";
import { websiteName } from "@/data/base";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Contact";
const pageDescription =
  "Get in touch with Tom Zhang for inquiries, collaboration, or networking opportunities.";
const pageKeywords = "Tom Zhang, contact, email, social media, collaboration";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function Athletics() {
  return (
    <>
      <section className={styles.connectPage}>
        Coming soon! I play baseball (NY Blues, Stingers, EH Carpes) and
        ultimate frisbee (Elites Ultimate: TORO)
      </section>
    </>
  );
}
