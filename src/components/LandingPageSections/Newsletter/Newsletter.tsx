import React from "react";
import styles from "./Newsletter.module.css";
import { places } from "./places/places";
import SubstackFeed from "./SubstackFeed";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section id="newsletter" className={styles.newsletterContainer}>
      <h1 className={styles.newsletterHeading}>My Newsletter/Blog</h1>
      <SubstackFeed />
      <hr />
      <p className={styles.readBy}>Read by awesome people from </p>
      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          {places.map((logo, index) => (
            <Image
              key={index} // Use index here because of duplication
              src={logo.logo}
              alt={logo.title}
              title={logo.title}
              width={100}
              height={50}
              style={{
                width: "auto",
                height: "100%",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
