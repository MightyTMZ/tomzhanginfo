"use client";

import React from "react";
import { useEffect, useState } from "react";

const ViewsCount = () => {
  const backendServerAdress = "https://tomzhangpersonalsite.pythonanywhere.com";

  const [views, setViews] = useState("-"); // set this to a good default value instead of 0

  useEffect(() => {
    fetch(`${backendServerAdress}/views/count/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setViews(data.count);
      })
      .catch((error) => {
        console.error("Error fetching views:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "15px", marginBottom: "15px", color: "gray", fontSize: '10px' }}>
      Views: {views.toLocaleString()}
    </div>
  );
};

export default ViewsCount;
