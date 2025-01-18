"use client";

import React from "react";
import styles from "./CurrentVenturesPage.module.css"; // Importing the CSS module
import { websiteName } from "@/data/base";
import Head from "next/head";

function CurrentVenturesPage() {
  const pageTitle = "Current Ventures";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <header className={styles.heroSection}>
          <h1 className={styles.title}>Current Ventures</h1>
          <p className={styles.tagline}>
            Discover what I am currently working on... 👍
          </p>
        </header>

        {/* OrbitView Section */}
        <section className={styles.ventureSection}>
          <h2>OrbitView</h2>
          <p>
            OrbitView is a revolutionary platform designed to help experts
            effortlessly monetize their expertise. With OrbitView, professionals
            can train personalized AI agents that act as extensions of their
            expertise, enabling them to share knowledge effortlessly while
            opening new streams of passive income.
          </p>
          <p>
            Learners gain access to tailored, trusted insights from the people
            they admire most, breaking away from generic content and discovering
            actionable knowledge.
          </p>
          <ul className={styles.visionList}>
            <li>
              Professionals can upload and manage their knowledge base
              seamlessly.
            </li>
            <li>
              “Free” and “paid” AI agents allow for scalable knowledge-sharing
              models.
            </li>
            <li>
              Bridging the gap between trust, personalization, and
              accessibility.
            </li>
          </ul>
          <p>
            <strong>What’s Next?</strong> OrbitView is currently under
            development, with features being refined to ensure the ultimate user
            experience. Stay tuned for updates as we move closer to launch!
          </p>
        </section>

        {/* Ollama Book Section */}
        <section className={styles.ventureSection}>
          <h2>Ollama: The Practical Guide</h2>
          <p>
            I am contributing a book dedicated to <strong>Ollama</strong>. This
            guide is designed for professionals and individuals who want to
            harness AI’s power to build seamless workflows and optimize their
            productivity.
          </p>
          <p>
            The book covers everything from setting up Ollama to using its tools
            effectively in real-world scenarios. It is a tool that is growing in
            popularity due to its privacy and low-cost way to use language
            models locally on your devices. In other words, you can now use AI
            on your own laptop or device without having to send all your data
            over on cloud.
          </p>
          <p>
            <strong>Why This Matters:</strong> As AI continues to transform
            industries, this guide will serve as a critical resource for those
            looking to stay ahead of the curve.
          </p>
        </section>

        {/* Closing Section
      <section className={styles.closingSection}>
        <h2>Join the Journey</h2>
        <p>
          Both OrbitView and Ollama are about creating meaningful change—whether
          it’s empowering professionals to share their expertise or helping
          others navigate the world of AI.
        </p>
        <p>
          These projects are just the beginning. Let’s connect and explore how
          we can build a smarter, more connected future together.
        </p>
      </section> */}

        {/* Contact Section */}
        <footer className={styles.contactSection}>
          <h3>Get in Touch</h3>
          <p>
            Interested in learning more or collaborating? Reach out—I’d love to
            hear from you.
          </p>
          <div className={styles.contactLinks}>
            {/*<a href={`mailto:${email}`}>📧 Email Me</a>*/}
            <a href="/connect-with-me">📱 Connect with Me</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default CurrentVenturesPage;
