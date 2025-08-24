"use client";

import { useState } from "react";
import styles from "./HackathonQAPage.module.css";

interface QAItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const qaData: QAItem[] = [
  {
    id: "1",
    question:
      "Imagine you have access to the latest technology and unlimited resources. How would you leverage these tools to solve any societal problem of your choosing? (500 char limit)*",
    answer: `I would build space-based data centers powered by Dyson spheres. 
    This harnesses stellar energy to run massive AI systems. 
    The best part? No need to for cooling! The freezing temperature of space works! 
    This OPENS up the possibility of running computations that model climate, optimize
     resource distribution, and accelerate scientific breakthroughs globally, tackling
      energy scarcity, environmental crises, and infrastructure challenges at scale. 
      All of this done without taxing Earth’s resources.
      `,
    category: "HackHarvard",
  },
  {
    id: "2",
    question:
      `Share your goals and aspirations for this event and how you plan to make 
      the most of your HackHarvard experience. What specific areas are you eager
       to learn more about, and what skills or technologies are you excited to
        acquire or improve? (500 char limit)*`,
    answer: `I would build space-based data centers powered by Dyson spheres. 
    I aim to leverage HackHarvard to build innovative projects while learning
     from top peers. I’m eager to deepen my expertise in full-stack development, 
     AI/ML integration, DevOps integration and scalable product design. 
     I plan to collaborate intensively, push creative boundaries, and refine
      my coding, prototyping, and pitching skills. My goal is to leave with
       stronger technical proficiency, a broader network, and actionable insights
        to accelerate my ventures.
      `,
    category: "HackHarvard",
  },
  {
    id: "3",
    question: `HackHarvard is all about sparking creativity and making a positive difference 
    through innovative projects. We'd love to hear about a project you've been part of that 
    embodies this spirit. How did your project bring a touch of magic or create a lasting 
    impact, whether big or small, on the people or community it reached? (500 char limit)`,
    answer: `I was a part of a summer program called HUVTSP. A big problem I realized as 
    I was in the program was people were searching for leads and startup projects to 
    join in so many disconnected apps and channels. Therefore, I created a semantic
     search engine app to connect students and their ventures. Best of all, people 
     began searching for each other like using Google. As of August 2025, we have 
     already help connect over 350 alumni and over 20 startup projects. 
      `,
    category: "HackHarvard",
  },
];

export default function HackathonQAPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === qaData.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(qaData.map((item) => item.id)));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Hackathon Q&A</h1>
        <p className={styles.subtitle}>
          Common questions and answers for hackathon applications (or
          applications in general)
        </p>
        <button onClick={toggleAll} className={styles.toggleAllButton}>
          {openItems.size === qaData.length ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className={styles.qaContainer}>
        {qaData.map((item) => (
          <div key={item.id} className={styles.qaItem}>
            <button
              className={`${styles.questionButton} ${
                openItems.has(item.id) ? styles.active : ""
              }`}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.has(item.id)}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span className={styles.arrow}>
                {openItems.has(item.id) ? "▼" : "▶"}
              </span>
            </button>

            {item.category && (
              <span className={styles.category}>{item.category}</span>
            )}

            <div
              className={`${styles.answerContainer} ${
                openItems.has(item.id) ? styles.open : ""
              }`}
              aria-hidden={!openItems.has(item.id)}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.note}>
          💡 Tip for Tom Zhang: Use this as a template and customize the answers for your
          specific project.
        </p>
      </div>
    </div>
  );
}
