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
import { ReactTyped } from "react-typed";

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

  const handleViewResume = () => {
    router.push("/resume/");
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
          <ReactTyped
            strings={[
              "ENTJ 🧑",
              "Passionate Gym Enthusiast ❤️‍🩹",
              "Lover of Scenic Adventures 🌵",
              "Road Trip Explorer 🛣️",
              "Tech Builder ⚙️",
              "Aspiring World-Class Engineer 🧑‍🔬",
              "Multi-Sport Athlete ⚾🥏",
              "Continuous Learner",
            ]}
            typeSpeed={35}
            backSpeed={10}
            loop
            style={{
              fontWeight: "bold",
              fontSize: "24px", 
            }}
          ></ReactTyped>
          {/* <Image src={Tom1} alt={"Tom Zhang"} className={styles.profileImage} /> */}
        </div>
        <div className={styles.buttonContainer}>
          <SlideAnimationButton
            text="Contact me"
            color="#1d2161"
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
          <SlideAnimationButton
            text="Download my resume"
            color="#8C1515"
            onClick={handleViewResume}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
