"use client";

import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  const messages = [
    "Stretch break? You’ve earned it!",
    "Loading faster than a turtle on roller skates!",
    "Good vibes incoming, hold on tight!",
    "The suspense is building… or is it?",
    "Loading: The musical (you can hum along).",
    "Hold your horses! 🐴 Almost there.",
    "If loading were an Olympic sport, we’d be gold medaling!",
    "You’re cooler than this loading screen—promise.",
    "Quick! Think of a joke while we finish loading.",
    "Channeling good energy for the page... 🤘",
  ];

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    setRandomMessage(message);
  }, []);

  return (
    <div className={styles["spinner-overlay"]}>
      <HashLoader color="#000000" speedMultiplier={2} />
      <br />
      <p className={styles["spinner-message"]}>{randomMessage}</p>
    </div>
  );
};

export default Spinner;
