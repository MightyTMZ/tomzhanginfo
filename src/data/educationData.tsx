import { CgVercel } from "react-icons/cg";
import { DiDjango } from "react-icons/di";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiDjango,
  SiFastapi,
  SiInsomnia,
  SiMysql,
  SiNextdotjs,
  SiOllama,
  SiPythonanywhere,
  SiPytorch,
  SiSqlite,
  SiTensorflow,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const educationData = {
  courses: [
    {
      title:
        "Text Retrieval and Search Engines (University of Illinois Urbana-Champaign) ",
      reference: "https://www.coursera.org/learn/text-retrieval/",
      completion: 11,
    },
    {
      title: "Introduction to Statistics (Stanford University)",
      reference: "https://www.coursera.org/learn/stanford-statistics/",
      completion: 5,
    },
  ],
  certifications: [
    {
      title: "Meta Back-End Developer",
      reference:
        "https://www.coursera.org/account/accomplishments/specialization/L54BNPRXXHHR",
      completion: 100,
    },
    {
      title: "IBM AI Engineering",
      reference:
        "https://www.coursera.org/account/accomplishments/professional-cert/5R8QGKAZBE3A",
      completion: 100,
    },
    {
      title: "Agentic AI and AI Agents for Leaders (Vanderbilt University)",
      reference:
        "https://www.coursera.org/specializations/ai-agents-for-leaders",
      completion: 23,
    },
  ],
  skills: [
    { title: "Python", icon: <FaPython /> },
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3 /> },
    { title: "JavaScript", icon: <IoLogoJavascript /> },
    { title: "React.js", icon: <FaReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "Vercel", icon: <CgVercel /> },
    { title: "VSCode", icon: <VscVscode /> },
    { title: "Git", icon: <FaGitAlt /> },
    { title: "GitHub", icon: <FaGithub /> },
    { title: "Ollama", icon: <SiOllama /> },
    { title: "SQL", icon: <TbFileTypeSql /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "Sqlite", icon: <SiSqlite /> },
    { title: "SQL", icon: <TbFileTypeSql /> },
    { title: "Java", icon: <FaJava /> },
    { title: "Insomnia (for API testing)", icon: <SiInsomnia /> },
    { title: "Django", icon: <SiDjango /> },
    { title: "Django REST Framework (DRF)", icon: <DiDjango /> },
    { title: "FastAPI", icon: <SiFastapi /> },
    { title: "PythonAnywhere", icon: <SiPythonanywhere /> },
    { title: "PyTorch", icon: <SiPytorch /> },
    { title: "TensorFlow", icon: <SiTensorflow /> },
    { title: "Scikit Learn", icon: <TbFileTypeSql /> },
  ],
  books: [
    { title: "The Lean Startup", completion: 90 },
    { title: "Atomic Habits", completion: 90 },
  ],
};
