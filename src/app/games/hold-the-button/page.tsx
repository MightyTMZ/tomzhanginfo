"use client";

import { useState, useRef } from "react";
import styles from "./HoldTheButton.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

const colors = [
  "#FF5733", // Vibrant Red-Orange
  "#33FF57", // Bright Green
  "#3357FF", // Deep Blue
  "#FF33A8", // Hot Pink
  "#FFD133", // Golden Yellow
  "#33FFF7", // Aqua
  "#8D33FF", // Purple
  "#FF8C33", // Orange
  "#4DFF33", // Neon Green
  "#333CFF", // Indigo
];

const HoldTheButton = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedSessions, setClickedSessions] = useState<number[]>([]);
  const [currentHoldTime, setCurrentHoldTime] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const holdStart = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setClicked(true);
    holdStart.current = Date.now();

    // start interval to update live time
    intervalRef.current = setInterval(() => {
      if (holdStart.current) {
        const seconds = (Date.now() - holdStart.current) / 1000;
        setCurrentHoldTime(parseFloat(seconds.toFixed(2)));
      }
    }, 100);
  };

  const handleLetGo = () => {
    setClicked(false);

    if (holdStart.current !== null) {
      const holdDuration = (Date.now() - holdStart.current) / 1000;
      setClickedSessions([...clickedSessions, parseFloat(holdDuration.toFixed(2))]);
    }

    // cleanup
    holdStart.current = null;
    setCurrentHoldTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleClickColor = (newColor: string) => {
    setSelectedColor(newColor);
  };

  return (
    <>
      <div className="ml-4">
        <ReturnToGamesButton />
      </div>

      <div className={styles.colorGrid}>
        {colors.map((color, k) => (
          <div
            key={k}
            className={styles.colorGridItem}
            onClick={() => handleClickColor(color)}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              background: color,
            }}
          ></div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button
          style={{
            background: selectedColor,
            height: "150px",
            width: "250px",
            borderRadius: "20px",
          }}
          onMouseDown={handleClick}
          onMouseUp={handleLetGo}
        >
          {clicked ? "Holding down" : "Click to hold down..."}
        </button>
      </div>
      <div className={styles.timeContainer}>
        {currentHoldTime} s
      </div>

      <div className={styles.sessionContainer}>
        <ol>
          {clickedSessions.map((ses, k) => (
            <li key={k}>{ses} s</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default HoldTheButton;
