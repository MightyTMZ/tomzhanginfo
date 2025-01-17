"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./FullScreenNavigation.css";

const navItems = [
  { id: 1, title: "About", reference: "/about" },
  {
    id: 2,
    title: "Daily Dose of Insights",
    reference: "/daily-dose-of-insights",
  },
  { id: 3, title: "Connect with me", reference: "/connect-with-me" },
  { id: 4, title: "Photography", reference: "/photography" },
  { id: 5, title: "Self-Education", reference: "/self-education" },
  { id: 6, title: "My Works", reference: "/my-works" },
  { id: 7, title: "Services", reference: "/services" },
  { id: 8, title: "My Ventures", reference: "/my-ventures" },
  { id: 9, title: "Testimonials", reference: "/testimonials" },
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
    <div>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div className="overlay-content">
          {navItems.map((item) => (
            <Link key={item.id} href={item.reference}>
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

      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
};

export default FullScreenNavigation;
