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
  const [isHovering, setIsHovering] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const imageCount = project.images?.length ?? 0;
  const isPaused = isHovering || isManuallyPaused;
  const shouldAutoPlay =
    hasImages && project.shuffleImages && imageCount > 1 && !isPaused;

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setIsManuallyPaused(false);
    setIsHovering(false);
  }, [project.title]);

  useEffect(() => {
    if (!shouldAutoPlay) {
      return;
    }

    const intervalMs = Math.max(1500, (project.shuffleInterval ?? 3) * 1000);
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => {
        if (!imageCount) {
          return prev;
        }

        const next = prev + 1;
        return next % imageCount;
      });
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [shouldAutoPlay, project.shuffleInterval, imageCount]);

  const handleSelectIndex = useCallback(
    (index: number) => {
      if (!hasImages) return;
      setActiveIndex(index);
    },
    [hasImages],
  );

  const handleStep = useCallback(
    (direction: 1 | -1) => {
      if (!hasImages || imageCount <= 1) return;
      setActiveIndex((prev) => {
        const next = (prev + direction + imageCount) % imageCount;
        return next;
      });
    },
    [hasImages, imageCount],
  );

  const displayedImage = hasImages && activeIndex >= 0 ? project.images[activeIndex] : undefined;
  const pauseAriaLabel = isManuallyPaused ? "Resume carousel" : "Pause carousel";

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleWrapperClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const target = event.target as HTMLElement;
      if (target.closest("button")) {
        return;
      }
      setIsManuallyPaused((prev) => !prev);
    },
    [],
  );

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback((event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setIsManuallyPaused((prev) => !prev);
    } else if (event.key === "Escape") {
      setIsManuallyPaused(false);
    }
  }, []);

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

      <div
        className={styles.carouselContainer}
        data-paused={isPaused}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleWrapperClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-pressed={isManuallyPaused}
        aria-label={pauseAriaLabel}
      >
        {isPaused && (
          <div className={styles.carouselStatus}>{isManuallyPaused ? "Paused" : "Hover Paused"}</div>
        )}
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
  const [showAll, setShowAll] = useState(false);
  const hasProjects = design_portfolio.length > 0;

  if (!hasProjects) {
    return (
      <div className={styles.projectGrid}>
        <span className="text-xl text-gray-500">Design portfolio coming soon.</span>
      </div>
    );
  }

  const projectsToRender = showAll ? design_portfolio : design_portfolio.slice(0, 3);
  const hasMoreProjects = design_portfolio.length > 3;

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section>
      <div className={styles.projectGrid}>
        {projectsToRender.map((project) => (
          <DesignProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="showMoreLessUnderlineButton text-sm font-semibold"
            onClick={toggleShowAll}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default DesignPortfolio;
