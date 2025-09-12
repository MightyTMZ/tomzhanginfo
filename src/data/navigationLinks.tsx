import {
  FaHome,
  FaInfoCircle,
  FaUserFriends,
  FaCamera,
  FaProjectDiagram,
  FaTools,
  FaBookOpen,
  FaFileAlt,
  FaRocket,
  FaPython,
} from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { TbError404 } from "react-icons/tb";
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
  /*{
    id: 3,
    title: "Daily Dose of Insights",
    reference: "/daily-dose-of-insights",
    icon: <FaLightbulb />,
  },*/
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
  /*{
    id: 7,
    title: "Self Education",
    reference: "/self-education",
    icon: <FaBook />,
  },*/
  {
    id: 8,
    title: "My Works",
    reference: "/my-works",
    icon: <FaProjectDiagram />,
  },
  // {
  //   id: 9,
  //   title: "OrbitView",
  //   reference: "/orbitview",
  //   icon: <FaRocket />,
  // },
  {
    id: 10,
    title: "Services",
    reference: "/services",
    icon: <FaTools />,
  },
  {
    id: 11,
    title: "Blog/Newsletter",
    reference: "/newsletter",
    icon: <TfiWrite />,
  },
  {
    id: 12,
    title: "Resources",
    reference: "/resources",
    icon: <FaBookOpen />,
  },
  {
    id: 13,
    title: "FUN Games",
    reference: "/games",
    icon: <IoLogoGameControllerB />,
  },
   {
    id: 14,
    title: "Python for Kids",
    reference: "/python-challenges",
    icon: <FaPython />,
  },
  {
    id: 15,
    title: "404: Not Found",
    reference: "/not-found",
    icon: <TbError404 />,
  },
  /*{
    id: 13,
    title: "My Ventures",
    reference: "/my-ventures",
    icon: <FaRocket />,
  },*/
  // {
  //   id: 14,
  //   title: "Testimonials",
  //   reference: "/testimonials",
  //   icon: <FaQuoteRight />,
  // },
  /*{
    id: 15,
    title: "Athletics",
    reference: "/athletics",
    icon: <FaRunning />,
  },*/
];

export const navigateLinks = navItems.slice(0, 5);

export const exploreLinks = navItems.slice(5, 9);

export const moreResources = navItems.slice(9);
