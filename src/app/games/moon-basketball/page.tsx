import React from "react";
import styles from "./MoonBasketball.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

const MoonBasketball = () => {
  return (
    <div className={styles.gameContainer}>
      <ReturnToGamesButton />
      <iframe
        className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/632189415/embed"
        width={"485"}
        height={"402"}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MoonBasketball;
