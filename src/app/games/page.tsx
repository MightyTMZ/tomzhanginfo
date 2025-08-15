"use client";

import ColorCount from "@/components/color-count";
import ReturnHomeButton from "@/components/ReturnHomeButton/ReturnHomeButton";
import Link from "next/link";
import Image from "next/image";

export default function GamesHome() {
  // List of games (expandable in the future)
  const games = [
    // {
    //   title: "The Color Project",
    //   description:
    //     "Can we (as a world) generate every color? One click at a time. This is because each of the three primary colors (Red, Green, and Blue) can have 256 different intensity levels (0-255), and 256 * 256 * 256 = 16,777,216",
    //   href: "https://thecolorproject.vercel.app/",
    //   image: "/games/thecolorproject.png",
    // },
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
      image: "/games/blackjack.png",
    },
    {
      title: "Rock Paper Scissors",
      description: "Play rock paper scissors!",
      href: "/games/rock-paper-scissors",
      image: "/games/rps.png",
    },
    {
      title: "Hangman",
      description:
        "Play hangman (tech edition)! Learn tech as you have the most fun!",
      href: "/games/hangman",
      image: "/games/hangman.png",
    },
    {
      title: "Battleship",
      description:
        "Play battleship!",
      href: "/games/battleship",
      image: "/games/battleship.png",
    },
    {
      title: "Tic Tac Toe (3x3)",
      description: "Play tic tac toe!",
      href: "/games/tic-tac-toe/traditional",
      image: "/games/tictactoe.png",
    },
    {
      title: "Tic Tac Toe (8x8)",
      description: "Play tic tac toe (8x8 version)!",
      href: "/games/tic-tac-toe/eight",
      image: "/games/8x8.png",
    },
    {
      title: "Chess",
      description: "Play chess!",
      href: "/games/chess",
      image: "/games/chess.png",
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
                // alignItems: "center",
                justifyContent: "flex-start",
                width: 260,
                height: 400,
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
                <Image
                  src={game.image}
                  alt={game.title}
                  width={260}
                  height={120}
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
                  {game.title === "The Color Project" && (
                    <>
                      <br />
                      <br />
                      <span>
                        &nbsp;
                        <ColorCount /> colors as of today
                      </span>
                    </>
                  )}
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
