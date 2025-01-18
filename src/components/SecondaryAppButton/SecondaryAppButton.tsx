import React from "react";
import styles from "./SecondaryAppButton.module.css";

const SecondaryAppButton = ({
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

export default SecondaryAppButton;
