"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  items: string[];
}

const CollapsibleList = ({ title, items }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="collapsible-list">
      <strong>{title}</strong>
      <ul style={{ listStyleType: "circle", paddingLeft: "15px" }}>
        {items.slice(0, showAll ? items.length : 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={toggleShowAll} className="show-more-btn text-blue-600">
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default CollapsibleList;
