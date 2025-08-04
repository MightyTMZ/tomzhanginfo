"use client";

import { useState } from "react";
import styles from "./Chess.module.css";

const Chess = () => {
  const colors = ["white", "black"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pieceColor, setPieceColor] = useState(colors[currentIndex]);
  const whitePiecesSetup = [""];

  const chessRowNumbers =
    pieceColor === "white"
      ? [8, 7, 6, 5, 4, 3, 2, 1]
      : [1, 2, 3, 4, 5, 6, 7, 8];

  const handleColorChange = () => {
    const newIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(newIndex);
    setPieceColor(colors[newIndex]);
  };

  return (
    <>
      <div className="ml-10 mt-10 mb-24">
        <button className={styles.switchButton} onClick={handleColorChange}>Playing as {pieceColor}</button>
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
