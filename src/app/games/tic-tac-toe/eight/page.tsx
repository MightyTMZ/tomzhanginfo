"use client";

import { useState } from "react";
import styles from "./TicTacToeEight.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

interface Cell {
  val: "x" | "o" | "";
}

const GRID_SIZE = 8; // board size (8x8)
const WIN_LENGTH = 5; // how many in a row to win

const generateInitialGrid = (): Cell[] =>
  Array(GRID_SIZE * GRID_SIZE)
    .fill(null)
    .map(() => ({ val: "" }));

const generateWinningCombinations = (size: number, winLength: number) => {
  const combos: number[][] = [];

  // Rows
  for (let r = 0; r < size; r++) {
    for (let c = 0; c <= size - winLength; c++) {
      const rowCombo = [];
      for (let k = 0; k < winLength; k++) {
        rowCombo.push(r * size + (c + k));
      }
      combos.push(rowCombo);
    }
  }

  // Columns
  for (let c = 0; c < size; c++) {
    for (let r = 0; r <= size - winLength; r++) {
      const colCombo = [];
      for (let k = 0; k < winLength; k++) {
        colCombo.push((r + k) * size + c);
      }
      combos.push(colCombo);
    }
  }

  // Diagonals ↘
  for (let r = 0; r <= size - winLength; r++) {
    for (let c = 0; c <= size - winLength; c++) {
      const diagCombo = [];
      for (let k = 0; k < winLength; k++) {
        diagCombo.push((r + k) * size + (c + k));
      }
      combos.push(diagCombo);
    }
  }

  // Diagonals ↙
  for (let r = 0; r <= size - winLength; r++) {
    for (let c = winLength - 1; c < size; c++) {
      const diagCombo = [];
      for (let k = 0; k < winLength; k++) {
        diagCombo.push((r + k) * size + (c - k));
      }
      combos.push(diagCombo);
    }
  }

  return combos;
};

const winningCombinations = generateWinningCombinations(GRID_SIZE, WIN_LENGTH);

const TicTacToe = () => {
  const playerOptions = ["X", "O"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [player, setPlayer] = useState(playerOptions[currentIndex]);
  const [grid, setGrid] = useState<Cell[]>(generateInitialGrid());
  const [winningPlayer, setWinningPlayer] = useState<string>("");
  const [disabled, setDisabled] = useState(false);

  const handleClick = (index: number) => {
    if (grid[index].val !== "" || disabled || winningPlayer) return;

    const newGrid = [...grid];
    newGrid[index].val = player.toLowerCase() as "x" | "o";
    setGrid(newGrid);

    const playerSymbol = player.toLowerCase();
    const playerPositions = newGrid
      .map((cell, i) => (cell.val === playerSymbol ? i : -1))
      .filter((i) => i !== -1);

    // Check for win
    for (const combo of winningCombinations) {
      if (combo.every((pos) => playerPositions.includes(pos))) {
        setWinningPlayer(player);
        setDisabled(true);
        return;
      }
    }

    // Check for draw
    if (newGrid.every((cell) => cell.val !== "")) {
      setWinningPlayer("draw");
      setDisabled(true);
      return;
    }

    // Switch player
    const newIndex = (currentIndex + 1) % playerOptions.length;
    setCurrentIndex(newIndex);
    setPlayer(playerOptions[newIndex]);
  };

  const handleStartNewGame = () => {
    setGrid(generateInitialGrid());
    setDisabled(false);
    setPlayer(playerOptions[0]);
    setCurrentIndex(0);
    setWinningPlayer("");
  };

  return (
    <>
      <div style={{ padding: "50px" }}>
        <ReturnToGamesButton />
      </div>

      <div className={`container ${styles.game}`}>
        <div className={styles.instructions}>
          <h2>How to Play</h2>
          <p>
            Take turns placing your mark (X or O) on the board. The first player
            to get {WIN_LENGTH} in a row horizontally, vertically, or
            diagonally wins! If the board fills up with no winner, it’s a
            draw.
          </p>
        </div>
        <div className={`my-5 ${styles.currentTurn}`}>
          <span style={{ fontWeight: "normal" }}>Player turn:</span> {player}
        </div>

        {winningPlayer && (
          <div className={`${styles.winningMessage} my-10`}>
            {winningPlayer === "draw" ? (
              <p>It is a draw!</p>
            ) : (
              <p>{winningPlayer}&apos;s win!</p>
            )}
            <button className={styles.newGame} onClick={handleStartNewGame}>
              New game
            </button>
          </div>
        )}

        <div className={styles.grid}>
          {grid.map((cell, idx) => (
            <div
              key={idx}
              className={`cell ${styles.gridCell}`}
              onClick={() => handleClick(idx)}
            >
              {cell.val}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
