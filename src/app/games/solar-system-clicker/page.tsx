import React from "react";
import styles from './SolarSystemClicker.module.css'

const SolarSystemClicker = () => {
  return (
    <div className={styles.gameContainer}>
      <iframe
      className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/632188377/embed"
        width={"485"}
        height={"402"}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SolarSystemClicker;
