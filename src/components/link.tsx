"use client";

import { useState } from "react";
import Link from "next/link";

interface CustomAppLinkProps {
  nonHoverText: string;
  hoverText: string;
  href: string;
  nonHoverColor?: string;
  hoverColor?: string;
  boldOnHover?: boolean;
}

const CustomAppLink = ({
  nonHoverText,
  hoverText,
  href,
}: CustomAppLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: `${hovered && "dodgerblue"}`,
        fontWeight: `${hovered && "bold"}`,
      }}
    >
      {hovered ? hoverText : nonHoverText}
    </Link>
  );
};

export default CustomAppLink;
