import React from "react";
import styles from "./PhotographyPage.module.css";
import Image from "next/image";
import { websiteName } from "@/data/base";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import { Metadata } from "next";

const photos = [
  {
    id: 1,
    url: '/photography/PXL_20250917_002128492.jpg',
    title: "Toronto at night 🌃",
    description: "Queen St E",
  },
  {
    id: 2,
    url: "/photography/htn_yc_fireside.jpg",
    title: "🟧 Y Combinator Fireside Chat @ Hack the North",
    description: "",
  },
  {
    id: 3,
    url: "/photography/peaches_in_georgia.png",
    title: "'I got my peaches out in Georgia'",
    description: "",
  },
  {
    id: 4,
    url: "/photography/yc_event_entrance.jpg",
    title: "YC Event in Toronto",
    description: "Entrance view",
  },
  {
    id: 5,
    url: "/photography/yc_in_toronto.jpg",
    title: "YC Event in Toronto",
    description: "Live session view",
  },
  {
    id: 6,
    url: "/photography/htn_opening_ceremonies.jpg",
    title: "Hack the North opening ceremonies",
    description: "YC partner Andrew Miklas speaking on behalf of YC",
  },
  // Add more photos here
];

const pageTitle = "Photography";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description:
    "Photography is one of my go-to activities for relaxation and tranquility. Explore the photos that I take.",
  keywords: "photo, photography, media",
};

export default function PhotographyPage() {
  return (
    <>
      <section className={styles.photographyPage}>
        <div className={styles.container}>
          <ReturnHomeButton />
          <h1 className={styles.title}>My Photography</h1>
          <p className={styles.description}>
            A collection of moments I&apos;ve captured through my lens. From
            stunning landscapes to candid shots, explore the world as I see it.
          </p>
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.card}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className={styles.photo}
                />
                <div className={styles.overlay}>
                  <h2 className={styles.photoTitle}>{photo.title}</h2>
                  <p className={styles.photoDescription}>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
