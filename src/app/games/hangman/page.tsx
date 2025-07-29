"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hangman.module.css";
import { WORDS } from "./words-list";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

type GameStatus = "playing" | "won" | "lost";

const MAX_TRIES = 6;

function getDisplayWord(word: string, guessed: Set<string>) {
  //   console.log(word);
  //   console.log(guessed);
  return word
    .toLowerCase()
    .split("")
    .map((char) => (guessed.has(char) ? char : "_"))
    .join(" ");
}

export default function HangmanGame() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [triesLeft, setTriesLeft] = useState(MAX_TRIES);
  const [status, setStatus] = useState<GameStatus>("playing");

  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
  }, []);

  useEffect(() => {
    if (!word) return;

    const allGuessed = word
      .toLowerCase()
      .split("")
      .every((char) => guessedLetters.has(char));
    if (allGuessed) {
      setStatus("won");
    } else if (triesLeft <= 0) {
      setStatus("lost");
    }
  }, [guessedLetters, triesLeft, word]);

  const handleGuess = (letter: string) => {
    if (status !== "playing" || guessedLetters.has(letter)) return;

    setGuessedLetters((prev) => new Set(prev).add(letter));

    if (!word.toLowerCase().includes(letter)) {
      setTriesLeft((prev) => prev - 1);
    }
  };

  const resetGame = () => {
    const newWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(newWord);
    setGuessedLetters(new Set());
    setTriesLeft(MAX_TRIES);
    setStatus("playing");
  };

  const displayWord = getDisplayWord(word, guessedLetters);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <>
      <div className="m-4">
        <ReturnToGamesButton />
      </div>
      <div className={styles.container}>
        <h1>Hangman (tech version!)</h1>
        <p className={styles.word}>{displayWord}</p>
        <p>Tries left: {triesLeft}</p>

        <div className={styles.letters}>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={guessedLetters.has(letter) || status !== "playing"}
              className={styles.letterButton}
            >
              {letter}
            </button>
          ))}
        </div>

        {status !== "playing" && (
          <div className={styles.result}>
            <h2>
              {status === "won"
                ? `🎉 You Won! Word was "${word}"`
                : `💀 You Lost! Word was "${word}"`}
            </h2>
            <button onClick={resetGame} className={styles.resetButton}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
