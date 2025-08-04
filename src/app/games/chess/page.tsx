"use client";

import { useRef, useState } from "react";
import YouTube, { YouTubePlayer, YouTubeProps } from "react-youtube";
import styles from "./Chess.module.css";

const Chess = () => {
  const colors = ["white", "black"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pieceColor, setPieceColor] = useState(colors[currentIndex]);

  const handleColorChange = () => {
    const newIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(newIndex);
    setPieceColor(colors[newIndex]);
  };

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const toggleMusic = (): void => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }

    setIsPlaying(!isPlaying);
  };

  const onYouTubeReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    event.target.setVolume(30); // Optional
  };

  return (
    <>
      <div className="ml-10 mt-10 mb-24">
        <button className={styles.switchButton} onClick={handleColorChange}>
          Playing as {pieceColor}
        </button>
        <button className={`${styles.switchButton} ml-4`} onClick={toggleMusic}>
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>

        <div className="mt-4">
          <YouTube
            videoId="q5NyeaAwWE8"
            opts={{
              height: "0",
              width: "0",
              playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
                start: 80,
              },
            }}
            onReady={onYouTubeReady}
          />
        </div>
        <div className={styles.grid}>
          {pieceColor === "white" ? (
            <>
              <div className={styles.labelSquare}>8</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>7</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>6</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>5</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>4</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>3</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>2</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>1</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}></div>
              <div className={styles.labelSquare}>A</div>
              <div className={styles.labelSquare}>B</div>
              <div className={styles.labelSquare}>C</div>
              <div className={styles.labelSquare}>D</div>
              <div className={styles.labelSquare}>E</div>
              <div className={styles.labelSquare}>F</div>
              <div className={styles.labelSquare}>G</div>
              <div className={styles.labelSquare}>H</div>
            </>
          ) : (
            <>
              <div className={styles.labelSquare}>1</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>2</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>3</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>4</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>5</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>6</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>7</div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}>8</div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              <div className={styles.lightSquare}></div>
              <div className={styles.darkSquare}></div>
              {/* Divider */}
              <div className={styles.labelSquare}></div>
              <div className={styles.labelSquare}>A</div>
              <div className={styles.labelSquare}>B</div>
              <div className={styles.labelSquare}>C</div>
              <div className={styles.labelSquare}>D</div>
              <div className={styles.labelSquare}>E</div>
              <div className={styles.labelSquare}>F</div>
              <div className={styles.labelSquare}>G</div>
              <div className={styles.labelSquare}>H</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Chess;
