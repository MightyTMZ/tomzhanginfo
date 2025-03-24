"use client";

import styles from "./MyWorks.module.css";
import { coreProjects } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./ShowMoreLessButton.css";

const CoreProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = showMore ? coreProjects : coreProjects.slice(0, 3);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <Image
              src={project.featureImage}
              alt={project.title}
              className={styles.projectFeatureImage}
            />
            <p className={styles.projectDescription}>
              {project.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className={styles.projectLinks}>
              {project.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  title={link.label}
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
        <button
          onClick={handleShowMore}
          className="showMoreLessUnderlineButton"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
};

export default CoreProjects;
