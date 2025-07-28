"use client";

import { useState, useEffect } from "react";
import styles from "./TicTacToe.module.css";

interface Cell {
  val: "x" | "o" | "";
}

const TicTacToe = () => {
  const playerOptions = ["X", "O"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [player, setPlayer] = useState(playerOptions[currentIndex]);
  const [winningPlayer, setWinningPlayer] = useState<string>("");

  // useEffect(() => {
  //   console.log("Current Player: " + player);
  // }, [player]);
  // Already tested, the players are switching indeed

  const initialGridSetup: Cell[] = [
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
  ];

  const [grid, setGrid] = useState<Cell[]>(initialGridSetup);

  const [xIndexes, setXIndexes] = useState<number[]>([]);
  const [oIndexes, setOIndexes] = useState<number[]>([]);

  const winningCombinations = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const handleClick = (index: number) => {
    if (grid[index].val !== "") return;

    setDisabled(true);

    const newGrid = [...grid];
    newGrid[index].val = player.toLowerCase() as "x" | "o";

    let newIndexes: number[];

    if (player.toLowerCase() === "x") {
      newIndexes = [...xIndexes, index];
      console.log("X's: " + newIndexes);
      setXIndexes(newIndexes);
    } else {
      newIndexes = [...oIndexes, index];
      console.log("O's: " + newIndexes);
      setOIndexes([...oIndexes, index]);
    }

    setGrid(newGrid);

    const isSubArray = (sub: number[], parent: number[]) => {
      return sub.every((element) => parent.includes(element));
    };

    // check if there is a winner
    if (newIndexes.length >= 3) {
      for (const combination of winningCombinations) {
        if (isSubArray(combination, newIndexes)) {
          setWinningPlayer(player);
          return;
        }
      }
    } else if (newIndexes.length === 5) {
      setWinningPlayer("it is a draw");
    }

    // switch the player
    const newIndex = (currentIndex + 1) % playerOptions.length;
    setCurrentIndex(newIndex);
    setPlayer(playerOptions[newIndex]);
    setDisabled(false);
  };

  const handleStartNewGame = () => {
    setGrid(initialGridSetup);
    setDisabled(false);
    setPlayer(playerOptions[0]); // X's
    setCurrentIndex(0);
    setWinningPlayer("");
    setOIndexes([]); // clear everything from last game
    setXIndexes([]); // clear everything from last game
  };

  return (
    <>
      <div className={`container ${styles.game}`}>
        <div className={`my-5 ${styles.currentTurn}`}>
          <span style={{ fontWeight: "normal" }}>Current Player's Turn:</span>{" "}
          {player}
        </div>
        <div className={`${styles.winningMessage} my-10`}>
          {winningPlayer.length == 1 && <p>{winningPlayer}'s win!!!</p>}
          {winningPlayer.length > 1 && <p>It is a draw!</p>}

          <button className={styles.newGame} onClick={handleStartNewGame}>
            New game
          </button>
        </div>
        <div className={styles.grid}>
          {grid.map((cell, x) => (
            <div
              key={x}
              className={`cell ${styles.gridCell}`}
              onClick={() => {
                if (!disabled) {
                  handleClick(x);
                }
              }}
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
