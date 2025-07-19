import React from "react";
import styles from "./OrbitView.module.css";
import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import { FaRocket, FaBrain, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const pageTitle = "OrbitView";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription = "Stop Reading Resumes. Start Building Connections. Get instant, AI-powered answers about any resume—so you can spend less time scrolling and more time having real conversations.";
const pageKeywords = "orbitview, ai, resume, hiring, recruitment, connections, startup";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
  
};

export default function OrbitView() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <ReturnHomeButton />
          
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <FaRocket className={styles.logo} />
            </div>
            
            <h1 className={styles.mainTitle}>
              Stop Reading Resumes.
              <br />
              <span className={styles.highlight}>Start Building Connections.</span>
            </h1>
            
            <p className={styles.heroDescription}>
              Can&rsquo;t mentally recall the achievements and impact you have made when you are under pressure or tired? Get instant, AI-powered answers about any resume—so you can spend less time scrolling and more time having real conversations.
            </p>
            
            <div className={styles.ctaContainer}>
              <a href="https://www.orbitview.net/" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                Try OrbitView Free
              </a>
              <a href="https://www.orbitview.net/" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tired of the time wasted recollecting your achievements?</h2>
          <p className={styles.sectionDescription}>
            OrbitView removes the friction of recalling your entire experience—so you always have the right answer, even when you are tired or under pressure.
          </p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaBrain />
              </div>
              <h3 className={styles.featureTitle}>AI-Powered Analysis</h3>
              <p className={styles.featureDescription}>
                Instantly extract key insights, achievements, and skills from any resume with advanced AI technology.
              </p>
            </div>
            
            {/* <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUsers />
              </div>
              <h3 className={styles.featureTitle}>Smart Connections</h3>
              <p className={styles.featureDescription}>
                Build meaningful relationships by understanding candidates&rsquo; backgrounds and experiences instantly.
              </p>
            </div> */}
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaClock />
              </div>
              <h3 className={styles.featureTitle}>Save Time</h3>
              <p className={styles.featureDescription}>
                Reduce resume review time by 80% while gaining deeper insights than traditional methods.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCheckCircle />
              </div>
              <h3 className={styles.featureTitle}>Always Prepared</h3>
              <p className={styles.featureDescription}>
                Never miss important details or achievements, even when you&rsquo;re tired or under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <h2 className={styles.benefitsTitle}>
                You don&rsquo;t have to be a genius to be a billionaire.
              </h2>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>01</span>
                  <div className={styles.benefitContent}>
                    <h3>Instant Insights</h3>
                    <p>Get comprehensive insights of skills, experience, and achievements in seconds</p>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>02</span>
                  <div className={styles.benefitContent}>
                    <h3>Better Conversations</h3>
                    <p>Answer intelligent questions based on your resume effortlessly and confidently</p>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>03</span>
                  <div className={styles.benefitContent}>
                    <h3>Memory Never Fails</h3>
                    <p>Can&rsquo;t mentally recall your achievements under pressure? OrbitView ensures you never forget, even when you&rsquo;re tired or stressed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.benefitsVisual}>
              <div className={styles.visualPlaceholder}>
                <Image src="/ov_logo.png" alt="OrbitView Demo" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to stop wasting time recollecting achievements?</h2>
          <p className={styles.ctaDescription}>
            Join the future of recruitment where AI ensures you never forget your impact, even under pressure.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://www.orbitview.net/" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Start Free Trial</a>
            <a href="https://www.orbitview.net/" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Schedule Demo</a>
          </div>
        </div>
      </section>
    </>
  );
} 