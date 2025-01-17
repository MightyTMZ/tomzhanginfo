import React from "react";
import styles from "./Hero.module.css";
import Tom1 from "./tz.webp";
import Tom2 from "./realTom.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.helloHeading}>
          Hello, my name is <span className={styles.name}>Tom Zhang</span>
        </h1>
        <div className={styles.imageWrapper}>
          <Image
            src={Tom1}
            alt={"Tom Zhang"}
            className={styles.profileImage}
          ></Image>
          <Image
            src={Tom2}
            alt={"Tom Zhang"}
            className={styles.profileImage}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
