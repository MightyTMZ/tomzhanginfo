// app/not-found.tsx
import Link from "next/link";
import styles from "./not-found.module.css";
import { orbitViewLink } from "@/data/orbitview";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorSection}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            Oops! The page you're looking for seems to have wandered off into
            the digital wilderness.
          </p>
        </div>

        <div className={styles.navigationSection}>
          <h3 className={styles.sectionTitle}>Let's get you back on track:</h3>

          <div className={styles.buttonGrid}>
            <Link href="/connect-with-me" className={styles.navButton}>
              <span className={styles.buttonText}>Connect with Me</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>

            <Link href="/my-works" className={styles.navButton}>
              <span className={styles.buttonText}>My Works</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>

            <Link href="/newsletter" className={styles.navButton}>
              <span className={styles.buttonText}>Newsletter</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>

            <a
              href="/Tom Zhang - Resume.pdf"
              download
              className={styles.navButton}
            >
              <span className={styles.buttonText}>Download Resume</span>
              <span className={styles.buttonIcon}>↓</span>
            </a>

            <Link
              href={orbitViewLink}
              className={styles.navButton}
              target="_blank"
            >
              <span className={styles.buttonText}>Sign up for OrbitView</span>
              <span className={styles.buttonIcon}>→</span>
            </Link>
          </div>

          <div className={styles.homeLink}>
            <Link href="/" className={styles.homeButton}>
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
