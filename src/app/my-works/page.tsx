"use client";

import React from "react";
import styles from "./MyWorks.module.css";
import { projects } from "@/data/works";
import Link from "next/link";
import Image from "next/image";

const MyWorks = () => {
  return (
    <section className={styles.myWorksPage}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>My Works</h1>
        <p className={styles.description}>
          Explore my projects and see how I've brought my ideas to life. Each
          project highlights my dedication to innovation and technology.
        </p>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <Image
                src={project.featureImage}
                alt={project.title}
                className={styles.projectFeatureImage}
              />
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkIcon}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
