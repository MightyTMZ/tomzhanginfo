import React from "react";
import styles from "./OrbitView.module.css";
import { FaBrain, FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function OrbitView() {
  return (
    <section className={styles.orbitViewSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <span>My Startup</span>
            </div>

            <h2 className={styles.title}>
              Stop underselling. <br />
              <span className={styles.highlight}>Stop oversharing </span>
            </h2>

            <p className={styles.description}>
              "I always feel like I yap too much or leave out important stuff.
              Never the right balance." → “You shouldn’t have to guess how to
              tell your story. OrbitView helps you strike the perfect balance —
              automatically.”
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <FaBrain className={styles.featureIcon} />
                <span>AI-Powered Analysis</span>
              </div>
              {/* <div className={styles.feature}>
                <FaUsers className={styles.featureIcon} />
                <span>Smart Connections</span>
              </div> */}
              <div className={styles.feature}>
                <FaClock className={styles.featureIcon} />
                <span>Never Forget Again</span>
              </div>
            </div>

            <Link href="/orbitview" className={styles.ctaButton}>
              <span>Available for use now!</span>
              <FaArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.visualCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <Image
                    src={"/ov_logo.png"}
                    alt={"OrbitView logo"}
                    height={500}
                    width={500}
                  />
                </div>
                <div className={styles.cardTitle}>OrbitView</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>80%</span>
                  <span className={styles.statLabel}>Time Saved</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>AI</span>
                  <span className={styles.statLabel}>Powered</span>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span>
                  Tired of the time wasted recollecting achievements, projects,
                  or experiences? Overselling yourself? Underselling yourself?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
