import React from "react";
import Link from "next/link";
import styles from "./Games.module.css";

const Games = () => {
  return (
    <section className="flex justify-center">
      <span>
        Bored? Come play some FUN games{" "}
        <Link href="/games" className={styles.link}>
          here
        </Link>{" "}
        🎈🎉🎱🎮🏀😛
      </span>
    </section>
  );
};

export default Games;
