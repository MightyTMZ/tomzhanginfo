import {
  FaGlobe,
  FaGithub,
  FaVideo,
  FaTwitter,
  FaGoogleDrive,
  FaLinkedin,
} from "react-icons/fa";
import placeholderImage from "../../public/placeholder.webp";
import clearsmile from "./workPics/clearsmile.png";
import azure_partners from "./workPics/azure_partners.png";
import scisoc from "./workPics/EarlHaigScienceSociety.png";
import personalWeb from "./workPics/personalweb.png";
import ssn from "./workPics/ssn.jpg";
import ah from "./workPics/ah.jpg";
import desync from "./workPics/desync.png";
import medport from "./workPics/medport.png";
import nift_of_the_web from "./workPics/nift_of_the_web.png";
import thecolorproject from "./workPics/thecolorproject.png";
import huvtsp_search from "./workPics/huvtsp_search.jpg";
import planebrain from "./workPics/planebrain.png";
import omniwave from "./workPics/omniwave.png";
import leetops from "./workPics/leetops.png";
import fineval from "./workPics/fineval.png";
import { SiDevpost } from "react-icons/si";
import { StaticImageData } from "next/image";

export const coreProjects = [
  {
    id: 202511,
    title: "FinEval: Model Analytics and Benchmarking Performance",
    featureImage: fineval ? fineval : placeholderImage,
    description: `FinEval is a full-stack benchmark for evaluating financial reasoning in large language models. Its tests whether models can handle structured, multi-step financial logic. Not just arriving at the right answer, but reason correctly along the way. 

    Think of it as “unit tests for financial intelligence in LLMs.” Models are run through curated financial problems (easy → hard), scored by a judge model on 60% correctness and 40% reasoning quality, and compared in real time. FinEval explicitly catches failure modes like right answer, wrong reasoning or sound logic, flawed calculations issues → that matter in real financial systems.
    
    Built end-to-end under 6-hour hackathon in NYC, FinEval emphasizes pragmatic engineering: simple data layers (JSONL), fast iteration, and system reliability over polish. The backend was rebuilt from scratch mid-hackathon to ship a working, real evaluation pipeline.
    `,
    links: [
      {
        icon: <FaGoogleDrive />,
        url: "https://drive.google.com/drive/folders/1wM2yQBdIYd8pTWW0xcyxLYGI0lPeuyKm?usp=drive_link",
        label: "Google Drive",
      },
      {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/posts/tom-zhang-485341274_aiengineering-llmevaluation-genai-activity-7398380529571536896--BCl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4MWUBrGupf4d8fIVU0s_XkgCoF48hezc",
        label: "LinkedIn",
      },
    ],
  },
  {
    id: 2025,
    title: "LeetOps: The New Currency of Engineering Credibility",
    featureImage: leetops ? leetops : placeholderImage,
    description: `LeetOps is the standardized benchmark for on-call engineering reliability. Practice real-world incident response scenarios at top tech companies or rising startups to prove your on-call response skills and reliability.

    Think of it as "LeetCode for incident response", but instead of solving algorithmic puzzles, engineers handle realistic production incidents across dozens of major tech companies and rising startups. Each user has a "LeetOps ELO" which is a benchmark they can use to prove their on-call reliability as well as for companies to leverage when comparing candidates.

    Top 20 (Honorable Mention) project 🏅 @ Hack the North 2025
      `,
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/leetops",
        label: "GitHub",
      },
      {
        icon: <SiDevpost />,
        url: "https://devpost.com/software/fsdfs",
        label: "Devpost",
      },
      {
        icon: <FaGlobe />,
        url: "https://leetops.vercel.app/",
        label: "Waitlist",
      },
    ],
  },
  {
    id: 1,
    title: "HUVTSP (student-led) Alumni Search Engine",
    featureImage: huvtsp_search ? huvtsp_search : placeholderImage,
    description: `Empowered 300+ HUVTSP (Harvard Undergraduate Ventures TECH Summer Program) to connect with each other and ventures through a search engine. 
    
    Implemented secure password protection to ensure exclusive access to verified HUVTSP alumni. 
  
    It has smart search (using natural language to find alumni based on skills, interest, and project needs), filter search for alumni (browsing and filtering alumni by region, session, pod, or internship), location-based searching (finding alumni based on their location), smart project/venture search (finding projects and collaboration opportunities using natural language), and filter search for projects/ventures (browsing and filtering projects based on type, stage and other criteria).
    
    Improved performance by an average of 41% through strategic caching. 
    
    Reached nearly 600 users, over 3500 impressions, and over 5000 searches as of August 2025. 

      `,
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/huvtsp-linked",
        label: "GitHub",
      },
      {
        icon: <FaGlobe />,
        url: "https://cracked-students.vercel.app/",
        label: "Live app",
      },
    ],
  },
  {
    id: 2,
    title: "The Color Project (World)",
    featureImage: thecolorproject ? thecolorproject : placeholderImage,
    description: `Made a clicking game for the WORLD in a GLOBAL attempt to discover all 16,777,216 unique colors one click at a time. 

    Currently 333,000+ colors have been discovered at the time of right now (August 2025).
    
    Made the backend so that it can successfully process tens of thousands of requests per minute and cached to keep things fast with high traffic. 
      `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://www.thecolorproject.world/",
        label: "Live app",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/thecolorproject.world/",
        label: "GitHub (frontend)",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/thecolorproject.world-backend/",
        label: "GitHub (backend)",
      },
    ],
  },
  {
    id: 3,
    title: "Medport",
    featureImage: medport ? medport : placeholderImage,
    description: `A secure and locally-ran health management system. Contains a container for storing your medication and supplements. Calibrated sensors to track intake instances in real time and generate a log/ledger. Users can then export the data and streamline the communication with their healthcare providers (e.g. doctors, physicians, nutritionists, etc). 
    
    Integrated with a graphical user interface (GUI) for viewing medication log/ledger and contacting emergency services.

    Automated and Real-time logging. Privacy-first design. Effortless export and analytics. Convenient filtering options. Interactive log visualization. Local AI assistant trained using the person's biometric data. Emergency services integration.

    Developed using Arduino Mega 2560, Raspberry Pi Pico W, Ollama, Django, Next.js and many other IoT tools & frameworks 💖

    Winner (Silver Medal) 🥈 @ 2025 Toronto Science Fair
      `,
    links: [
      {
        icon: <FaGoogleDrive />,
        url: "https://drive.google.com/drive/folders/1slMnWFObjFdGeYCdAfj5KmmPZ_mEjSi_",
        label: "Photo Drive",
      },
    ],
  },
  {
    id: 4,
    title: "ClearSmile AI",
    featureImage: clearsmile ? clearsmile : placeholderImage,
    description: `ClearSmile AI is a computer vision system that automatically detects and removes dental braces from images using Mask R-CNN (Region-based Convolutional Neural Networks).

P.S. Made by Tom Zhang to solve his own insecurities of braces ruining his photos.  
`,
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/clearsmile-ai",
        label: "GitHub",
      },
    ],
  },
  {
    id: 123,
    title: "Omniwave Nexus",
    featureImage: omniwave ? omniwave : placeholderImage,
    description: `A comprehensive speech-planning platform designed for debaters, Model UN delegates, and public speakers. I created Omniwave Nexus by drawing on my experiences competing at Model UN conferences across Canada, where I earned recognition at both provincial and national levels. This project addresses the challenges I encountered as a delegate and speaker, offering intuitive tools to streamline speech planning and organizing subtle components such as antics, humor, eye contact, pauses, or other speech blocks. 

    FREE to use for everyone!
    `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://omniwave-nexus.vercel.app/",
        label: "Free Web Version",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/omniwave_nexus",
        label: "GitHub",
      },
    ],
  },
  {
    id: 5,
    title: "PlaneBrain",
    featureImage: planebrain ? planebrain : placeholderImage,
    description: `A win-win project: built for my epic brother Eric (an aviation geek), and for myself to dive deeper into the world of flight and space exploration while honing development skills.  

  Cultivating future aviation and space pioneers! 🚀  
  Fun, fast-paced quizzes. Curated questions across aviation and space domains. Progress tracking and learning reinforcement. Designed with passion and family in mind.  

  Developed with web technologies, structured data for quizzes, AWS S3 for efficiently delivering media files, and a focus on interactivity and knowledge-building.
  `,
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/MightyTMZ/planebrain", // replace with your repo if public
        label: "GitHub",
      },
    ],
  },

  {
    id: 6,
    title: "Sentinel Safeguard Network",
    featureImage: ssn ? ssn : placeholderImage,
    description: `Innovative neighborhood security solution that to enhance community safety using cutting-edge Internet of Things (IoT) technology and scalable cloud infrastructure. This project integrates security cameras, motion detectors, alarms, and sensors to monitor and detect suspicious activities in real-time. Data collected from these devices is processed with advanced AI models to identify potential threats, such as firearms or masked burglars. 
     
    Features a user communication platform that enables residents and law enforcement to share information instantly, creating a robust web of interconnected devices and a vigilant community. 
    
    Winner (Bronze Medal) 🥉 @ 2024 Toronto Science Fair 
    `,
    links: [],
  },
  {
    id: 7,
    title: "desync.fi",
    featureImage: desync ? desync : placeholderImage,
    description: `deSync is a zero-interest lending protocol built on Scroll that unlocks lucrative yield for lenders while allowing borrowers to borrow at 0% interest.

      It provides a crypto-native, scalable solution for yield generation achieved by delta-hedging Bitcoin, Ethereum and USDC spot assets using perpetual futures contracts.

      Democratizing loans for all - Using delta neutral strategies to offer zero-interest loans while providing the best yield to lenders
      
      Winner (1st place: DeFi Track) @ Scroll Open 📜
      `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://desync.fi/",
        label: "Live Site",
      },
      {
        icon: <FaTwitter />,
        url: "https://x.com/Scroll_ZKP/status/1904284853161357733?t=rrtNkKFjZxtOSi9X6UsY1w&s=19",
        label: "Twitter (X)",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/deSyncLabs/scroll-open",
        label: "GitHub",
      },
      {
        icon: <FaVideo />,
        url: "https://drive.google.com/file/d/1Go4Ipu9FKrf-RKM37g1tqoAPZXLGQhaf/view?usp=drive_link",
        label: "Demo Video",
      },
    ],
  },
  {
    id: 8,
    title: "The Nift of the Web",
    featureImage: nift_of_the_web ? nift_of_the_web : placeholderImage,
    description: `Master full-stack development across web and mobile platforms with AI integration. Access comprehensive resources and practical guides.

    Initiative with Columbia University providing STEM department students the essential and high-quality cheatsheets and resources. 

    At the heart of this initiative, we believe that every student entering the workforce should be an architect of technology rather than just a coder focused on small fragments of code. With AI taking over routine coding tasks, the focus will shift toward understanding the bigger picture and mastering debugging.
    `,
    links: [],
  },
  // {
  //   id: 13,
  //   title: "PreStreet",
  //   featureImage: prestreet ? prestreet : placeholderImage,
  //   description: `Where Big Ideas Become Child's Play

  //   Think of it like the Wall Street Journal (WSJ), Business Insider, or Fortune Magazine for young children.

  //   Currently working with youth commissions and councils in my community to bring this project to as many people as possible 💖
  //     `,
  //   links: [
  //     {
  //       icon: <FaGlobe />,
  //       url: "https://prestreet.vercel.app/",
  //       label: "Live Site",
  //     },

  //   ],
  // },
  {
    id: 9,
    title: "Automatic Humidifier",
    featureImage: ah ? ah : placeholderImage,
    description: `
    Created an automatic humidifier using a ESP8266, DHT11 sensor, relay module. 
    Turns on and off dynamically if humidity falls below 70%
    `,
    links: [],
  },
  {
    id: 10,
    title: "Earl Haig Science Society",
    featureImage: scisoc ? scisoc : placeholderImage,
    description: `
      Earl Haig Science Society is part of the largest public high school in Ontario and is the central hub for STEM opportunities, labs, and contest. Personally, I lead the engineering department which hosts weekly workshops, talks to staff/students/teachers to solve problems around the school, and most importantly created the website that gives over 330 students (roughly 16% of our entire school's student body) with equal access to information.
      
      Added interactive event modals and integrations with Google Calendar API, Outlook Calendar API, and more to make scheduling events for members easier than ever!
      `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://earlhaigsciencesociety.com/",
        label: "Live Site",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Ollama Guidebook (in progress)",
  //   featureImage: ollama ? ollama : placeholderImage,
  //   description: `A comprehensive guidebook to Ollama, covering tools and integrations for seamless AI workflows.

  //     Publisher: Packt`,
  //   links: [
  //     {
  //       icon: <FaExternalLinkAlt />,
  //       url: "https://www.packtpub.com/",
  //       label: "Read More",
  //     },
  //   ],
  // },
  {
    id: 11,
    title: "Personal Website",
    featureImage: personalWeb ? personalWeb : placeholderImage,
    description: `You are viewing this project right now! It showcases my works (projects, prototypes, experiments, integrations) along with my mission statement, favourite quotes, etc. 
    `,
    links: [
      { icon: <FaGlobe />, url: "https://tomzhang.info/", label: "Live Site" },
    ],
  },

  // On mobile, performance: 93; accessibility: 87; best practices: 100; SEO: 100;
  //     On desktop, performance: 100; accessibilityL 87; best practices: 100; SEO: 100;
  // {
  //   id: 5,
  //   title: "Tom Zhang 2.0",
  //   featureImage: placeholderImage,
  //   description: `
  //     An interactive AI clone designed to streamline communication with me, helping over 5,000 users effortlessly draft proposals and emails aligned with my style. Beyond simplifying engagement, it serves as the first prototype of an OrbitView AI agent, empowering users to learn valuable skills like AI, machine learning, and more.
  //     `,
  //   links: [
  //     {
  //       icon: <FaVideo />,
  //       url: "https://drive.google.com/file/d/1qUQTg9CwieKWmZOV9D33TU6MTG1X-ldO/view?usp=sharing",
  //       label: "Demo Video",
  //     },
  //   ],
  // },
  {
    id: 12,
    title: "Azure Partners",
    featureImage: azure_partners ? azure_partners : placeholderImage,
    description: `Created a website that has multilingual support for both English-speaking and Chinese-speaking vistors of Azure Partners. 

    Helped the CEO present company information to top companies like ByteDance and Google to secure partnerships and investments. 
    
    Being the founding engineer, programming the site using Next.js was very fun!
    `, // by over 67% and search engine visibility by over 300%
    links: [
      {
        icon: <FaGlobe />,
        url: "https://azure-partners.vercel.app/",
        label: "Live Site",
      },
    ],
  },
];

export const protoTypes_Experiments = [
  // {
  //   id: 1,
  //   title: "OrbitView Immersive Reader (failed)",
  //   featureImage: orbImmersive ? orbImmersive : placeholderImage,
  //   description: `Attempted to increase media consumption engagement through the use of customization tools and filters.
  //     Supports: stereoscopic filters, contrast toggle, font size adjustments, contrast adjustments,
  //     `,
  //   links: [
  //     {
  //       icon: <FaExternalLinkAlt />,
  //       url: "https://orbitview.vercel.app/article/5/join-orbitview-today/immersive",
  //       label: "Read More",
  //     },
  //   ],
  // },
];

export const tools_Integrations = [
  // {
  //   id: 1,
  //   title: "Mr. Saleem.ai",
  //   featureImage: saleemai ? saleemai : placeholderImage,
  //   description: `I created a "ChatGPT" of my computer science teacher, Mr. Saleem, capturing his humor and teaching style. It quickly became a school sensation, with over 90 students now using it for coding help. This fun AI version of Mr. Saleem has become a go-to resource for students!`,
  //   links: [
  //     {
  //       icon: <FaGlobe />,
  //       url: "https://chatgpt.com/g/g-DLJ1ZKf5m-mr-saleem-ai",
  //       label: "Live Site",
  //     },
  //     {
  //       icon: <FaGithub />,
  //       url: "https://github.com/",
  //       label: "GitHub",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Personal Private Notekeeper Chatbot",
  //   featureImage: privateNotekeeper ? privateNotekeeper : placeholderImage,
  //   description: `
  //   A local AI that processes sensitive data entirely on your device, ensuring privacy
  //    and security. By utilizing Ollama and ChromaDB, this system supports a variety of
  //    file types (PDFs, MP3s, DOCX, Excel, etc.) and allows for secure data querying and
  //    processing without the need for cloud storage. It empowers users to upload, preprocess,
  //    and interact with their data locally, ensuring sensitive information remains confidential.
  //    All in all, this project is a very transferable use case both at the personal and entreprise scales.
  //   `,
  //   links: [
  //     {
  //       icon: <FaGithub />,
  //       url: "https://github.com/MightyTMZ/Private_AI_Notekeeper/blob/main/Personal_Private_Chatbot_using_Ollama.ipynb",
  //       label: "GitHub",
  //     },
  //   ],
  // },
];

export const currently_working_on = [
  {
    id: 1,
    title: "Corey (Your Brain Upgraded)",
    description: `Building a revolutionary product in the productivity / knowledge space (stealth)`,
    links: [],
  },
  {
    id: 2,
    title: "C.O.N.S.T.E.L.L.A.T.I.O.N",
    description: `(Computational Orbital Network for Scalable Telecommunications and Efficient Launch Logistics Architecture Through Integrated Orbit Networks) Space-based datacenter technology through a working thermal management prototype, an origami-inspired deployable satellite model, and economic analysis of specialized launch infrastructure for scaling orbital computing into a trillion-dollar industry.`,
    links: [],
  },
  {
    id: 3,
    title: "ZhangOS",
    description: `Building an operating system for Gen Z founders and ambitious students. 
    It is an AI-powered system that helps you grow faster, think deeper, and build better by uniting reflection, startup tools, personalized learning, and community into one immersive experience.`,
    links: [],
  },
  {
    id: 4,
    title: "Quantum Key Distribution (QKD) Simulation",
    description: `Building a simulator of the BB84 QKD protocol. 
    This will illustrate how quantum mechanics can secure military communications.`,
    links: [],
  },
  {
    id: 5,
    title: "NeuralClone",
    description: `Advanced computing device that uses neural data to train AI models, creating digital clones capable of autonomous tasks and real-time representation. It offers version control, personalization, and potential physical assistance. Revolutionizing productivity and accessibility by providing users with an extension of their consciousness.`,
    links: [],
  },
];

interface Image {
  src: StaticImageData | string;
  alt: string;
  caption: string;
  feature: boolean | false;
}

interface DesignProject {
  title: string;
  description: string;
  images: Image[];
  shuffleImages: boolean | false;
  shuffleInterval?: number;
}

export const design_portfolio: DesignProject[] = [
  {
    title: "Ollama handbook icons",
    description: "Designed for 'The Ollama Handbook' (Packt publisher)",
    shuffleImages: true,
    shuffleInterval: 2, // in seconds
    images: [
      {
        src: "/design-portfolio/ollama-icons/ollama_key_principle.png",
        alt: "Ollama Handbook 'Key Principle' icon",
        caption:
          "Key principle: a fundamental concept or takeaway that underpins the material being discussed.",
        feature: false,
      },
      {
        src: "/design-portfolio/ollama-icons/ollama_pro_tip.png",
        alt: "Ollama Handbook 'Pro Tip' icon",
        caption:
          "Pro Tip: Offers practical advice or a shortcut to help you work more efficiently or effectively.",
        feature: false,
      },
      {
        src: "/design-portfolio/ollama-icons/ollama_code_snippet.png",
        alt: "Ollama Handbook 'Code Snippet' icon",
        caption:
          "Code Snippet: A small, functional piece of code to illustrate a concept or help you apply what you've learned.",
        feature: false,
      },
      {
        src: "/design-portfolio/ollama-icons/ollama_case_study.png",
        alt: "Ollama Handbook 'Case Study' icon",
        caption:
          "Case Study: A real-world example that demonstrates the practical application of the concepts covered.",
        feature: false,
      },
      {
        src: "/design-portfolio/ollama-icons/ollama_inquiry.png",
        alt: "Ollama Handbook 'Inquiry or Quick Question' icon",
        caption:
          "Poses a thought-provoking question to encourage reflection or deepen your understanding.",
        feature: false,
      },
      {
        src: "/design-portfolio/ollama-icons/ollama_inquiry.png",
        alt: "Ollama Handbook 'Check Your Learning' icon",
        caption:
          "Check Your Learning: At the end of each chapter of section, this is an opportunity to review and reinforce key points through questions or exercises.",
        feature: false,
      },
    ],
  },
  {
    title: "3D Cash emoji",
    description: "Created using Fusion 360",
    shuffleImages: true,
    shuffleInterval: 2, // in seconds
    images: [
      {
        src: "/design-portfolio/3d-money/money1.png",
        alt: "Pic 1",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-money/money2.png",
        alt: "Pic 2",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-money/money3.png",
        alt: "Pic 3",
        caption: "",
        feature: false,
      },
    ],
  },
  {
    title: "3D Briefcase emoji",
    description: "Created using Fusion 360",
    shuffleImages: true,
    shuffleInterval: 2, // in seconds
    images: [
      {
        src: "/design-portfolio/3d-briefcase/briefcase1.png",
        alt: "Pic 1",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-briefcase/briefcase2.png",
        alt: "Pic 2",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-briefcase/briefcase3.png",
        alt: "Pic 3",
        caption: "",
        feature: false,
      },
    ],
  },
  {
    title: "3D Train emoji",
    description: "Created using Fusion 360",
    shuffleImages: true,
    shuffleInterval: 2, // in seconds
    images: [
      {
        src: "/design-portfolio/3d-train/train1.png",
        alt: "Pic 1",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-train/train2.png",
        alt: "Pic 2",
        caption: "",
        feature: false,
      },
      {
        src: "/design-portfolio/3d-train/train3.png",
        alt: "Pic 3",
        caption: "",
        feature: false,
      },
    ],
  },
];
// CapCut
// Adobe Premiere
//
