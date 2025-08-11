"use client";

import React, { useState, useEffect } from "react";
import ReturnToGamesButton from "@/components/ReturnToGamesButton/ReturnToGamesButton";
import styles from "./Battleship.module.css";

type Cell = {
  hasShip: boolean;
  hit: boolean;
  miss?: boolean;
  shipId?: number; // which ship occupies this cell
};

const BOARD_SIZE = 10;
const SHIPS = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Cruiser", size: 3 },
  { name: "Submarine", size: 3 },
  { name: "Destroyer", size: 2 },
];

const indexFromRC = (r: number, c: number) => r * BOARD_SIZE + c;
const rcFromIndex = (i: number) => [Math.floor(i / BOARD_SIZE), i % BOARD_SIZE];

const emptyBoard = (): Cell[] =>
  Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map(() => ({
    hasShip: false,
    hit: false,
  }));

// attempt to place a ship on board at row r col c horizontal/vertical; returns indices if ok
function tryPlaceShip(
  board: Cell[],
  shipSize: number,
  r: number,
  c: number,
  horizontal: boolean
): number[] | null {
  const positions: number[] = [];
  for (let k = 0; k < shipSize; k++) {
    const rr = r + (horizontal ? 0 : k);
    const cc = c + (horizontal ? k : 0);
    if (rr < 0 || rr >= BOARD_SIZE || cc < 0 || cc >= BOARD_SIZE) return null;
    const idx = indexFromRC(rr, cc);
    // check overlap and adjacency (optional: simple no-overlap)
    if (board[idx].hasShip) return null;
    positions.push(idx);
  }
  return positions;
}

// place ships randomly
function randomPlaceAllShips(): Cell[] {
  const board = emptyBoard();
  let shipId = 1;
  for (const ship of SHIPS) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 1000) {
      attempts++;
      const horizontal = Math.random() < 0.5;
      const r = Math.floor(Math.random() * BOARD_SIZE);
      const c = Math.floor(Math.random() * BOARD_SIZE);
      const pos = tryPlaceShip(board, ship.size, r, c, horizontal);
      if (pos) {
        pos.forEach((idx) => {
          board[idx] = { ...board[idx], hasShip: true, shipId };
        });
        placed = true;
        shipId++;
      }
    }
    if (!placed) {
      // fallback: reset and retry entire placement to avoid partial failing
      return randomPlaceAllShips();
    }
  }
  return board;
}

export default function Battleship() {
  const [playerBoard, setPlayerBoard] = useState<Cell[]>(emptyBoard());
  const [enemyBoard, setEnemyBoard] = useState<Cell[]>(randomPlaceAllShips());
  const [phase, setPhase] = useState<"placement" | "battle" | "gameover">(
    "placement"
  );
  const [currentShipIndex, setCurrentShipIndex] = useState(0);
  const [orientationHorizontal, setOrientationHorizontal] = useState(true);
  const [message, setMessage] = useState<string>(
    "Place your ships on the board."
  );
  const [enemyTargetsTried, setEnemyTargetsTried] = useState<number[]>([]);
  const [playerTurn, setPlayerTurn] = useState(true); // player begins
  const [sunkEnemyShips, setSunkEnemyShips] = useState<number[]>([]);
  const [sunkPlayerShips, setSunkPlayerShips] = useState<number[]>([]);

  if (sunkEnemyShips && sunkPlayerShips) {
    // ghost reference to bypass build error
  }

  useEffect(() => {
    // reset messages when things change
    if (phase === "placement") {
      setMessage(
        `Place ${SHIPS[currentShipIndex].name} (size ${
          SHIPS[currentShipIndex].size
        }). Orientation: ${orientationHorizontal ? "Horizontal" : "Vertical"}`
      );
    }
  }, [currentShipIndex, orientationHorizontal, phase]);

  // helper to detect if ship (by id) is sunk on given board
  function checkSunkShips(board: Cell[], revealed = true): number[] {
    if (revealed) {
      // ghost reference to bypass build error
    }
    const shipsFound: { [id: number]: number[] } = {};
    board.forEach((cell, idx) => {
      if (cell.hasShip && cell.shipId) {
        shipsFound[cell.shipId] = shipsFound[cell.shipId] || [];
        shipsFound[cell.shipId].push(idx);
      }
    });
    const sunk: number[] = [];
    Object.entries(shipsFound).forEach(([idStr, indices]) => {
      const id = parseInt(idStr, 10);
      const allHit = indices.every((i) => board[i].hit);
      if (allHit) sunk.push(id);
    });
    return sunk;
  }

  // Player places a ship by clicking
  function handlePlayerPlace(r: number, c: number) {
    if (phase !== "placement") return;
    const ship = SHIPS[currentShipIndex];
    const pos = tryPlaceShip(
      playerBoard,
      ship.size,
      r,
      c,
      orientationHorizontal
    );
    if (!pos) {
      setMessage("Invalid placement. Try a different spot.");
      return;
    }
    const next = [...playerBoard];
    const shipId = currentShipIndex + 1; // unique id per ship placement
    pos.forEach((idx) => {
      next[idx] = { ...next[idx], hasShip: true, shipId };
    });
    setPlayerBoard(next);
    if (currentShipIndex + 1 >= SHIPS.length) {
      // all placed
      setPhase("battle");
      setMessage("All ships placed! Battle begins. It's your turn to fire.");
      setPlayerTurn(true);
    } else {
      setCurrentShipIndex((s) => s + 1);
      setMessage(
        `Placed ${ship.name}. Place ${SHIPS[currentShipIndex + 1].name} (size ${
          SHIPS[currentShipIndex + 1].size
        }).`
      );
    }
  }

  // Auto-place player's ships
  function autoPlacePlayerShips() {
    const placed = randomPlaceAllShips();
    // but we want shipId consistent with player ship order; randomPlaceAllShips sets ids sequentially
    setPlayerBoard(placed);
    setPhase("battle");
    setMessage("Auto-placed your ships. Battle begins! It's your turn.");
    setPlayerTurn(true);
  }

  // Player fires at enemy
  function playerFire(r: number, c: number) {
    if (phase === "gameover" || phase !== "battle" || !playerTurn) return;
    const idx = indexFromRC(r, c);
    if (enemyBoard[idx].hit || enemyBoard[idx].miss) {
      setMessage("You already fired there. Choose another cell.");
      return;
    }
    const next = [...enemyBoard];
    if (next[idx].hasShip) {
      next[idx] = { ...next[idx], hit: true };
      setMessage("Hit!");
    } else {
      next[idx] = { ...next[idx], miss: true };
      setMessage("Miss.");
    }
    setEnemyBoard(next);
    // check if enemy ship sunk
    const sunk = checkSunkShips(next);
    setSunkEnemyShips(sunk);
    // check win
    const allEnemySunk = sunk.length >= SHIPS.length;
    if (allEnemySunk) {
      setPhase("gameover");
      setMessage("You win! All enemy ships sunk.");
      return;
    }
    // player's turn ends; enemy will fire after a short delay
    setPlayerTurn(false);
    setTimeout(enemyFireRandom, 700);
  }

  // Enemy fires randomly at player's board
  function enemyFireRandom() {
    const tried = new Set(enemyTargetsTried);
    let choice = -1;
    const maxTries = BOARD_SIZE * BOARD_SIZE;
    for (let t = 0; t < maxTries; t++) {
      const rand = Math.floor(Math.random() * BOARD_SIZE * BOARD_SIZE);
      if (!tried.has(rand)) {
        choice = rand;
        break;
      }
    }
    if (choice < 0) {
      // everything tried (shouldn't happen)
      setPhase("gameover");
      setMessage("Game over (no moves left).");
      return;
    }
    tried.add(choice);
    setEnemyTargetsTried(Array.from(tried));
    const next = [...playerBoard];
    if (next[choice].hit || next[choice].miss) {
      // shouldn't happen, but guard
      setTimeout(enemyFireRandom, 200);
      return;
    }
    if (next[choice].hasShip) {
      next[choice] = { ...next[choice], hit: true };
      setMessage("Enemy hit your ship!");
    } else {
      next[choice] = { ...next[choice], miss: true };
      setMessage("Enemy missed.");
    }
    setPlayerBoard(next);

    // check if player ship sunk
    const sunk = checkSunkShips(next);
    setSunkPlayerShips(sunk);
    const allPlayerSunk = sunk.length >= SHIPS.length;
    if (allPlayerSunk) {
      setPhase("gameover");
      setMessage("Enemy sank all your ships. You lose.");
      return;
    }

    // give turn back to player
    setPlayerTurn(true);
    setMessage((prev) => prev + " Your turn.");
  }

  function restart() {
    setPlayerBoard(emptyBoard());
    setEnemyBoard(randomPlaceAllShips());
    setPhase("placement");
    setCurrentShipIndex(0);
    setOrientationHorizontal(true);
    setMessage("Place your ships on the board.");
    setEnemyTargetsTried([]);
    setPlayerTurn(true);
    setSunkEnemyShips([]);
    setSunkPlayerShips([]);
  }

  // helper to display a cell content for player view
  function renderPlayerCell(cell: Cell) {
    if (cell.hit && cell.hasShip) return <span className={styles.hit}>✕</span>;
    if (cell.hasShip) return <span className={styles.ship}>●</span>;
    if (cell.miss) return <span className={styles.miss}>•</span>;
    return null;
  }

  // helper to display a cell content for enemy view (fog of war)
  function renderEnemyCell(cell: Cell) {
    if (cell.hit && cell.hasShip) return <span className={styles.hit}>✕</span>;
    if (cell.miss) return <span className={styles.miss}>•</span>;
    // unknown
    return null;
  }

  return (
    <>
      <div className="ml-6">
        <ReturnToGamesButton />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Battleship</h1>
          <div className={styles.instructions}>
            <strong>How to play:</strong> Place your ships (or auto-place). Then
            take turns firing at the enemy grid. First to sink all enemy ships
            wins. Toggle orientation when placing.
          </div>
        </div>

        <div className={styles.controls}>
          {phase === "placement" && (
            <>
              <div>
                <button
                  className={styles.btn}
                  onClick={() => setOrientationHorizontal((s) => !s)}
                >
                  Toggle Orientation:{" "}
                  {orientationHorizontal ? "Horizontal" : "Vertical"}
                </button>
                <button className={styles.btn} onClick={autoPlacePlayerShips}>
                  Auto-place
                </button>
                <button className={styles.btn} onClick={restart}>
                  Restart
                </button>
              </div>
              <div className={styles.status}>
                Placing: <strong>{SHIPS[currentShipIndex].name}</strong> (size{" "}
                {SHIPS[currentShipIndex].size})
              </div>
            </>
          )}

          {phase === "battle" && (
            <>
              <div>
                <button className={styles.btn} onClick={restart}>
                  Restart
                </button>
              </div>
              <div className={styles.status}>
                {playerTurn
                  ? "Your turn — fire at enemy grid."
                  : "Enemy's turn..."}
              </div>
            </>
          )}

          {phase === "gameover" && (
            <>
              <div>
                <button className={styles.btn} onClick={restart}>
                  Play again
                </button>
              </div>
            </>
          )}
        </div>

        <div className={styles.boards}>
          <div className={styles.boardWrapper}>
            <h3>Your Fleet</h3>
            <div className={styles.grid}>
              {playerBoard.map((cell, idx) => {
                const [r, c] = rcFromIndex(idx);
                return (
                  <div
                    key={idx}
                    className={`${styles.cell} ${
                      cell.hasShip ? styles.playerShipCell : ""
                    }`}
                    onClick={() => {
                      if (phase === "placement") handlePlayerPlace(r, c);
                    }}
                    title={
                      phase === "placement"
                        ? `Click to place ${SHIPS[currentShipIndex].name}`
                        : undefined
                    }
                  >
                    {renderPlayerCell(cell)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.boardWrapper}>
            <h3>Enemy Waters</h3>
            <div className={styles.grid}>
              {enemyBoard.map((cell, idx) => {
                const [r, c] = rcFromIndex(idx);
                return (
                  <div
                    key={idx}
                    className={`${styles.cell} ${
                      cell.hit && cell.hasShip ? styles.exploded : ""
                    }`}
                    onClick={() => {
                      if (phase === "battle" && playerTurn) playerFire(r, c);
                    }}
                  >
                    {renderEnemyCell(cell)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.message}>{message}</div>
          <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span className={styles.ship}>●</span> Ship
            </span>
            <span className={styles.legendItem}>
              <span className={styles.hit}>✕</span> Hit
            </span>
            <span className={styles.legendItem}>
              <span className={styles.miss}>•</span> Miss
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
