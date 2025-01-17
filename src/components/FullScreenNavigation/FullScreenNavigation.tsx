"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./FullScreenNavigation.css";

const navItems = [
  { id: 1, title: "Home", reference: "/" },
  { id: 2, title: "About", reference: "/about" },
  {
    id: 3,
    title: "Daily Dose of Insights",
    reference: "/daily-dose-of-insights",
  },
  { id: 4, title: "Connect with me", reference: "/connect-with-me" },
  { id: 5, title: "Photography", reference: "/photography" },
  { id: 6, title: "Self-Education", reference: "/self-education" },
  { id: 7, title: "My Works", reference: "/my-works" },
  { id: 8, title: "Services", reference: "/services" },
  { id: 9, title: "Resources", reference: "/resources" },
  { id: 10, title: "My Ventures", reference: "/my-ventures" },
  { id: 11, title: "Testimonials", reference: "/testimonials" },
];

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
