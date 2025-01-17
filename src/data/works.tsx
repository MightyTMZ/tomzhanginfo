import { FaGlobe, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeholderImage from "../../public/placeholder.webp";

export const projects = [
  {
    id: 1,
    title: "OrbitView",
    featureImage: placeholderImage,
    description:
      "A next-generation social media app fostering genuine connections and immersive learning.",
    links: [
      { icon: <FaGlobe />, url: "https://orbitview.com", label: "Live Site" },
      {
        icon: <FaGithub />,
        url: "https://github.com/tomzhang/orbitview",
        label: "GitHub",
      },
    ],
  },
  {
    id: 2,
    title: "Drone AI Baseball System",
    featureImage: placeholderImage,
    description:
      "Revolutionizing baseball coaching with aerial views and AI analytics.",
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://droneai.com",
        label: "Details",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/tomzhang/drone-ai",
        label: "GitHub",
      },
    ],
  },
  {
    id: 3,
    title: "Token Z Labs",
    featureImage: placeholderImage,
    description:
      "A tokenization platform providing secure B2B TradFi and DeFi Web3 infrastructure.",
    links: [
      { icon: <FaGlobe />, url: "https://tokenzlabs.com", label: "Live Site" },
    ],
  },
  {
    id: 4,
    title: "Ollama Guidebook",
    featureImage: placeholderImage,
    description:
      "A comprehensive guidebook to Ollama, covering tools and integrations for seamless AI workflows.",
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://ollama-guide.com",
        label: "Read More",
      },
    ],
  },
];
