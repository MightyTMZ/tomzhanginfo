import React from "react";
import styles from "./MissionStatement.module.css";
import {
  missionStatementDescription,
  missionStatementTitle,
} from "@/data/missionStatement";

const MissionStatement = () => {
  return (
    <div className={styles["mission-container"]}>
      <p className={styles["mission-title"]}>{missionStatementTitle}</p>
      <p className={styles["mission-text"]}>{missionStatementDescription}</p>
    </div>
  );
};

export default MissionStatement;
