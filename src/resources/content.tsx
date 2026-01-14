import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad",
  lastName: "Janisar",
  name: `Muhammad Janisar`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "imuhammadjanisar@gmail.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/janisar-hyder",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-janisar-091053371/",
    essential: true,
  },
  {
    name: "Portfolio",
    icon: "link",
    link: "https://janisaryder.netlify.app/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Full Stack Developer | React • Angular • Node.js • AWS • Supabase`,
 headline: (
  <>
    <span style={{ display: 'block' }}>Hi!</span>
    <span style={{ display: 'block' }}>I'm Muhammad Janisar,</span>
  </>
),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GitHub</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          View Contributions
        </Text>
      </Row>
    ),
    href: "https://github.com/janisar-hyder",
  },
  subline: (
    <>
      a full stack developer who enjoys building websites from start to finish. 
      Strong foundation in <Text as="span" size="xl" weight="strong">React</Text> and{" "}
      <Text as="span" size="xl" weight="strong">Angular</Text> for frontend, and{" "}
      <Text as="span" size="xl" weight="strong">Node.js</Text> and{" "}
      <Text as="span" size="xl" weight="strong">Python</Text> for backend.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Full Stack Developer specializing in modern web technologies`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Summary",
    description: (
      <>
        Full Stack Developer with hands‑on experience in building end‑to‑end web applications. 
        Specialized in creating responsive frontends with React/Angular and robust backends with 
        Node.js/Python. Proficient in implementing authentication systems, RESTful APIs, and 
        deploying applications on AWS and Supabase infrastructure.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Asian Solutions Pvt. Ltd.",
        timeframe: "July 2025 - October 2025",
        role: "Full Stack Developer Intern",
achievements: [
  <>As a Full Stack Developer Intern, I developed and maintained an Admin Panel for a Single Sign‑On (SSO) application with comprehensive user management features. I implemented secure authentication flows and integrated the UI with backend REST APIs to handle real‑world data and security requirements. Through optimization of database queries, I improved application performance by 40%. I actively collaborated with the development team using Git version control and followed Agile methodologies throughout the project lifecycle.</>,
],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "COMSATS University Islamabad",
        description: <>Bachelor's degree in Computer Science (Feb 2022 – Jan 2026)</>,
      },
    ],
  },
technical: {
  display: true,
  title: "Skills",
  skills: [
    {
      title: "Frontend Development",
      description: (
        <>Building responsive, modern user interfaces with component‑based architecture</>
      ),
      tags: [
        {
          name: "React",
          icon: "react",
        },
        {
            name: "Next.js",
            icon: "nextjs",
          },
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "HTML/CSS",
          icon: "html", // or use "code" if you prefer
        },
      ],

    },
    {
      title: "Backend Development",
      description: (
        <>Developing scalable server‑side applications and RESTful APIs</>
      ),
      tags: [
        {
          name: "Node.js",
          icon: "nodejs",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "Express.js",
          icon: "express",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
      ],

    },
    {
      title: "Cloud & DevOps",
      description: (
        <>Deploying and managing applications in cloud environments</>
      ),
      tags: [
        {
          name: "AWS",
          icon: "aws",
        },
        {
          name: "Supabase",
          icon: "supabase",
        },
        {
          name: "Docker",
          icon: "docker",
        },
        {
          name: "Git/GitHub",
          icon: "github",
        },
      ],
      
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Articles by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full‑stack projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Code Gallery – ${person.name}`,
  description: `Project screenshots and technical visuals`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "React Component Architecture",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Database Schema Design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "API Documentation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.png",
      alt: "Cloud Infrastructure",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.png",
      alt: "UI/UX Design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Dashboard Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Code Structure",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "System Architecture",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };