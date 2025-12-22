"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
// import Tom1 from "./tz.webp";
import Image from "next/image";
// import PrimaryAppButton from "@/components/PrimaryAppButton/PrimaryAppButton";
// import SecondaryAppButton from "@/components/SecondaryAppButton/SecondaryAppButton";
// import TertiaryAppButton from "@/components/TertiaryAppButton/TertiaryAppButton";
import SlideAnimationButton from "@/components/SlideAnimationButton/SlideAnimationButton";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import HeroBackground from "@/components/HeroBackground/HeroBackground";
// import Link from "next/link";

// Lazy load ReactTyped to reduce initial bundle size
const ReactTyped = dynamic(
  () => import("react-typed").then((mod) => mod.ReactTyped),
  { ssr: false }
);

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
    nickname: "Tom Zhanergy ⚡",
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
  const [currentPortraitIndex, setCurrentPortraitIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tomPortraits = [
    "/tom-portrait/tom-portrait.png",
    "/tom-portrait/tom-midsmile.png",
    "/tom-portrait/tom-fullsmile.png"
  ];

  // Lazy load video when component mounts
  useEffect(() => {
    if (videoRef.current && !isVideoLoaded) {
      setIsVideoLoaded(true);
    }
  }, [isVideoLoaded]);

  // Prefetch hover portrait images for smoother animation
  useEffect(() => {
    const prefetchImages = () => {
      const link1 = document.createElement("link");
      link1.rel = "prefetch";
      link1.href = tomPortraits[1];
      link1.as = "image";
      document.head.appendChild(link1);

      const link2 = document.createElement("link");
      link2.rel = "prefetch";
      link2.href = tomPortraits[2];
      link2.as = "image";
      document.head.appendChild(link2);
    };

    // Prefetch after initial render
    const timer = setTimeout(prefetchImages, 1000);
    return () => clearTimeout(timer);
  }, [tomPortraits]);

  // Handle portrait animation on hover
  useEffect(() => {
    if (!isHovering) return;

    // Reset to first portrait when starting hover
    setCurrentPortraitIndex(0);

    // Forward animation: smile sequence (0 -> 1 -> 2)
    const forwardInterval = setInterval(() => {
      setCurrentPortraitIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= tomPortraits.length) {
          clearInterval(forwardInterval);
          return prevIndex; // Stay at the last portrait
        }
        return nextIndex;
      });
    }, 350); // Smooth timing, not too fast

    return () => {
      clearInterval(forwardInterval);
    };
  }, [isHovering, tomPortraits.length]);

  // Handle reverse animation when mouse leaves
  useEffect(() => {
    if (isHovering) return;

    // Only reverse if we're not already at the first portrait
    if (currentPortraitIndex === 0) return;

    // Reverse animation: fade back to original (current -> ... -> 0)
    const reverseInterval = setInterval(() => {
      setCurrentPortraitIndex((prevIndex) => {
        if (prevIndex <= 0) {
          clearInterval(reverseInterval);
          return 0; // Stay at the first portrait
        }
        return prevIndex - 1;
      });
    }, 350);

    return () => {
      clearInterval(reverseInterval);
    };
  }, [isHovering, currentPortraitIndex]);

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

  // const handleViewNewsletter = () => {
  //   router.push("/newsletter/");
  // };

  const handlePlayGames = () => {
    router.push("/games/");
  };

  // const handleServices = () => {
  //   router.push("/services/");
  // };

  return (
    <section id="hero" className={styles.hero}>
      <HeroBackground/>
      <div className={styles.content}>
        <h1 className={styles.helloHeading}>
          Hello, my name is <span className={styles.name}>Tom Zhang</span>
        </h1>
        <div className={styles.imageWrapper}>
          <div 
            className={styles.portraitContainer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src={tomPortraits[currentPortraitIndex]}
              alt="Tom Zhang"
              width={300}
              height={300}
              className={styles.portraitImage}
              priority={currentPortraitIndex === 0}
              fetchPriority={currentPortraitIndex === 0 ? "high" : "low"}
              loading={currentPortraitIndex === 0 ? "eager" : "lazy"}
            />
          </div>
          <ReactTyped
            strings={[
              "ENTJ 🧑",
              "First-principles Polymath 🌎🌍🌏",
              "World-Class Engineer 🧑‍🔬",
              "Multi-time Hackathon Winner 🏆",
              "Computer Scientist",
              "Computer Engineer",
              "Electrical Engineer",
              "AI Engineer",
              "Software Engineer",
              "Mechanical Engineer",
              "Chemical Engineer",
            ]}
            typeSpeed={35}
            backSpeed={10}
            loop
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          />
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
          {/* <SlideAnimationButton
            text="Subscribe to my newsletter"
            color="#ff9900ff"
            onClick={handleViewNewsletter}
          /> */}
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
