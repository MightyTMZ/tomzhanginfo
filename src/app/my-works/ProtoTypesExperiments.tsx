"use client";

import styles from "./MyWorks.module.css";
import { protoTypes_Experiments } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./ShowMoreLessButton.css";

const PrototypesExperiments = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = showMore
    ? protoTypes_Experiments
    : protoTypes_Experiments.slice(0, 3);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <h1 className={styles.sectionTitle}>Prototypes and Experiments</h1>
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
              {project.links.length > 0 ? (
                <>
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
                </>
              ) : (
                <></>
              )}
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

export default PrototypesExperiments;
