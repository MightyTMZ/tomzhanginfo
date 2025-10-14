import React from "react";
import styles from "./ConnectWithMe.module.css";
// import Contact from "@/components/LandingPageSections/Contact/Contact";
import { socialLinks, orbitviewProfileLink } from "@/data/socials";
import Link from "next/link";
import { Metadata } from "next";
import { websiteName } from "@/data/base";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Contact";
const pageDescription =
  "Get in touch with Tom Zhang for inquiries, collaboration, or networking opportunities.";
const pageKeywords = "Tom Zhang, contact, email, social media, collaboration";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
  openGraph: {
    images: [
      {
        url: "https://tomzhang.info/og-images/ogi_connectwithme.jpg",
        width: 1120,
        height: 630,
        alt: "Tom Zhang's Personal Website",
      },
    ],
  },
};

export default function ConnectWithMe() {
  return (
    <>
      <section className={styles.connectPage}>
        <div className={styles.container}>
          <ReturnHomeButton />
          <h1 className={styles.title}>Connect with Me</h1>
          <p className={styles.description}>
            Whether you have a question, a collaboration idea, or just want to
            say hi, I’d love to hear from you. Let’s get in touch!
          </p>
          {/* OrbitView Section */}
          {/* <div className={styles.orbitviewSection}>
            <h2 className={styles.socialTitle}>🪐 Chat With My Resume</h2>
            <p className={styles.orbitviewDescription}>
              Instead of emailing me your questions, try this first...
              <strong> my resume can now answer you directly.</strong> <br />
              Powered by Powered by{" "}
              <Link
                href={orbitviewProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orbitviewLink}
              >
                🪐 OrbitView
              </Link>
              , where my story speaks for itself.
            </p>
            <Link
              href={orbitviewProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.orbitviewButton}
            >
              Chat With My Resume
            </Link>

            <div className={styles.orbitviewEmbedWrapper}>
              <iframe
                src="https://www.orbitview.net/profile/tom.zhang20"
                width="100%"
                height="600"
                style={{ border: "1px solid #ccc", borderRadius: "12px" }}
                title="OrbitView Profile"
                loading="lazy"
              ></iframe>
            </div> 
          </div> */}
          {/* Social Links Section */}
          <div className={styles.socialLinks}>
            <h2 className={styles.socialTitle}>Follow Me</h2>
            <ul className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={link.label}
                  >
                    {link.icon} &nbsp; {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form Section 
          <div className={styles.contactFormSection}>
            <Contact />
          </div>*/}
        </div>
      </section>
    </>
  );
}
