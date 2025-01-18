import React from "react";
import styles from "./MyWorks.module.css";
import CoreProjects from "./CoreProjects";
import PrototypesExperiments from "./ProtoTypesExperiments";
import ToolsIntegration from "./ToolsIntegrations";
import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "My Works";
const fullTitle = websiteName + " - " + pageTitle;
const pageDescription =
  "Explore a collection of my key projects, prototypes, experiments, and integrations that showcase my skills in technology and innovation. From core projects to cutting-edge tools, this page highlights my journey in creating impactful solutions and pushing the boundaries of digital transformation.";
const pageKeywords =
  "projects, prototypes, experiments, tools, integrations, technology, innovation, software development, AI, machine learning, digital solutions";

export const metadata: Metadata = {
  title: fullTitle,
  description: pageDescription,
  keywords: pageKeywords,
};

export default function MyWorks() {
  return (
    <>
      <section className={styles.myWorksPage}>
        <div className={styles.container}>
          <ReturnHomeButton />
          <h1 className={styles.sectionTitle}>Projects</h1>

          <p className={styles.description}>
            Here are some of my most significant works: projects, prototypes,
            experiments, tools, and integrations...
          </p>
          <CoreProjects />
          <PrototypesExperiments />
          <ToolsIntegration />
        </div>
      </section>
    </>
  );
}
