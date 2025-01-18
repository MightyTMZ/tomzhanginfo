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
                  I am a firm believer in sharing my knowledge and expertise
                  through resources. By offering these resources, I aim to
                  empower others to learn, grow, and achieve their goals more
                  efficiently. Sharing knowledge creates a ripple effect, where
                  the more you give, the more you receive. Not only does it help
                  others save time and avoid unnecessary mistakes, but it also
                  fosters a sense of community, collaboration, and continuous
                  learning.
                </p>
                <p>
                  These resources will serve as comprehensive guides, cheat
                  sheets, and in-depth tutorials, designed to simplify complex
                  topics in fields like programming, data science, AI,
                  blockchain, finance, and more. By breaking down complicated
                  subjects into digestible pieces, I aim to make learning
                  accessible to everyone, from beginners to advanced
                  professionals.
                </p>
                <p>
                  Whether you&apos;re a student trying to master a new skill, a
                  professional looking to level up your expertise, or an
                  entrepreneur seeking to streamline your workflow, these
                  resources are designed to help you achieve your goals faster
                  and with more confidence. Stay tuned for more!
                </p>{" "}
                <br />
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
