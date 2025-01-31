"use client";

import React from "react";
import styles from "./Hero.module.css";
// import Tom1 from "./tz.webp";
// import Image from "next/image";
// import PrimaryAppButton from "@/components/PrimaryAppButton/PrimaryAppButton";
// import SecondaryAppButton from "@/components/SecondaryAppButton/SecondaryAppButton";
// import TertiaryAppButton from "@/components/TertiaryAppButton/TertiaryAppButton";
import SlideAnimationButton from "@/components/SlideAnimationButton/SlideAnimationButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/connect-with-me/");
  };

  /*  const handleResources = () => {
    router.push("/resources/");
  };*/

  const handleViewWorks = () => {
    router.push("/my-works/");
  };

  const handleViewNewsletter = () => {
    router.push("/newsletter/");
  };

  return (
    <section id="hero" className={styles.hero}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="/california_interstate.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.helloHeading}>
          Hello, my name is <span className={styles.name}>Tom Zhang</span>
        </h1>
        <div className={styles.imageWrapper}>
          {/* <Image src={Tom1} alt={"Tom Zhang"} className={styles.profileImage} /> */}
        </div>
        <div className={styles.buttonContainer}>
          <SlideAnimationButton
            text="Contact me"
            color="#8C1515"
            onClick={handleContact}
          />
          <SlideAnimationButton
            text="View my works"
            color="#007662"
            onClick={handleViewWorks}
          />
          {/*<TertiaryAppButton text="Resources" onClick={handleResources} /> */}
          <SlideAnimationButton
            text="Newsletter/Blog"
            color="#e7af53"
            onClick={handleViewNewsletter}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
