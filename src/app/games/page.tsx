"use client";

import Link from "next/link";

export default function GamesHome() {
  // List of games (expandable in the future)
  const games = [
    {
      title: "Random Color",
      description: "Click to generate a random color!",
      href: "/games/random-color",
    },
    {
      title: "Solar System Clicker",
      description: "Start clicking on the planets in our solar system.",
      href: "/games/solar-system-clicker",
    },
    {
      title: "Soccer Arena",
      description: "Click to generate a random color!",
      href: "/games/soccer-arena",
    },
    {
      title: "Talking Ben Online",
      description: "Click to generate a random color!",
      href: "/games/talking-ben-online",
    },
    {
      title: "Moon basketball",
      description: "Click to generate a random color!",
      href: "/games/moon-basketball",
    },
    // Add more games here in the future
  ];

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "40px 0",
      background: "#f7f7fa",
      fontFamily: "'Poppins', sans-serif",
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 24 }}>Games</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "center",
        width: "100%",
        maxWidth: 900,
      }}>
        {games.map((game) => (
          <Link
            key={game.title}
            href={game.href}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 260,
              height: 160,
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              textDecoration: "none",
              color: "#222",
              transition: "transform 0.15s, box-shadow 0.15s",
              cursor: "pointer",
              border: "1px solid #e5e7eb",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 8 }}>{game.title}</div>
            <div style={{ fontSize: "1rem", color: "#666", textAlign: "center" }}>{game.description}</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: 40, color: "#888", fontSize: 16 }}>
        More games coming soon!
      </div>
    </div>
  );
}
