import React from "react";
import styles from "./Services.module.css";
import Contact from "@/components/LandingPageSections/Contact/Contact";
import { websiteName } from "@/data/base";
import Head from "next/head";

const Services = () => {
  const pageTitle = "Services";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <div className={styles.content}>
            {/*<div className={styles.imageContainer}>
           <img
              className={styles.profileImage}
              src="your-image-url-here.jpg"
              alt="Tom Zhang"
            />
          </div>*/}
            <div className={styles.textContainer}>
              <p className={styles.description}>
                Coming soon! I am currently in the discussions and
                considerations about offering personal service to customers. If
                you need something, don't hesistate to{" "}
                <a href="/connect-with-me" style={{ color: "blue" }}>
                  contact or connect with me.
                </a>
              </p>
            </div>
          </div>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Services;
