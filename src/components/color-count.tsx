"use client";
import { useEffect, useState } from "react";

interface ColorCountData {
  total_colors_discovered: number;
}

export default function ColorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://thecolorprojectworld-orbitview.pythonanywhere.com/colors/count/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch color count");
        return res.json();
      })
      .then((data: ColorCountData) => setCount(data.total_colors_discovered))
      .catch((err) => {
        console.error(err);
        setError("Error loading color count");
      });
  }, []);

  return (
    <span>
      <strong>
        &nbsp;
        {error ? "-" : count !== null ? count.toLocaleString() : "..."}
        &nbsp;
      </strong>
    </span>
  );
}
