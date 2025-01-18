"use client";

import SecondaryAppButton from "../SecondaryAppButton/SecondaryAppButton";
import { useRouter } from "next/navigation";

const ReturnHomeButton = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <SecondaryAppButton text="Back to home page" onClick={handleReturnHome} />
    </div>
  );
};

export default ReturnHomeButton;
