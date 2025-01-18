import React from "react";
import styles from "./PrimaryAppButton.module.css";

const PrimaryAppButton = ({
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

export default PrimaryAppButton;
