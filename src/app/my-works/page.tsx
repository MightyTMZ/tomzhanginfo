"use client";

import React from "react";
import styles from "./MyWorks.module.css";
import CoreProjects from "./CoreProjects";
import PrototypesExperiments from "./ProtoTypesExperiments";
import ToolsIntegration from "./ToolsIntegrations";

const MyWorks = () => {
  return (
    <section className={styles.myWorksPage}>
      <div className={styles.container}>
        <p className={styles.description}>
          Here are some of my most significant works: projects, prototypes,
          experiments, tools, and integrations...
        </p>
        <CoreProjects />
        <PrototypesExperiments />
        <ToolsIntegration />
      </div>
    </section>
  );
};

export default MyWorks;
