import React from "react";
import styles from "./TertiaryAppButton.module.css";

const TertiaryAppButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default TertiaryAppButton;
