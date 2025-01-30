import React from "react";
import styles from "./SlideAnimationButton.module.css";

interface SlideAnimationButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

const SlideAnimationButton = ({ text, color, onClick }: SlideAnimationButtonProps) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      <span className={styles["button_lg"]}>
        <span className={styles["button_sl"]} style={{ background: color }}></span>
        <span className={styles["button_text"]}>{text}</span>
      </span>
    </button>
  );
};

export default SlideAnimationButton;
