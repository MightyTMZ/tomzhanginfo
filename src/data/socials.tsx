import { email } from "./email";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    icon: <FaEnvelope />,
    title: email,
    label: "Email",
    url: `mailto:${email}`,
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "Tom Zhang",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tom-zhang-485341274/",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    title: "OrbitTommyZ",
    label: "Twitter (X)",
    url: "https://x.com/OrbitTommyZ",
  },
  /*{
    id: 4,
    icon: <FaGithub />,
    title: "MightyTMZ",
    label: "GitHub",
    url: "https://github.com/MightyTMZ",
  },*/

  
];
