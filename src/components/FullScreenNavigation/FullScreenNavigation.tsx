"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigationLinks";
import "./FullScreenNavigation.css";

const FullScreenNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="stickyContainer">
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div className="overlay-content">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.reference}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          {/*<a href="#">About</a>
          <a href="#">Daily Dose of Insights</a>
          <a href="#">Connect with me</a>
          <a href="#">Photography</a>
          <a href="#">Self-Education</a>
          <a href="#">My Works</a>
          <a href="#">Services</a>
          <a href="#">My Ventures</a>
          <a href="#">Testimonials</a>*/}
        </div>
      </div>

      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={openNav}
        id="fullscreennavigation-expand-button"
      >
        &#9776;
        <br />
      </span>
    </div>
  );
};

export default FullScreenNavigation;
