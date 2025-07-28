// DISCLAIMER: made with the help of AI (as I need to save time as I learn regulatory compliance, negotiations, intellectual property laws, law and economics)
// other games are made mostly by hand

"use client";

import React, { useState } from "react";
import styles from "./BlackJack.module.css";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";

interface Card {
  suit: string;
  value: string;
}

const suits = ["♠", "♥", "♦", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const getCardValue = (card: Card): number => {
  if (["J", "Q", "K"].includes(card.value)) return 10;
  if (card.value === "A") return 11;
  return parseInt(card.value);
};

const calculateScore = (hand: Card[]): number => {
  let score = hand.reduce((acc, card) => acc + getCardValue(card), 0);
  let aces = hand.filter((card) => card.value === "A").length;
  while (score > 21 && aces > 0) {
    score -= 10;
    aces--;
  }
  return score;
};

const drawCard = (): Card => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { suit, value };
};

export default function BlackjackGame() {
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const startGame = () => {
    const newPlayerHand = [drawCard(), drawCard()];
    const newDealerHand = [drawCard(), drawCard()];
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setIsGameOver(false);
    setMessage("");
  };

  const hit = () => {
    const newHand = [...playerHand, drawCard()];
    setPlayerHand(newHand);
    const score = calculateScore(newHand);
    if (score > 21) {
      setIsGameOver(true);
      setMessage("You busted!");
    }
  };

  const stand = () => {
    const dealer = [...dealerHand];
    while (calculateScore(dealer) < 17) {
      dealer.push(drawCard());
    }
    setDealerHand(dealer);

    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(dealer);

    if (dealerScore > 21 || playerScore > dealerScore) {
      setMessage("You win!");
    } else if (playerScore < dealerScore) {
      setMessage("Dealer wins!");
    } else {
      setMessage("It's a tie!");
    }

    setIsGameOver(true);
  };

  return (
    <>
      <div className="m-4">
        <ReturnToGamesButton />
      </div>
      <div className={styles.container}>
        <h1>Blackjack</h1>
        <div className={styles.section}>
          <h2 className="mb-4">Your Hand ({calculateScore(playerHand)})</h2>
          <div className={styles.cards}>
            {playerHand.map((card, i) => (
              <span
                key={i}
                className={styles.card}
              >{`${card.value}${card.suit}`}</span>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className="mb-4">
            Dealer's Hand ({isGameOver ? calculateScore(dealerHand) : "??"})
          </h2>
          <div className={styles.cards}>
            {dealerHand.map((card, i) => (
              <span key={i} className={styles.card}>
                {isGameOver || i > 0 ? `${card.value}${card.suit}` : "??"}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.controls}>
          {playerHand.length === 0 || isGameOver ? (
            <button onClick={startGame}>New Game</button>
          ) : (
            <>
              <button onClick={hit}>Hit</button>
              <button onClick={stand}>Stand</button>
            </>
          )}
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </>
  );
}
