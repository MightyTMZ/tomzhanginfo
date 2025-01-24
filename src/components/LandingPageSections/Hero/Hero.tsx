"use client";

import React from "react";
import styles from "./Hero.module.css";
import Tom1 from "./tz.webp";
// import Tom2 from "./realTom.png";
import Image from "next/image";
import PrimaryAppButton from "@/components/PrimaryAppButton/PrimaryAppButton";
import { useRouter } from "next/navigation";
import SecondaryAppButton from "@/components/SecondaryAppButton/SecondaryAppButton";
import TertiaryAppButton from "@/components/TertiaryAppButton/TertiaryAppButton";

const Hero = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/connect-with-me/");
  };

  const handleResources = () => {
    router.push("/resources/");
  };
  const handleViewWorks = () => {
    router.push("/my-works/");
  };
  const handleViewAthletics = () => {
    router.push("/athletics/");
  };

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
          {/*<Image
            src={Tom2}
            alt={"Tom Zhang"}
            className={styles.profileImage}
          ></Image>*/}
        </div>
        <div className={styles.buttonContainer}>
          {" "}
          <PrimaryAppButton text="Contact me" onClick={handleContact} />
          <SecondaryAppButton text="View my works" onClick={handleViewWorks} />
          <TertiaryAppButton text="Resources" onClick={handleResources} />
          <PrimaryAppButton text="Athletics" onClick={handleViewAthletics} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
