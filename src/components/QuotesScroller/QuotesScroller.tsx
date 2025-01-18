"use client";

import { useState, useEffect } from "react";
import styles from "./QuotesScroller.module.css"; // Import the CSS module

interface Quote {
  id: number;
  content: string;
  context: string;
}

function QuotesScroller() {
  const [index, setIndex] = useState(0);
  const [live, setLive] = useState(true);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const backendServerAddress =
    "https://tomzhangpersonalsite.pythonanywhere.com";

  // Function to shuffle quotes
  function shuffleQuotes(array: Quote[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  useEffect(() => {
    fetch(`${backendServerAddress}/my-vision/all-quotes/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const shuffledQuotes = shuffleQuotes(data); // Shuffle the quotes after fetching
        setQuotes(shuffledQuotes);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  useEffect(() => {
    if (live && quotes.length > 0) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [live, quotes.length]);

  const handleClick = () => {
    setLive(!live);
  };

  const goToNextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const goToPreviousQuote = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  if (quotes.length === 0) {
    return <div>Loading...</div>; // Display loading or handle empty state
  }

  return (
    <>
      <div style={{ height: "100vh", padding: "0 15%" }}>
        <div className={styles.quotesContainer}>
          <div
            dangerouslySetInnerHTML={{ __html: quotes[index].content }}
            className={styles.quote}
          ></div>
          <div className={styles.context}>- {quotes[index].context}</div>
        </div>
        <div className={styles.quoteNavigation}>
          <button className={styles.navButton} onClick={goToPreviousQuote}>
            &lt;
          </button>
          <button className={styles.navButton} onClick={handleClick}>
            {live ? "Pause" : "Play"}
          </button>
          <button className={styles.navButton} onClick={goToNextQuote}>
          &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default QuotesScroller;
