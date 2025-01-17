"use client";

import React from "react";
import styles from "./MyWorks.module.css";
import {
  coreProjects,
  protoTypes_Experiments,
  tools_Integrations,
} from "@/data/works";
import Link from "next/link";
import Image from "next/image";

const MyWorks = () => {
  return (
    <section className={styles.myWorksPage}>
      <div className={styles.container}>
        <p className={styles.description}>
          Here are some of my most significant works: projects, prototypes,
          experiments, tools, and integrations...
        </p>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.projectGrid}>
          {coreProjects.map((project) => (
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
        <h1 className={styles.sectionTitle}>Prototypes and Experiments</h1>
        <div className={styles.projectGrid}>
          {protoTypes_Experiments.map((project) => (
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
        <h1 className={styles.sectionTitle}>Tools and Integration</h1>
        <div className={styles.projectGrid}>
          {tools_Integrations.map((project) => (
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
