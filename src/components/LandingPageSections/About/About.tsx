import React from "react";
import styles from "./About.module.css"; // Import CSS Module

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          {/*<div className={styles.imageContainer}>
           <img
              className={styles.profileImage}
              src="your-image-url-here.jpg"
              alt="Tom Zhang"
            />
          </div>*/}
          <div className={styles.textContainer}>
            <p className={styles.intro}>
              Hello, I'm Tom Zhang. I'm passionate about technology and building
              innovative solutions to solve real-world problems.
            </p>
            <p className={styles.description}>
              With a deep interest in software development, AI, and
              entrepreneurship, I’ve embarked on a journey to revolutionize
              industries through tech. I believe in continuous learning and
              pushing boundaries to make an impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
