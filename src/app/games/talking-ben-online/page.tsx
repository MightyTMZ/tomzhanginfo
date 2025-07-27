import React from "react";
import styles from './TalkingBen.module.css'

const TalkingBen = () => {
  return (
    <div>
      <iframe
      className={styles.scratchGameEmbed}
        src="https://scratch.mit.edu/projects/698013366/embed"
        allowTransparency={true}
        width={"485"}
        height={"402"}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TalkingBen;
