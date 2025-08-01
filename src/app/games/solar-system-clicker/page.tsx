import React from "react";
import styles from "./SolarSystemClicker.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

const SolarSystemClicker = () => {
  return (
    <div className={styles.gameContainer}>
      <ReturnToGamesButton />
      <iframe
        className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/833395184/embed"
        width={"485"}
        height={"402"}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SolarSystemClicker;
