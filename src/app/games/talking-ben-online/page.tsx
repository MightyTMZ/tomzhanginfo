import React from "react";
import styles from './TalkingBen.module.css'

const TalkingBen = () => {
  return (
    <div className={styles.gameContainer}>
      <iframe
      className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/698013366/embed"
        allowTransparency={true}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TalkingBen;
