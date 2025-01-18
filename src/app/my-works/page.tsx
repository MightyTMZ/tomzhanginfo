"use client";

import React from "react";
import styles from "./MyWorks.module.css";
import CoreProjects from "./CoreProjects";
import PrototypesExperiments from "./ProtoTypesExperiments";
import ToolsIntegration from "./ToolsIntegrations";
import { websiteName } from "@/data/base";
import Head from "next/head";

const MyWorks = () => {
  const pageTitle = "My Works";

  const fullTitle = websiteName + " - " + pageTitle;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <section className={styles.myWorksPage}>
        <div className={styles.container}>
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
};

export default MyWorks;
