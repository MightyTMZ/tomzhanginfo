import React from "react";
import styles from "./About.module.css"; // Import CSS Module
import { aboutTitle, aboutDescription } from "@/data/aboutTom";

const AboutPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {" "}
        <h1 className={styles.sectionTitle}>About Me</h1>
        <div className={styles.content}>
          {/*<div className={styles.imageContainer}>
           <img
              className={styles.profileImage}
              src="your-image-url-here.jpg"
              alt="Tom Zhang"
            />
          </div>*/}
          <div className={styles.textContainer}>
            <p className={styles.intro}>{aboutTitle}</p>
            <p className={styles.description}>{aboutDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
