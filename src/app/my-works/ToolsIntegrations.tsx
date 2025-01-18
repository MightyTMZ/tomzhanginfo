"use client";

import styles from "./MyWorks.module.css";
import { tools_Integrations } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./ShowMoreLessButton.css";

const ToolsIntegration = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = showMore
    ? tools_Integrations
    : tools_Integrations.slice(0, 3);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <h1 className={styles.sectionTitle}>Tools and Integration</h1>
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

export default ToolsIntegration;
