import React from "react";
import styles from "./ConnectWithMe.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Contact from "@/components/LandingPageSections/Contact/Contact";
import { email } from "@/data/email";
import { socialLinks } from "@/data/socials";
import Link from "next/link";

const ConnectWithMe = () => {
  return (
    <section className={styles.connectPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Connect with Me</h1>
        <p className={styles.description}>
          Whether you have a question, a collaboration idea, or just want to say
          hi, I’d love to hear from you. Let’s get in touch!
        </p>
        {/* Social Links Section */}
        <div className={styles.socialLinks}>
          <h2 className={styles.socialTitle}>Follow Me</h2>
          <ul className={styles.socialIcons}>
            {socialLinks.map((link) => (
              <li>
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

        {/* Contact Form Section */}
        <div className={styles.contactFormSection}>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default ConnectWithMe;
