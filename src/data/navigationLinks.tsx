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
} from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

export const navItems = [
  {
    id: 1,
    title: (
      <span style={{ display: "inline-flex" }}>
        Home &nbsp; <FaHome />
      </span>
    ),
    reference: "/",
  },
  {
    id: 2,
    title: (
      <span style={{ display: "inline-flex" }}>
        About &nbsp; <FaInfoCircle />
      </span>
    ),
    reference: "/about",
  },
  {
    id: 3,
    title: (
      <span style={{ display: "inline-flex" }}>
        Daily Dose of Insights &nbsp; <FaLightbulb />
      </span>
    ),
    reference: "/daily-dose-of-insights",
  },
  {
    id: 4,
    title: (
      <span style={{ display: "inline-flex" }}>
        Connect with Me &nbsp; <FaUserFriends />
      </span>
    ),
    reference: "/connect-with-me",
  },
  {
    id: 5,
    title: (
      <span style={{ display: "inline-flex" }}>
        Photography &nbsp; <FaCamera />
      </span>
    ),
    reference: "/photography",
  },
  {
    id: 6,
    title: (
      <span style={{ display: "inline-flex" }}>
        Self-Education &nbsp; <FaBook />
      </span>
    ),
    reference: "/self-education",
  },
  {
    id: 7,
    title: (
      <span style={{ display: "inline-flex" }}>
        My Works &nbsp; <FaProjectDiagram />
      </span>
    ),
    reference: "/my-works",
  },
  {
    id: 8,
    title: (
      <span style={{ display: "inline-flex" }}>
        Services &nbsp; <FaTools />
      </span>
    ),
    reference: "/services",
  },
  {
    id: 9,
    title: (
      <span style={{ display: "inline-flex" }}>
        Blog/Newsletter &nbsp; <TfiWrite />
      </span>
    ),
    reference: "/newsletter",
  },
  {
    id: 10,
    title: (
      <span style={{ display: "inline-flex" }}>
        Resources &nbsp; <FaBookOpen />
      </span>
    ),
    reference: "/resources",
  },
  {
    id: 11,
    title: (
      <span style={{ display: "inline-flex" }}>
        My Ventures &nbsp; <FaRocket />
      </span>
    ),
    reference: "/my-ventures",
  },
  {
    id: 12,
    title: (
      <span style={{ display: "inline-flex" }}>
        Testimonials &nbsp; <FaQuoteRight />
      </span>
    ),
    reference: "/testimonials",
  },
  {
    id: 13,
    title: (
      <span style={{ display: "inline-flex" }}>
        Athletics &nbsp; <FaRunning />
      </span>
    ),
    reference: "/athletics",
  },
];

export const navigateLinks = [
  { id: 1, title: "Home", reference: "/" },
  { id: 2, title: "About", reference: "/about" },
  {
    id: 3,
    title: "Daily Dose of Insights",
    reference: "/daily-dose-of-insights",
  },
  { id: 4, title: "Connect with me", reference: "/connect-with-me" },
];

export const exploreLinks = [
  { id: 5, title: "Photography", reference: "/photography" },
  { id: 6, title: "Self-Education", reference: "/self-education" },
  { id: 7, title: "My Works", reference: "/my-works" },
  { id: 8, title: "Services", reference: "/services" },
];

export const moreResources = [
  { id: 9, title: "Resources", reference: "/resources" },
  { id: 10, title: "Blog/Newsletter", reference: "/newsletter" },
  { id: 11, title: "My Ventures", reference: "/my-ventures" },
  { id: 12, title: "Testimonials", reference: "/testimonials" },
  { id: 13, title: "Athletics", reference: "/athletics" },
];
