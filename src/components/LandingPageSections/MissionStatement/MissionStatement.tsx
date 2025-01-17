import React from "react";
import styles from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <div className={styles["mission-container"]}>
      <p className={styles["mission-title"]}>This is my mission statement</p>
      <p className={styles["mission-text"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum,
        suscipit rerum soluta, neque ut officiis iure repellendus, a modi dolore
        natus vel assumenda labore. Unde molestias totam necessitatibus
        deserunt.
      </p>
    </div>
  );
};

export default MissionStatement;
