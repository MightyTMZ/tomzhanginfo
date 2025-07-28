"use client";
import { useState, useEffect, FormEvent } from "react";
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
  const [enteredRounds, setEnteredRounds] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // Player vs. computer
  const [computerChoice, setComputerChoice] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<number>(0);
  // Number of wins
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  // Number of rounds
  const [rounds, setRounds] = useState<number>(10);
  const [winningPercentage, setWinningPercentage] = useState<string>("");

  useEffect(() => {
    const newComputerChoice = Math.trunc(Math.random() * 3);
    const newPlayerChoice = Math.trunc(Math.random() * 3);

    setComputerChoice(newComputerChoice);
    setPlayerChoice(newPlayerChoice);

    // determine winner here
  }, [rounds]);

  useEffect(() => {
    const total = wins + losses + ties;
    if (total > 0) {
      setWinningPercentage(
        roundToTheBestDecimalPlace((100 * wins) / total).toString()
      );
    } else {
      setWinningPercentage("---");
    }
  }, [wins, losses]);

  const handleSubmitRounds = (event: FormEvent) => {
    event.preventDefault();
    setEnteredRounds(true);
  };

  const handleSwitchChoice = (c: number) => {
    if (disabled) return;
    setPlayerChoice(c);
  };

  const handleNextRound = () => {
    if (disabled) return;
    const roundsRemaining = rounds - 1;
    if (roundsRemaining == 0) {
      setDisabled(true);
    }

    setRounds(roundsRemaining);
  };

  const handleStartNewGame = () => {
    window.location.reload();
  };

  if (!enteredRounds) {
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={handleSubmitRounds} className={styles.roundsForm}>
            <label>Enter the number of rounds:</label>
            <br />
            <input
              type="number"
              min={1}
              value={rounds}
              onChange={(e) => setRounds(Number(e.target.value))}
            />{" "}
            <br />
            <input type="submit" className={styles.submitRounds} />
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`${styles.container} mx-4`}>
        <h1>Rock Paper Scissors!</h1>
        <div className="my-3 mb-6">{rounds} rounds remaining</div>
        <div className={styles.gameGrid}>
          <div className={styles["game-box"]}>Wins</div>
          <div className={styles["game-box"]}>Ties</div>
          <div className={styles["game-box"]}>Losses</div>
          <div className={styles["game-box"]}>{wins.toLocaleString()}</div>
          <div className={styles["game-box"]}>{ties.toLocaleString()}</div>
          <div className={styles["game-box"]}>{losses.toLocaleString()}</div>
          <div className={styles["game-box"]}>{winningPercentage}%</div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>{" "}
          <div className={`${styles["game-box"]} ${styles["player"]}`}>
            <img src={icons[playerChoice]} alt={"player"} />
          </div>
          <div className={`${styles["game-box"]} ${styles["winnerArrow"]}`}>
            &uarr;
          </div>
          <div className={`${styles["game-box"]} ${styles["computer"]}`}>
            <img src={icons[computerChoice]} alt={"computer"} />
          </div>
        </div>
        <div className={`my-3 ${styles.roundsRemaining}`}></div>
        <div className={styles.choiceGrid}>
          {icons.map((icon, num) => (
            <div
              className={`${styles["game-box"]} `}
              onClick={() => handleSwitchChoice(num)}
              key={num}
            >
              <img
                className={`${styles.icon} ${
                  playerChoice == num ? "border-blue-3" : ""
                }`}
                src={icon}
              />
            </div>
          ))}
          {/* <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div> */}
        </div>
        <div className={styles.buttonGrid}>
          <button className={styles.nextGame} onClick={handleNextRound}>
            Next round
          </button>
          <button className={styles.newGame} onClick={handleStartNewGame}>
            Start new game
          </button>
        </div>
      </div>
    </>
  );
};

export default RockPaperScissors;
