import {
  FaHome,
  FaInfoCircle,
  FaLightbulb,
  FaUserFriends,
  FaCamera,
  FaBook,
  FaProjectDiagram,
  FaTools,
  FaBookOpen,
  FaRocket,
  FaQuoteRight,
  FaRunning,
  FaFileAlt,
} from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

export const navItems = [
  {
    id: 1,
    title: "Home",
    reference: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "About",
    reference: "/about",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    title: "Daily Dose of Insights",
    reference: "/daily-dose-of-insights",
    icon: <FaLightbulb />,
  },
  {
    id: 4,
    title: "Connect with me",
    reference: "/connect-with-me",
    icon: <FaUserFriends />,
  },
  {
    id: 5,
    title: "Resume",
    reference: "/resume",
    icon: <FaFileAlt />,
  },
  {
    id: 6,
    title: "Photography",
    reference: "/photography",
    icon: <FaCamera />,
  },
  {
    id: 7,
    title: "Self Education",
    reference: "/self-education",
    icon: <FaBook />,
  },
  {
    id: 8,
    title: "My Works",
    reference: "/my-works",
    icon: <FaProjectDiagram />,
  },
  {
    id: 9,
    title: "Services",
    reference: "/services",
    icon: <FaTools />,
  },
  {
    id: 10,
    title: "Blog/Newsletter",
    reference: "/newsletter",
    icon: <TfiWrite />,
  },
  {
    id: 11,
    title: "Resources",
    reference: "/resources",
    icon: <FaBookOpen />,
  },
  {
    id: 12,
    title: "My Ventures",
    reference: "/my-ventures",
    icon: <FaRocket />,
  },
  {
    id: 13,
    title: "Testimonials",
    reference: "/testimonials",
    icon: <FaQuoteRight />,
  },
  {
    id: 14,
    title: "Athletics",
    reference: "/athletics",
    icon: <FaRunning />,
  },
];

export const navigateLinks = navItems.slice(0, 5);

export const exploreLinks = navItems.slice(5, 9);

export const moreResources = navItems.slice(9);
