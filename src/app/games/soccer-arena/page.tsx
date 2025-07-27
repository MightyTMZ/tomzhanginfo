import React from "react";
import styles from "./SoccerArena.module.css";

const SoccerArena = () => {
  return (
    <div className={styles.gameContainer}>
      <iframe
        className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/705756767/embed"
        width={"485"}
        height={"402"}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SoccerArena;
