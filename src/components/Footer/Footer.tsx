"use client";

import React from "react";
import styles from "./Footer.module.css";
import {
  navigateLinks,
  exploreLinks,
  moreResources,
} from "@/data/navigationLinks";
import ViewsCount from "./ViewsCount";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation Links */}
        <div className={styles.navSection}>
          <h3 className={styles.navTitle}>Navigate</h3>
          <ul className={styles.navList}>
            {navigateLinks.map((link, index) => (
              <li key={index}>
                <Link
                  key={link.id}
                  href={link.reference}
                  className={styles.navLink}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Links */}
        <div className={styles.navSection}>
          <h3 className={styles.navTitle}>Explore</h3>
          <ul className={styles.navList}>
            {exploreLinks.map((link, index) => (
              <li key={index}>
                <Link
                  key={link.id}
                  href={link.reference}
                  className={styles.navLink}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Resources */}
        <div className={styles.navSection}>
          <h3 className={styles.navTitle}>More Resources</h3>
          <ul className={styles.navList}>
            {moreResources.map((link, index) => (
              <li key={index}>
                <Link
                  key={link.id}
                  href={link.reference}
                  className={styles.navLink}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <ViewsCount />
        <p className={styles.footerText}>
          © 2025 Tom Zhang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
