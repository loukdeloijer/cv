import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Louk de Loijer",
  initials: "L.H.R.",
  location: "Amsterdam, The Netherlands",
  locationLink: "https://www.google.com/maps/place/Amsterdam",
  about:
    "Data engineering consultant looking to transition into a ML engineering role.",
  summary: "We're in an era of fascinating AI advancements, and having studied data science puts me in the fortunate position to contribute to this. With one and a half years of experience as a data consultant, focusing on the practical applications of AI, my next goal is to immerse myself in AI development and work on the development of full-scale machine learning applications. Driven by my enthusiasm for Large Language Models, Retrieval-Augmented Generation, and AI Agents, I'm looking forward to pursue my curiosity further and continue my learning journey.",
  avatarUrl: "https://avatars.githubusercontent.com/u/59479119?s=400&u=798461131fd45bd5482b18f1661b1210d5febb25&v=4",
  contact: {
    email: "loukdeloijer@gmail.com",
    tel: "+31622010322",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/loukdeloijer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/louk-de-loijer/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Jheronimus Academy of Data Science",
      degree: "Data Science & Entrepreneurship",
      start: "2019",
      end: "2021",
      description: "Master Thesis awarded with an 8.0 and GPA of 7.6"
    },
    {
      school: "Tilburg University",
      degree: "Bachelors Degree in International Business Administration",
      start: "2015",
      end: "2019",
      description: "Master Thesis awarded with an 8.0"
    }
  ],
  work: [
    {
      company: "Deloitte Risk Advisory",
      link: "https://www2.deloitte.com/nl/nl/pages/risk/topics/data-and-responsible-insights.html?icid=nav2_data-and-responsible-insights",
      badges: [],
      title: "Consultant Responsible Data & Analytics",
      start: "2022",
      end: "Now ",
      description:
        "Within the Responsible Data & Analytics team I focus on data engineering and Generative AI mostly within the financial sector. On client projects I am responsible for performing analysis, developing scripts, stakeholder management, and client interviews and updates. Internally I have a leading role within the Generative AI team as AI developer."
    },
    {
      company: "Squadra Machine Learning Company",
      link: "https://machine-learning-company.nl/en/",
      badges: [],
      title: "Thesis Intern",
      start: "2021",
      end: "2022",
      description:
        "Thesis internship where I researched and finetuned zero-shot image and large language models such as CLIP and GPT-3 in generating product descriptions for e-commerce clients.",
    },
    {
      company: "Jads MKB Datalab",
      link: "https://www.jadsmkbdatalab.nl/",
      badges: [],
      title: "Freelance Data Consultant",
      start: "2021",
      end: "2022",
      description:
        "I developed a housing monitor dashboard for a province and guided SMEs in workshops to work more data-driven.",
    },
    {
      company: "Jacobs Douwe Egberts",
      link: "https://www.jacobsdouweegberts.com/",
      badges: [],
      title: "Finance Operations Intern",
      start: "2018",
      end: "2019",
      description: "6-month internship where I supported the Finance operations team with reporting and dashboarding.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Git",
    "Azure",
    "Powerpoint",
    "Langchain (Python)",
    "Chroma DB (Python)",
  ],
  projects: [
    {
      title: "Chat with PDF's",
      techStack: [
        "Deloitte",
        "Langchain",
        "Azure",
        "OpenAI",
        "Chroma"
      ],
      description: "Developed A Retrieval Augmented Generation system to connect LLM's to undisclosed documents.",
    },
    {
      title: "Data migration",
      techStack: ["Deloitte", "SQL", "Python", "Jinja"],
      description:
        "Developed a data migration pipeline moving 1500 crucial and sensitive database objects for a public organization."
    },
    {
      title: "Data lineage tool",
      techStack: ["Deloitte", "Python", "SQL", "Regex"],
      description:
        "Developed a data lineage tool to disentangle development and production database objects.",
    },
    {
      title: "Risk AI talent group",
      techStack: ["Deloitte", "Python"],
      description:
        "Developing AI proof-of-concepts within Deloitte Risk Advisory",
    },
    {
      title: "Finetuning gpt-3",
      techStack: ["Thesis", "Python", "OpenAI"],
      description:
        "Researched the effect of finetuning (then) state-of-the-art gpt-3 to generate product descriptions",
    },
    {
      title: "Churn Prediction",
      techStack: ["KPN", "Study project", "Python"],
      description: "Developed a churn prediction model for KPN in collaboration with Deloitte"
    },
    {
      title: "Editor",
      techStack: [
        "Extra-curricular",
        "Wordpress",
      ],
      description:
        "Editor at Faces online, a student run newsletter. Responsible for interviewing and writing articles on finance and technology topics.",
      link: {
        label: "faces-online.nl",
        href: "https://faces-online.nl/author/louk-de-loijer/",
      },
    },
    {
      title: "Treasurer",
      techStack: [
        "Extra-curricular", "Round 1"
      ],
      description:
        "Initial co-founder in brainstorming phase of round-one, a student VC. Quit to focus on study.",
      link: {
        label: "round one",
        href: "https://www.roundone.ventures/about",
      },
    }
  ],
} as const;
