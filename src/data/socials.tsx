import { email } from "./email";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    title: "Tom Zhang",
    label: "LinkedIn",
    url: "https://linkedin.com/in/tomzhang",
  },
  {
    id: 2,
    icon: <FaGithub />,
    title: "MightyTMZ",
    label: "GitHub",
    url: "https://github.com/tomzhang",
  },

  {
    id: 3,
    icon: <FaEnvelope />,
    title: email,
    label: "Email",
    url: `mailto:${email}`,
  },
];
