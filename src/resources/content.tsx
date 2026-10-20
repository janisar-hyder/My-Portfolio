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
  image: "/images/og/OG.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Full Stack Developer & Solution Engineer | React • Angular • Node.js • Python • Snowflake • AWS`,
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
        Full Stack Developer and Solution Engineer with 1+ years of experience building production
        web applications, data optimization tools, and automated workflows. Proficient in React.js,
        Next.js, Angular, Node.js, Express.js, Flask, and Python, with expertise in RESTful API
        development, Snowflake and DBT query optimization, n8n workflow automation, and cloud
        deployment on AWS. Delivered measurable results including 40% faster DBT transformations,
        35% lower Snowflake compute costs, and 5+ hours weekly saved for analytics teams through LLM
        integrations with GPT‑4o, Claude, and Google Gemini.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Infinytics.ai",
        timeframe: "Feb 2026 - Present",
        role: "Associate Solution Engineer (United States - Remote)",
        achievements: [
          <>Architected a Snowflake query optimization tool that analyzed warehouse usage patterns and reduced compute costs by 35% across 20+ production pipelines.</>,
          <>Engineered a DBT (Data Build Tool) optimization engine that profiled model dependencies and accelerated transformation runtimes by 40% on large-scale datasets.</>,
          <>Automated executive reporting and data enrichment using n8n workflows integrated with GPT-4o, Claude, and Gemini LLMs, saving the analytics team 5+ hours of manual work weekly.</>,
        ],
        images: [],
      },
      {
        company: "Tamezy",
        timeframe: "Mar 2026 - Jun 2026",
        role: "Full Stack Developer (Bahrain - Remote)",
        achievements: [
          <>Spearheaded development of a cloud-based ERP and financial accounting platform for GCC-region SMEs using Angular 17+ (Standalone Components, Signals), Node.js, Express.js, and Prisma ORM.</>,
          <>Built quote-to-cash and purchase processes spanning 8+ document types (Quotations, Invoices, Delivery Notes, Receipts, Credit/Debit Notes, Bills) with automated line-item totals and real-time inventory adjustments.</>,
          <>Implemented a GCC VAT compliance engine (10% VAT, zero-rated/exempt items, TRN validation) and audit-ready double-entry bookkeeping with Chart of Accounts, Journal Vouchers, JWT authentication, and Role-Based Access Control (RBAC).</>,
        ],
        images: [],
      },
      {
        company: "AsianSol",
        timeframe: "Jul 2024 - Oct 2024",
        role: "Full Stack Developer (Lahore, Pakistan)",
        achievements: [
          <>Designed a Single Sign-On (SSO) Admin Panel using Angular 15, Angular Material, and .NET 6 REST APIs, serving 500+ users across 3 departments.</>,
          <>Reduced administrative overhead by 40% by building automated workflows managing 200+ user accounts and 1,500+ task assignments.</>,
          <>Integrated 20+ RESTful APIs with a 4-member agile team, maintaining a 95% code approval rate and 85% unit test coverage.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "COMSATS University Islamabad",
        description: <>Bachelor's degree in Computer Science (Jan 2022 – Jan 2026)</>,
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
    {
      title: "Data, Automation & AI",
      description: (
        <>Optimizing data pipelines and automating workflows with LLM integrations</>
      ),
      tags: [
        {
          name: "Snowflake",
          icon: "database",
        },
        {
          name: "DBT",
          icon: "server",
        },
        {
          name: "n8n",
          icon: "rocket",
        },
        {
          name: "LLMs (GPT-4o, Claude, Gemini)",
          icon: "code",
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