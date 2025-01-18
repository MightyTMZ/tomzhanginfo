import React from "react";
import styles from "./Resources.module.css"; // Import CSS Module
import CollapsibleList from "./CollapsibleList";
import {
  advancedAI,
  blockchainResources,
  dataScienceAndML,
  engineeringMathResources,
  financeEconomics,
  programmingLanguages,
  toolsResources,
  webDevelopment,
} from "@/data/resources";
import { websiteName } from "@/data/base";
import { Metadata } from "next";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";

const pageTitle = "Resources";

const fullTitle = websiteName + " - " + pageTitle;

export const metadata: Metadata = {
  title: fullTitle,
  description: `These resources will serve as comprehensive guides, cheat
                  sheets, and in-depth tutorials, designed to simplify complex
                  topics in fields like programming, data science, AI,
                  blockchain, finance, and more. By breaking down complicated
                  subjects into digestible pieces, I aim to make learning
                  accessible to everyone, from beginners to advanced
                  professionals.`,

  keywords:
    "blockchain, AI, finance, economics, data, data science, programming, resources, complex",
};

export default function Resources() {
  return (
    <>
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <ReturnHomeButton />
          <h2 className={styles.sectionTitle}>Resources</h2>
          <div className={styles.content}>
            {/*<div className={styles.imageContainer}>
           <img
              className={styles.profileImage}
              src="your-image-url-here.jpg"
              alt="Tom Zhang"
            />
          </div>*/}
            <div className={styles.textContainer}>
              <p className={styles.description}>
                <p>
                  I will <strong>soon</strong> be releasing comprehensive
                  guides, cheat sheets, designed to simplify complex processes
                  for everyone including me, in fields like programming, data
                  science, AI, blockchain, finance, and more. By breaking down
                  complicated subjects into digestible pieces, I aim to make
                  learning accessible to not only myself but to everyone, from
                  beginners to professionals who may need a small helping hand.
                </p>
                <p>Stay tuned for more!</p> <br />
                <br />
                <CollapsibleList
                  title="Programming Languages"
                  items={programmingLanguages}
                />
                <br />
                <CollapsibleList
                  title="Web Development"
                  items={webDevelopment}
                />
                <br />
                <CollapsibleList
                  title="Data Science and Machine Learning"
                  items={dataScienceAndML}
                />
                <br />
                <CollapsibleList title="Advanced AI" items={advancedAI} />
                <br />
                <CollapsibleList
                  title="Engineering Math"
                  items={engineeringMathResources}
                />
                <br />
                <CollapsibleList
                  title="Finance and Economics"
                  items={financeEconomics}
                />
                <br />
                <CollapsibleList
                  title="Blockchain"
                  items={blockchainResources}
                />
                <br />
                <CollapsibleList
                  title="Tools and Integrations"
                  items={toolsResources}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
