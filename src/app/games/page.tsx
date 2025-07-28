"use client";

import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import Link from "next/link";

export default function GamesHome() {
  // List of games (expandable in the future)
  const games = [
    {
      title: "Moon basketball",
      description: "Beat my high score of 43! (use arrows on the keyboard)",
      href: "/games/moon-basketball",
      image: "/games/moonbball.png",
    },
    {
      title: "Random Color",
      description: "Click to generate a random color!",
      href: "/games/random-color",
      image: "/games/random-color.png",
    },
    {
      title: "Solar System Clicker",
      description:
        "Start clicking on the planets in our solar system. (use your computer mouse)",
      href: "/games/solar-system-clicker",
      image: "/games/solarssc.png",
    },
    {
      title: "Soccer Arena",
      description:
        "Play a fun soccer game while you're here. (use your computer mouse)",
      href: "/games/soccer-arena",
      image: "/games/soccer-arena.png",
    },
    {
      title: "Talking Ben Online",
      description: "Online Talking Ben simulator!",
      href: "/games/talking-ben-online",
      image: "/games/ben.png",
    },
    {
      title: "Blackjack",
      description: "Play blackjack!",
      href: "/games/blackjack",
      image: "/games/blackjack.png"
    },
    {
      title: "Rock Paper Scissors",
      description: "Play rock paper scissors!",
      href: "/games/rock-paper-scissors",
      image: "/games/rps.png",
    },
    {
      title: "Hangman",
      description: "Play hangman!",
      href: "/games/hangman",
    },
    {
      title: "Tic Tac Toe",
      description: "Play tic tac toe!",
      href: "/games/tic-tac-toe",
      image: "/games/tictactoe.png"
    },

    // Add more games here in the future
  ];

  return (
    <>
      <div className="pl-4">
        <ReturnHomeButton />
      </div>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "40px 0",
          background: "#f7f7fa",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: 24 }}>Games</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
            width: "100%",
            maxWidth: 900,
          }}
        >
          {games.map((game) => (
            <Link
              key={game.title}
              href={game.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: 260,
                height: 200,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                textDecoration: "none",
                color: "#222",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "pointer",
                border: "1px solid #e5e7eb",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "scale(1.04)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.title}
                  style={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
              ) : (
                <>
                  <div
                    style={{
                      width: "100%",
                      height: 120,
                      backgroundColor: "grey",
                    }}
                  ></div>
                </>
              )}
              <div
                style={{
                  padding: "16px",
                  textAlign: "center",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {game.title}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666" }}>
                  {game.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 40, color: "#888", fontSize: 16 }}>
          More games coming soon!
        </div>
      </div>
    </>
  );
}
