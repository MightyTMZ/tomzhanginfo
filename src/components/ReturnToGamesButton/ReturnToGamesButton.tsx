"use client";

import PrimaryAppButton from "../PrimaryAppButton/PrimaryAppButton";
import { useRouter } from "next/navigation";

const ReturnToGamesButton = () => {
  const router = useRouter();

  const handleReturnGames = () => {
    router.push("/games");
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <PrimaryAppButton text="Back to games" onClick={handleReturnGames} />
    </div>
  );
};

export default ReturnToGamesButton;
