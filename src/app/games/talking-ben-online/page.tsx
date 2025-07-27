import React from "react";
import styles from "./TalkingBen.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

const TalkingBen = () => {
  return (
    <div className={styles.gameContainer}>
      <ReturnToGamesButton />
      <iframe
        className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/698013366/embed"
        width={"485"}
        height={"402"}
        allowTransparency={true}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TalkingBen;
