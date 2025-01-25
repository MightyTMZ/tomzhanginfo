import React from "react";
import styles from "./SlideAnimationButton.module.css";

const SlideAnimationButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      <span className={styles["button_lg"]}>
        <span className={styles["button_sl"]}></span>
        <span className={styles["button_text"]}>{text}</span>
      </span>
    </button>
  );
};

export default SlideAnimationButton;
