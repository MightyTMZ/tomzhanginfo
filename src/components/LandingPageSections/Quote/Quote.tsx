import React from "react";
import styles from "./Quote.module.css";
import { quoteContent, quoteAuthor } from "@/data/favouriteQuote";

const Quote = () => {
  return (
    <div className={styles["mission-container"]}>
      <p className={styles["mission-title"]}>&ldquo;{quoteContent}&rdquo;</p>
      <p className={styles["mission-text"]}>- {quoteAuthor}</p>
    </div>
  );
};

export default Quote;
