"use client";
import { useState, useEffect } from "react";
import styles from "./RockPaperScissors.module.css";

const icons = [
  "/games/rps/rock.png", // rock
  "/games/rps/paper.png", // paper
  "/games/rps/scissors.png", // scissors
];

const choices = [];

const roundToTheBestDecimalPlace = (num: number) => {
  if ((num * 1000) % 1 !== 0) {
    return Math.round(num * 100) / 100;
  } else if ((num * 100) % 1 !== 0) {
    return Math.round(num * 10) / 100;
  } else {
    return num;
  }
};

const RockPaperScissors = () => {
  // Player vs. computer
  const [computerChoice, setComputerChoice] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<number>(0);

  // Number of wins
  const [wins, setWins] = useState(1342344);
  const [losses, setLosses] = useState(3243434);

  // Number of rounds
  const [rounds, setRounds] = useState(0);

  useEffect(() => {}, []);

  const [winningPercentage, setWinningPercentage] = useState<string>("");

  useEffect(() => {
    const newComputerChoice = Math.trunc(Math.random() * 3);
    const newPlayerChoice = Math.trunc(Math.random() * 3);

    setComputerChoice(newComputerChoice);
    setPlayerChoice(newPlayerChoice);

    // determine winner here

  }, []);

  useEffect(() => {
    const total = wins + losses;
    if (total > 0) {
      setWinningPercentage(
        roundToTheBestDecimalPlace((100 * wins) / total).toString()
      );
    } else {
      setWinningPercentage("---");
    }
  }, [wins, losses]);

  return (
    <>
      <div className="mx-4">
        <h1>Rock Paper Scissors!</h1>
        <div className={styles.gameGrid}>
          <div className={styles["game-box"]}>{wins.toLocaleString()}</div>
          <div className={styles["game-box"]}>-</div>
          <div className={styles["game-box"]}>{losses.toLocaleString()}</div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}>{winningPercentage}%</div>
          <div className={styles["game-box"]}></div>{" "}
          <div className={`${styles["game-box"]} ${styles["player"]}`}>
            <img src={icons[playerChoice]} alt={"player"} />
          </div>
          <div className={`${styles["game-box"]} ${styles['winnerArrow']}`}>&uarr;</div>
          <div className={`${styles["game-box"]} ${styles["computer"]}`}>
            <img src={icons[computerChoice]} alt={"computer"} />
          </div>
        </div>
        <div className={styles.choiceGrid}>
          <div className={`${styles["game-box"]} ${styles["rock"]}`}>
            <img className={styles.icon} src={icons[0]} alt="Rock" />
          </div>
          <div className={`${styles["game-box"]} ${styles["paper"]}`}>
            <img className={styles.icon} src={icons[1]} alt="Paper" />
          </div>
          <div className={`${styles["game-box"]} ${styles["scissors"]}`}>
            <img className={styles.icon} src={icons[2]} alt="Scissors" />
          </div>
          {/* <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div> */}
        </div>
        <div>
          <button className={styles.newGame}>New Game</button>
        </div>
      </div>
    </>
  );
};

export default RockPaperScissors;
