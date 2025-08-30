"use client";

import styles from "./MyWorks.module.css";
import { currently_working_on } from "@/data/works";
import { useState } from "react";
import "./ShowMoreLessButton.css";

const CurrentlyWorkingOn = () => {
  const [showMore, setShowMore] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const projects = showMore ? currently_working_on : currently_working_on.slice(0, 3);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + '...';
  };

  return (
    <>
      <div className={styles.projectGrid}>
        {projects.map((project) => {
          const isExpanded = expandedDescriptions[project.id] || false;
          const shouldTruncate = project.description.length > 150;
          const displayDescription = isExpanded 
            ? project.description 
            : truncateDescription(project.description);

          return (
            <div key={project.id} className={styles.projectCard}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              {/* <Image
                src={project.featureImage}
                alt={project.title}
                className={styles.projectFeatureImage}
              /> */}
              <div className={styles.projectDescriptionContainer}>
                <p className={styles.projectDescription}>
                  {displayDescription.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                {shouldTruncate && (
                  <button
                    onClick={() => toggleDescription(project.id)}
                    className={styles.expandButton}
                    aria-label={isExpanded ? "Show less" : "Show more"}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
              {/* <div className={styles.projectLinks}>
                {project.links && project.links.map((link, index) => (
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
              </div> */}
            </div>
          );
        })}
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

export default CurrentlyWorkingOn;
