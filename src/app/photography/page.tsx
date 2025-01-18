import React from "react";
import styles from "./PhotographyPage.module.css";
import placeholderIMG from "../../../public/placeholder.webp";
import Image from "next/image";
import { websiteName } from "@/data/base";
import Head from "next/head";

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

const PhotographyPage = () => {
  const pageTitle = "Photography";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <section className={styles.photographyPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Photography</h1>
          <p className={styles.description}>
            A collection of moments I've captured through my lens. From stunning
            landscapes to candid shots, explore the world as I see it.
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
};

export default PhotographyPage;
