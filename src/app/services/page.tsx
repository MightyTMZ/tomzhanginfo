import React from "react";
import styles from "./Services.module.css";
import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import CustomAppLink from "@/components/link";

const pageTitle = "Services";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription = "I will start to offer personal services very soon!";
const pageKeywords = "services, freelance, skills";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function Services() {
  return (
    <>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <ReturnHomeButton />
          <h2 className={styles.sectionTitle}>Services</h2>
          <div className={styles.content}>
            {/*<div className={styles.imageContainer}>
           <img
              className={styles.profileImage}
              src="your-image-url-here.jpg"
              alt="Tom Zhang"
            />
          </div>*/}
            <div className={styles.textContainer}>
              <p className={styles.description}>
                Web & app development, bots, and automation—custom solutions
                tailored for you. &rarr; &nbsp;
                <CustomAppLink
                  href="https://www.tomzhang.dev/"
                  hoverText="tomzhang.dev 😃"
                  nonHoverText="tomzhang.dev"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
