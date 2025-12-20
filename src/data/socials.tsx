import { email } from "./email";
import {
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiCalendly } from "react-icons/si";

export const socialLinks = [
  {
    icon: <FaEnvelope />,
    title: email,
    label: "Email",
    url: `mailto:${email}`,
  },
  {
    icon: <FaLinkedin />,
    title: "Tom Zhang",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tom-zhang-485341274/",
  },
  {
    icon: <FaInstagram />,
    title: "@tmy.zhng",
    label: "Instagram",
    url: "https://www.instagram.com/tmy.zhng/",
  },
  {
    icon: <FaTwitter />,
    title: "OrbitTommyZ",
    label: "Twitter (X)",
    url: "https://x.com/OrbitTommyZ",
  },
  {
    icon: <FaGithub />,
    title: "MightyTMZ",
    label: "GitHub",
    url: "https://github.com/MightyTMZ",
  },
  {
    icon: <SiCalendly />,
    title: "Schedule a free call with me!",
    label: "Calendly",
    url: "https://calendly.com/tom-zhang-20",
  },
];

export const orbitviewProfileLink = "https://www.orbitview.net/profile/tom.zhang20"