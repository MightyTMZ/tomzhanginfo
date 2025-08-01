import {
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
  FaVideo,
  FaTwitter,
  // FaFileArchive,
  FaGoogleDrive,
} from "react-icons/fa";
import placeholderImage from "../../public/placeholder.webp";
import orbitview from "./workPics/ov-new.png";
// import tokenzlabs from "./workPics/TokenZLabs.png";
import azure_partners from "./workPics/azure_partners.png";
// import saleemai from "./workPics/saleemai.png";
import scisoc from "./workPics/EarlHaigScienceSociety.png";
// import orbImmersive from "./workPics/orb_immersive.png";
// import ollama from "./workPics/ollama.png";
import personalWeb from "./workPics/personalweb.png";
// import privateNotekeeper from "./workPics/private_notekeeper.png";
import ssn from "./workPics/ssn.jpg";
import ah from "./workPics/ah.jpg";
import desync from "./workPics/desync.png";
import medport from "./workPics/medport.png";
import prestreet from "./workPics/prestreet.png"
import nift_of_the_web from "./workPics/nift_of_the_web.png"

export const coreProjects = [
  {
    id: 1,
    title: "OrbitView",
    featureImage: orbitview ? orbitview : placeholderImage,
    description: `Your "second brain" to help you recall your achievements, impact, projects and more. Saving you up to 80% of your time
    
    Paired with AI resume generation and interview chatbox.     
`,
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://www.orbitview.net/",
        label: "Details",
      },
    ],
  },
  {
    id: 12,
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
    id: 11,
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
    id: 14,
    title: "The Nift of the Web",
    featureImage: nift_of_the_web ? nift_of_the_web : placeholderImage,
    description: `Master full-stack development across web and mobile platforms with AI integration. Access comprehensive resources and practical guides.

    Initiative with Columbia University providing STEM department students the essential and high-quality cheatsheets and resources. 

    At the heart of this initiative, we believe that every student entering the workforce should be an architect of technology rather than just a coder focused on small fragments of code. With AI taking over routine coding tasks, the focus will shift toward understanding the bigger picture and mastering debugging.
    `,
    links: [],
  },
  {
    id: 13,
    title: "PreStreet",
    featureImage: prestreet ? prestreet : placeholderImage,
    description: `Where Big Ideas Become Child's Play

    Think of it like the Wall Street Journal (WSJ), Business Insider, or Fortune Magazine for young children.

    Currently working with youth commissions and councils in my community to bring this project to as many people as possible 💖
      `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://prestreet.vercel.app/",
        label: "Live Site",
      },
    
    ],
  },
  {
    id: 7,
    title: "Automatic Humidifier",
    featureImage: ah ? ah : placeholderImage,
    description: `
    Created an automatic humidifier using a ESP8266, DHT11 sensor, relay module. 
    Turns on and off dynamically if humidity falls below 70%
    `,
    links: [],
  },
  {
    id: 2,
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
    id: 4,
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
    id: 6,
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
