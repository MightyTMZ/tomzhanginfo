'use client';

import { useState } from 'react';
import styles from './BlackJack.module.css';

type Card = string;

function getCardValue(card: Card): number {
  const value = card.slice(0, -1);
  if (['J', 'Q', 'K'].includes(value)) return 10;
  if (value === 'A') return 11;
  return parseInt(value);
}

function calculateHandValue(hand: Card[]): number {
  let value = hand.reduce((acc, card) => acc + getCardValue(card), 0);
  let aces = hand.filter((card) => card.startsWith('A')).length;
  while (value > 21 && aces--) {
    value -= 10;
  }
  return value;
}

function drawCard(): Card {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♠', '♥', '♦', '♣'];
  return ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)];
}

export default function Home() {
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(100_000_000);
  const [bet, setBet] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const startGame = () => {
    if (bet <= 0 || bet > balance) {
      setMessage('Invalid bet amount.');
      return;
    }

    const newPlayerHand = [drawCard(), drawCard()];
    const newDealerHand = [drawCard(), drawCard()];
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setGameActive(true);
    setBalance(prev => prev - bet);
    setMessage('');
  };

  const hit = () => {
    const newHand = [...playerHand, drawCard()];
    setPlayerHand(newHand);
    const value = calculateHandValue(newHand);
    if (value > 21) {
      setMessage('You busted!');
      setGameActive(false);
    }
  };

  const stand = () => {
    let dealer = [...dealerHand];
    while (calculateHandValue(dealer) < 17) {
      dealer.push(drawCard());
    }

    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealer);

    let result = '';
    if (playerValue > 21) {
      result = 'You busted!';
    } else if (dealerValue > 21 || playerValue > dealerValue) {
      const isBlackjack = playerHand.length === 2 && playerValue === 21;
      const winnings = isBlackjack ? Math.floor(bet * 2.5) : bet * 2;
      setBalance(prev => prev + winnings);
      result = isBlackjack ? 'Blackjack! You win 2.5x your bet!' : 'You win!';
    } else if (playerValue === dealerValue) {
      setBalance(prev => prev + bet);
      result = 'Push. Bet refunded.';
    } else {
      result = 'Dealer wins.';
    }

    setDealerHand(dealer);
    setMessage(result);
    setGameActive(false);
  };

  return (
    <main className={styles.container}>
      <h1>Blackjack</h1>
      <p>Balance: ${balance.toLocaleString()}</p>

      <div className={styles.section}>
        <label>
          Bet Amount: $
          <input
            type="number"
            className={styles.bet}
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
            disabled={gameActive}
          />
        </label>
      </div>

      <div className={styles.section}>
        {!gameActive ? (
          <button onClick={startGame}>Start Game</button>
        ) : (
          <div className={styles.controls}>
            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2>Player Hand ({calculateHandValue(playerHand)})</h2>
        <div className={styles.cards}>
          {playerHand.map((card, i) => (
            <div key={i} className={styles.card}>{card}</div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Dealer Hand ({!gameActive && calculateHandValue(dealerHand)})</h2>
        <div className={styles.cards}>
          {dealerHand.map((card, i) => (
            <div key={i} className={styles.card}>
              {gameActive && i === 1 ? '🂠' : card}
            </div>
          ))}
        </div>
      </div>

      {message && <div className={styles.message}>{message}</div>}
    </main>
  );
}
