"use client";
import { useState, useEffect, FormEvent } from "react";
import styles from "./RockPaperScissors.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

const icons = [
  "/games/rps/rock.png", // rock
  "/games/rps/paper.png", // paper
  "/games/rps/scissors.png", // scissors
];

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

  const [hasComputerPlayed, setHasComputerPlayed] = useState(false);
  const [timeBetweenRounds, setTimeBetweenRounds] = useState<number>(3);
  const [countDown, setCountDown] = useState(timeBetweenRounds);
  const [currentRound, setCurrentRound] = useState(1);
  const [roundStatus, setRoundStatus] = useState<string>("");
  const [roundFinished, setRoundFinished] = useState(false);

  useEffect(() => {
    if (!enteredRounds || disabled || hasComputerPlayed) return;

    if (countDown > 0) {
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (countDown === 0 && !hasComputerPlayed) {
      const newComputerChoice = Math.trunc(Math.random() * 3);
      setComputerChoice(newComputerChoice);
      setHasComputerPlayed(true);

      // Determine winner
      if (newComputerChoice === playerChoice) {
        setTies((t) => t + 1);
        setRoundStatus("Tie");
      } else if (
        (newComputerChoice === 2 && playerChoice === 1) ||
        (newComputerChoice === 0 && playerChoice === 2) ||
        (newComputerChoice === 1 && playerChoice === 0)
      ) {
        setLosses((l) => l + 1);
        setRoundStatus("Lose");
      } else {
        setWins((w) => w + 1);
        setRoundStatus("Win");
      }

      setRoundFinished(true);
    }
  }, [countDown, enteredRounds, disabled, hasComputerPlayed, playerChoice]);

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
    if (disabled || roundFinished) return;
    setPlayerChoice(c);
  };

  const handleNextRound = () => {
    if (disabled || countDown > 0) return;

    const roundsRemaining = rounds - 1;
    const oneMoreRound = currentRound + 1;

    if (roundsRemaining <= 0) {
      setRounds(0);
      setDisabled(true);
      return; // Prevent further state changes
    }

    setRounds(roundsRemaining);
    setCurrentRound(oneMoreRound);
    setCountDown(timeBetweenRounds);
    setHasComputerPlayed(false);
    setRoundStatus("");
    setRoundFinished(false);
  };

  const handleStartNewGame = () => {
    window.location.reload();
  };

  if (!enteredRounds) {
    return (
      <>
        <div className={styles.container}>
          <div className="p-4">
            <ReturnToGamesButton />
          </div>
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
            <br />
            <br />
            <br />
            <label>Choose time between rounds:</label>
            <br />
            <select
              value={timeBetweenRounds}
              onChange={(e) => setTimeBetweenRounds(Number(e.target.value))}
              className={styles.selectTime}
            >
              {[2, 3, 5, 8, 10].map((sec) => (
                <option value={sec} key={sec}>
                  {sec} seconds
                </option>
              ))}
            </select>
            <br />
            <input type="submit" className={styles.submitRounds} value="Start game!" />
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`${styles.container} mx-4`}>
        <div className="p-4">
          <ReturnToGamesButton />
        </div>
        <h1>Rock Paper Scissors!</h1>
        <div className={`my-3 mb-6 ${styles.round}`}>Round {currentRound}</div>
        <div className="my-3 mb-6">{rounds} rounds remaining</div>
        <div className={styles.gameGrid}>
          <div className={styles["game-box"]}>Wins</div>
          <div className={styles["game-box"]}>Ties</div>
          <div className={styles["game-box"]}>Losses</div>
          <div className={styles["game-box"]}>{wins.toLocaleString()}</div>
          <div className={styles["game-box"]}>{ties.toLocaleString()}</div>
          <div className={styles["game-box"]}>{losses.toLocaleString()}</div>
          <div className={`${styles["game-box"]} ${styles.pct}`}>
            Pct: {winningPercentage}%
          </div>
          <div className={styles["game-box"]}></div>
          <div className={styles["game-box"]}></div>{" "}
          <div className={`${styles["game-box"]} ${styles["player"]}`}>
            {hasComputerPlayed ? (
              <img src={icons[playerChoice]} alt={"player"} />
            ) : (
              <span className={styles.countDown}>
                {countDown > 0 ? countDown : "Ready!"}
              </span>
            )}
          </div>
          <div className={`${styles["game-box"]} ${styles["status"]}`}>
            {roundStatus && <span>{roundStatus}</span>}
          </div>
          <div className={`${styles["game-box"]} ${styles["computer"]}`}>
            {hasComputerPlayed ? (
              <img src={icons[computerChoice]} alt={"computer"} />
            ) : (
              <span className={styles.countDown}>
                {countDown > 0 ? countDown : "Ready!"}
              </span>
            )}
          </div>
          <div>You</div>
          <div></div>
          <div>Computer player</div>
        </div>
        <div
          className={`my-3`}
          style={{ height: "10px", background: "black", marginBottom: "30px" }}
        ></div>
        <div className={styles.choiceGrid}>
          {icons.map((icon, num) => (
            <div
              className={`${styles["game-box"]}`}
              onClick={() => handleSwitchChoice(num)}
              key={num}
            >
              <img
                className={`${styles.icon} ${
                  playerChoice === num ? styles.selectedChoice : ""
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
