"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./MyWorks.module.css";
import { design_portfolio } from "@/data/works";
import "./ShowMoreLessButton.css";

type DesignProject = (typeof design_portfolio)[number];

const getInitialImageIndex = (project: DesignProject) => {
  if (!project.images || project.images.length === 0) {
    return -1;
  }

  const featuredIndex = project.images.findIndex((image) => image.feature);
  return featuredIndex >= 0 ? featuredIndex : 0;
};

const DesignProjectCard = ({ project }: { project: DesignProject }) => {
  const hasImages = project.images && project.images.length > 0;
  const initialIndex = useMemo(() => getInitialImageIndex(project), [project]);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!hasImages || !project.shuffleImages || project.images.length <= 1) {
      return;
    }

    const intervalMs = Math.max(1500, (project.shuffleInterval ?? 3) * 1000);
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => {
        if (!project.images.length) {
          return prev;
        }

        const next = prev + 1;
        return next % project.images.length;
      });
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasImages, project.shuffleImages, project.shuffleInterval, project.images]);

  const handleSelectIndex = useCallback(
    (index: number) => {
      if (!hasImages) return;
      setActiveIndex(index);
    },
    [hasImages],
  );

  const handleStep = useCallback(
    (direction: 1 | -1) => {
      if (!hasImages || project.images.length <= 1) return;
      setActiveIndex((prev) => {
        const next = (prev + direction + project.images.length) % project.images.length;
        return next;
      });
    },
    [hasImages, project.images],
  );

  const displayedImage = hasImages && activeIndex >= 0 ? project.images[activeIndex] : undefined;

  return (
    <article className={styles.projectCard}>
      <header className={styles.designCardHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.designCardMeta}>
          {project.shuffleImages ? (
            <span className={styles.designBadge}>Dynamic Preview</span>
          ) : (
            <span className={styles.designBadge}>Featured Work</span>
          )}
          {hasImages && project.images.length > 1 && (
            <div aria-hidden="true">
              {project.images.length} visual{project.images.length > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </header>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselImageWrapper}>
          {displayedImage ? (
            <Image
              key={`${project.title}-${activeIndex}`}
              src={displayedImage.src}
              alt={displayedImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              priority={activeIndex === initialIndex}
              className={styles.carouselImage}
            />
          ) : (
            <div className={styles.carouselFallback}>Visual coming soon</div>
          )}
        </div>

        {hasImages && project.images.length > 1 && (
          <div className={styles.carouselControls}>
            <button
              type="button"
              className={styles.carouselButton}
              onClick={() => handleStep(-1)}
              aria-label="Previous imagery"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.carouselButton}
              onClick={() => handleStep(1)}
              aria-label="Next imagery"
            >
              ›
            </button>
          </div>
        )}

        {displayedImage?.caption && (
          <footer className={styles.carouselCaption}>{displayedImage.caption}</footer>
        )}
      </div>

      <p className={styles.designProjectDescription}>{project.description}</p>

      {hasImages && project.images.length > 1 && (
        <nav className={styles.carouselDots} aria-label={`${project.title} imagery navigation`}>
          {project.images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`${project.title}-${image.alt}-${index}`}
                type="button"
                className={`${styles.carouselDot} ${isActive ? styles.carouselDotActive : ""}`}
                onClick={() => handleSelectIndex(index)}
                aria-label={`Show visual ${index + 1}: ${image.alt}`}
                aria-pressed={isActive}
              />
            );
          })}
        </nav>
      )}
    </article>
  );
};

const DesignPortfolio = () => {
  if (!design_portfolio.length) {
    return (
      <div className={styles.projectGrid}>
        <span className="text-xl text-gray-500">Design portfolio coming soon.</span>
      </div>
    );
  }

  return (
    <section>
      <div className={styles.projectGrid}>
        {design_portfolio.map((project) => (
          <DesignProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default DesignPortfolio;
