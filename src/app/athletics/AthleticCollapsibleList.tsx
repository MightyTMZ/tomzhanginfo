"use client";
import { ReactNode, useState } from "react";
import styles from "./Athletics.module.css";

interface SupplementReference {
  title: string;
  icon: ReactNode;
  reference: string;
}

interface AthleticExercise {
  title: string;
  stat: string;
  lastUpdated: string;
  links: SupplementReference[];
}

export function AthleticCollapsibleList({
  title,
  items,
}: {
  title: string;
  items: AthleticExercise[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={styles["collapsible-section"]}>
        <h2 className={styles["section-title"]}>{title}</h2>
        <div className={styles["card-container"]}>
          {items.slice(0, isExpanded ? items.length : 3).map((item, index) => (
            <div key={index} className={styles["athletic-card"]}>
              <h3>{item.title}</h3>
              <p className={styles.statLine}>
                {/* stat line */} {item.stat}
              </p>
              <p>
                {/* last updated */} {item.lastUpdated}
              </p>
              <div className="card-links">
                {item.links.map((link: SupplementReference, i: number) => (
                  <a
                    key={i}
                    href={link.reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["icon-link"]}
                  >
                    {link.icon} {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {items.length > 3 && (
          <button
            className={styles["toggle-button"]}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}{" "}
        <div style={{ height: "15px" }}></div>
        <hr />
      </div>
    </>
  );
}
