"use client";

// Tom chose not to use this one

import React, { useState } from "react";
import styles from "./DefaultTopNavigation.module.css";

const DefaultTopNavigation = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div
      className={`${styles.topnav} ${isResponsive ? styles.responsive : ""}`}
      id="myTopnav"
    >
      <a href="#home" className={styles.active}>
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a
        href="javascript:void(0);"
        className={styles.icon}
        onClick={toggleMenu}
        style={{ color: "white" }}
      >
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default DefaultTopNavigation;
