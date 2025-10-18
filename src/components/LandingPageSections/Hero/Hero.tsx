"use client";

import React from "react";
import styles from "./Hero.module.css";
// import Tom1 from "./tz.webp";
import Image from "next/image";
// import PrimaryAppButton from "@/components/PrimaryAppButton/PrimaryAppButton";
// import SecondaryAppButton from "@/components/SecondaryAppButton/SecondaryAppButton";
// import TertiaryAppButton from "@/components/TertiaryAppButton/TertiaryAppButton";
import SlideAnimationButton from "@/components/SlideAnimationButton/SlideAnimationButton";
import { useRouter } from "next/navigation";
import { ReactTyped } from "react-typed";
// import Link from "next/link";

const nicknames = [
  {
    nickname: "aTOM",
    subText: "",
  },
  {
    nickname: "aTOMic",
    subText: "",
  },
  {
    nickname: "TΩ",
    subText: "(T'Ohm'm)",
  },
  {
    nickname: "TOML",
    subText: "",
  },
  {
    nickname: "auTOMate",
    subText: "",
  },
  {
    nickname: "phoTOMetry",
    subText: "",
  },
  {
    nickname: "phanTOM 👻",
    subText: "",
  },
  {
    nickname: "BotTOM-up ⬆️⬇️",
    subText: "",
  },
  {
    nickname: "quanTOM",
    subText: "",
  },
];

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

  const handleViewResume = () => {
    router.push("/resume/");
  };

  const handleViewNewsletter = () => {
    router.push("/newsletter/");
  };

  const handlePlayGames = () => {
    router.push("/games/");
  };

  const handleServices = () => {
    router.push("/services/");
  };

  return (
    <section id="hero" className={styles.hero}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="/189838-886596433_small.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.helloHeading}>
          Hello, my name is <span className={styles.name}>Tom Zhang</span>
        </h1>
        <div className={styles.imageWrapper}>
          <div className={styles.portraitContainer}>
            <Image
              src="/tom-portrait.png"
              alt="Tom Zhang"
              width={300}
              height={300}
              className={styles.portraitImage}
            />
          </div>
          <ReactTyped
            strings={[
              "ENTJ 🧑",
              "World-Class Engineer 🧑‍🔬",
              "Full Stack Software Engineer 🖥️🧑🏻‍💻",
              "Multi-time Hackathon Winner 🏆",
              "PhD-trained Electrical Engineer",
              "PhD-trained Computer Scientist",
              "First-principles Polymath 🌎🌍🌏",
            ]}
            typeSpeed={35}
            backSpeed={10}
            loop
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          ></ReactTyped>
        </div>
        <div className={styles.nicknamesSection}>
          <span className={styles.nicknamesLabel} >I'm also known as...</span>
          <div className={styles.nicknamesList}>
            {nicknames.map((nickname, e) => (
              <span key={e} className={styles.nickname}>
                {nickname.nickname}{" "}
                {nickname.subText && (
                  <span className={styles.nicknameSubtext}>
                    {nickname.subText}
                  </span>
                )}
              </span>
            ))}
          </div>
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
          {/* <SlideAnimationButton
            text="Work with me"
            color="#010102ff"
            onClick={handleServices}
          /> */}
          <SlideAnimationButton
            text="Subscribe to my newsletter"
            color="#ff9900ff"
            onClick={handleViewNewsletter}
          />
          <SlideAnimationButton
            text="Download my resume"
            color="#8C1515"
            onClick={handleViewResume}
          />

          <SlideAnimationButton
            text="Play a bit of games to chill? 😄☺️"
            color="#a98080ff"
            onClick={handlePlayGames}
          />
        </div>
        {/* Manifestation 
        <div className={`flex ${styles.manifestation}`}>
          <Link rel="stylesheet" href="https://tomzhangcapital.vercel.app/">
            <span className="font-bold">Tom Zhang Capital </span>- Venture
            capital fund
          </Link>
          <Link rel="stylesheet" href="https://tomzhangglobal.vercel.app/">
            <span className="font-bold">Zhang Global</span> - Investment
            management and hedge fund company pursuing a global macro strategy
          </Link>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;
