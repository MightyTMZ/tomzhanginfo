import React from "react";
import styles from "./PhotographyPage.module.css";
import placeholderIMG from "../../../public/placeholder.webp";
import Image from "next/image";
import { websiteName } from "@/data/base";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import { Metadata } from "next";

const photos = [
  {
    id: 1,
    url: placeholderIMG,
    title: "Sunset Over the Lake",
    description: "Captured at the Golden Hour.",
  },
  {
    id: 2,
    url: placeholderIMG,
    title: "Mountain Peaks",
    description: "A breathtaking view of snow-capped mountains.",
  },
  {
    id: 3,
    url: placeholderIMG,
    title: "Urban Nights",
    description: "City lights illuminating the skyline.",
  },
  {
    id: 4,
    url: placeholderIMG,
    title: "Forest Trail",
    description: "A peaceful walk through the woods.",
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
                <Image
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
