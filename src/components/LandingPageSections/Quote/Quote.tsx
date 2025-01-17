import React from "react";
import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={styles["mission-container"]}>
      <p className={styles["mission-title"]}>"This is a great quote"</p>
      <p className={styles["mission-text"]}>- the person who said the quote</p>
    </div>
  );
};

export default Quote;
