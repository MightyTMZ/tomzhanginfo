import { FaGlobe, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeholderImage from "../../public/placeholder.webp";
import orbitview from "./workPics/OrbitView.png";
import tokenzlabs from "./workPics/TokenZLabs.png";
import chatbot_tzl from "./workPics/TokenZLabschatbot.png";
import saleemai from "./workPics/saleemai.png";
import scisoc from "./workPics/EarlHaigScienceSociety.png";
import orbImmersive from "./workPics/orb_immersive.png";
import ollama from "./workPics/ollama.png";
import personalWeb from "./workPics/personalweb.png";

export const coreProjects = [
  {
    id: 1,
    title: "OrbitView",
    featureImage: orbitview ? orbitview : placeholderImage,
    description: `OrbitView empowers professionals to create AI-powered versions of themselves,
       sharing their expertise effortlessly. By uploading files and training a 
       "free" or "paid" agent, they can generate passive income while learners
        gain personalized insights from trusted sources. 
        It's a simple, groundbreaking way to scale knowledge and connect authentically in a digital age.
        In addition, we provide immersive media consumption through customization tools.`,
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://orbitview.vercel.app/",
        label: "Details",
      },
    ],
  },
  {
    id: 2,
    title: "Token Z Labs",
    featureImage: tokenzlabs ? tokenzlabs : placeholderImage,
    description: `Token Z Labs, the world's first hybrid model platform combining 
      off-chain and on-chain solutions for capital markets and real estate. 
      Personally, I implemented SEO and refined the UI/UX and increased investor and user
      engagement`, // by over 67% and search engine visibility by over 300%
    links: [
      { icon: <FaGlobe />, url: "https://tokenzlabs.com/", label: "Live Site" },
    ],
  },

  {
    id: 3,
    title: "Earl Haig Science Society",
    featureImage: scisoc ? scisoc : placeholderImage,
    description: `
      Earl Haig Science Society is part of the largest public high school in Ontario and is the central hub
      for STEM opportunities, labs, and contest. Personally, I lead the engineering department which 
      hosts weekly workshops, talks to staff/students/teachers to solve problems around the school, and most
      importantly created the website that gives over 330 students (roughly 16% of our entire school's student body)
      with equal access to information.
      `,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://earlhaigsciencesociety.com/",
        label: "Live Site",
      },
    ],
  },
  {
    id: 4,
    title: "Ollama Guidebook (in progress)",
    featureImage: ollama ? ollama : placeholderImage,
    description:
      "A comprehensive guidebook to Ollama, covering tools and integrations for seamless AI workflows. Publisher: Packt",
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://www.packtpub.com/",
        label: "Read More",
      },
    ],
  },
  {
    id: 5,
    title: "Token Z Labs investor and customer support chatbot (in progress)",
    featureImage: chatbot_tzl ? chatbot_tzl : placeholderImage,
    description: `
      Many investors and customers do not fully understand the industry Token Z Labs operates in: real-world-asset
      tokenization and off/on-chain solutions for capital markets and real estate. I am creating this chatbot to 
      increase investor engagement and customer understanding by providing clear, concise explanations, answering 
      frequently asked questions, and showcasing the unique value propositions of Token Z Labs' offerings.
      `,
    links: [],
  },
  {
    id: 6,
    title: "Token Z Labs Wallet Login System (in progress)",
    featureImage: placeholderImage,
    description: `
      A secure, SEC-compliant wallet login leveraging multisignature or MPC
       technology to protect user assets and credentials. This system ensures 
       robust security, streamlined onboarding, and regulatory adherence, 
       enhancing trust and reliability for investors and customers. Collaboration
        with key stakeholders will align the solution with industry standards and
         strategic objectives.
      `,
    links: [],
  },
  {
    id: 7,
    title: "Personal Website",
    featureImage: personalWeb ? personalWeb : placeholderImage,
    description: `You are viewing this project right now! 
      It showcases my works (projects, prototypes, experiments, integrations) along with my
      mission statement, favourite quotes, etc. 
    `, // by over 67% and search engine visibility by over 300%
    links: [
      { icon: <FaGlobe />, url: "https://tomzhang.info/", label: "Live Site" },
    ],
  },
  {
    id: 8,
    title: "Tom Zhang 2.0",
    featureImage: placeholderImage,
    description: `
      An interactive AI clone designed to streamline communication on my personal
       website, helping over 5,000 users effortlessly draft proposals and 
       emails aligned with my style. Beyond simplifying engagement, it serves 
       as the first prototype of an OrbitView AI agent, empowering users to 
       learn valuable skills like AI, machine learning, and more.
      `,
    links: [],
  },
  {
    id: 9,
    title:
      "Credit Card Assistant (made using TensorFlow.js for privacy enhancement)",
    featureImage: placeholderImage,
    description: `
      An interactive AI clone designed to streamline communication on my personal
       website, helping over 5,000 users effortlessly draft proposals and 
       emails aligned with my style. Beyond simplifying engagement, it serves 
       as the first prototype of an OrbitView AI agent, empowering users to 
       learn valuable skills like AI, machine learning, and more.
      `,
    links: [],
  },
  {
    id: 10,
    title: "ElectroMorphology",
    featureImage: placeholderImage,
    description: `
      An interactive AI clone designed to streamline communication on my personal
       website, helping over 5,000 users effortlessly draft proposals and 
       emails aligned with my style. Beyond simplifying engagement, it serves 
       as the first prototype of an OrbitView AI agent, empowering users to 
       learn valuable skills like AI, machine learning, and more.
      `,
    links: [],
  },
  {
    id: 11,
    title: "Ultimate Frisbee improvement app for players and teams",
    featureImage: placeholderImage,
    description: `
      An interactive AI clone designed to streamline communication on my personal
       website, helping over 5,000 users effortlessly draft proposals and 
       emails aligned with my style. Beyond simplifying engagement, it serves 
       as the first prototype of an OrbitView AI agent, empowering users to 
       learn valuable skills like AI, machine learning, and more.
      `,
    links: [],
  },
];

export const protoTypes_Experiments = [
  {
    id: 1,
    title: "OrbitView Immersive Reader",
    featureImage: orbImmersive ? orbImmersive : placeholderImage,
    description: `Attempting to increase media consumption engagement through the use of customization tools and filters.
      Supports: stereoscopic filters, contrast toggle, font size adjustments, contrast adjustments, 
      `,
    links: [
      {
        icon: <FaExternalLinkAlt />,
        url: "https://orbitview.vercel.app/article/5/join-orbitview-today/immersive",
        label: "Read More",
      },
    ],
  },
  {
    id: 2,
    title: "OrbitView Agent Creation (in progress)",
    featureImage: placeholderImage,
    description: `A prototype enabling users to train AI agents that educate others, monetizing their expertise. 
      Admiring learners can pay for premium "paid agents" (e.g., Peter Thiel's AI) to access exclusive
       insights, while free agents provide foundational knowledge. Operating on a tiered subscription model, 
       the platform combines personalized AI learning with scalable earning opportunities.`,
    links: [],
  },
  {
    id: 3,
    title: "Haig Engineering Hub (HEH)",
    featureImage: placeholderImage,
    description: `A collaborative platform for Earl Haig students, providing access to essential tools, 
      resources, and knowledge to excel in engineering. It offers a central space for learning, 
      innovation, and project development, helping students connect, build, and grow within 
      the engineering field.`,
    links: [],
  },
  {
    id: 4,
    title: "Personal Knowledge Hub (Enhanced Privacy)",
    featureImage: placeholderImage,
    description: `A local, privacy-focused AI-powered knowledge hub that allows users to upload and
     query notes, PDFs, articles, and meeting summaries. This solution leverages Ollama to organize 
     data and answer questions contextually, offering a secure and efficient way to manage and 
     retrieve personal information.
`,
    links: [],
  },
  {
    id: 5,
    title: "Enterprise Customer Support Chatbot",
    featureImage: placeholderImage,
    description: `An AI-driven enterprise chatbot trained on FAQs, knowledge base articles, product manuals, 
    and customer interaction logs. Designed for seamless customer support, it provides instant, context-aware 
    responses while ensuring data privacy by running locally with Ollama's secure architecture.`,
    links: [],
  },
  {
    id: 6,
    title: "Agentic RAG with Ollama and LlamaIndex",
    featureImage: placeholderImage,
    description: `Solve the problem of managing and querying vast amounts of personal or enterprise data. 
    This project enables seamless integration of context-aware AI with private, locally 
    stored documents, providing precise answers and insights while ensuring data security.`,
    links: [
      // attach a demo video if applicable
    ],
  },
  {
    id: 7,
    title: "Expanding your vocabulary using generative AI",
    featureImage: placeholderImage,
    description: `Learning new words can be hard. Using generative AI allows for the use of the self-referencing principle in psychology. 
    Upon learning about new words, they can type a sentence that gets validated grammatically using our AI. This project was inspired when 
    I realized that there were no tools for me like this when I was studying for the SAT and learning many new words. (perhaps this tool can be
    sold to Google)
    `,
    links: [
      // attach a demo video if applicable
    ],
  },
];

export const tools_Integrations = [
  {
    id: 1,
    title: "Mr. Saleem.ai",
    featureImage: saleemai ? saleemai : placeholderImage,
    description: `I created a "ChatGPT" of my computer science teacher, Mr. Saleem, capturing his humor and teaching style. It quickly became a school sensation, with over 90 students now using it for coding help. This fun AI version of Mr. Saleem has become a go-to resource for students!`,
    links: [
      {
        icon: <FaGlobe />,
        url: "https://chatgpt.com/g/g-DLJ1ZKf5m-mr-saleem-ai",
        label: "Live Site",
      },
      {
        icon: <FaGithub />,
        url: "https://github.com/",
        label: "GitHub",
      },
    ],
  },
];
