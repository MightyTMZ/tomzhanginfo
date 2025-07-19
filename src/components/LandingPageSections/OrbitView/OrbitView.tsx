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
              Stop Reading Resumes.
              <br />
              <span className={styles.highlight}>Start Building Connections.</span>
            </h2>
            
            <p className={styles.description}>
              Can&apos;t mentally recall the achievements and impact you have made when you are under pressure or tired? Get instant, AI-powered answers about any resume—so you can spend less time scrolling and more time having real conversations.
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
                  <Image src={"/ov_logo.png"} alt={"OrbitView logo"} height={500} width={500}/>
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
                <span>Tired of the time wasted recollecting achievements, projects, or experiences?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 