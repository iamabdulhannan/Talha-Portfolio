export const profile = {
  name: "Talha Shahzad",
  role: "Senior Software Engineer",
  tagline: "Full-Stack .NET Engineer crafting scalable products with AI-augmented workflows.",
  location: "Lahore, Pakistan",
  email: "talhashahzad975@gmail.com",
  phone: "+92 323 7041793",
  whatsapp: "+92 329 5757737",
  linkedin: "https://linkedin.com/in/talha-bin-yahya",
  yearsExperience: "6+",
  summary:
    "Results-driven Full-Stack .NET Developer with 6+ years of experience building scalable, high-performance web applications across e-commerce, recreation management, and eSports. I integrate GitHub Copilot and LLM-assisted workflows to accelerate delivery, improve code quality, and reduce time-to-production — without compromising on standards.",
  longSummary:
    "My technical expertise spans ASP.NET Core, C#, Angular, React, and Microsoft Azure, with strong hands-on experience designing RESTful APIs, managing data architectures in SQL Server and Oracle, and maintaining robust CI/CD pipelines using Azure DevOps and Docker. I apply AI strategically across the development lifecycle — from intelligent code generation and automated testing to rapid prototyping and technical documentation — focusing on architecture decisions, business logic, and delivering client value.",
};

export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "5", label: "Enterprise Products" },
  { value: "4", label: "Countries Served" },
  { value: "24+", label: "Technologies" },
];

export const skillGroups = [
  {
    title: "Backend",
    items: [".NET Core", "C#", "ASP.NET Core", "Web API", "Entity Framework", "Dapper ORM"],
    accent: "accent",
  },
  {
    title: "Frontend",
    items: ["Angular", "React.js", "JavaScript", "jQuery", "AJAX", "Bootstrap", "CSS"],
    accent: "accent2",
  },
  {
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure DevOps", "Azure Functions", "Azure Service Bus", "Azure Key Vault", "Docker", "CI/CD"],
    accent: "violet",
  },
  {
    title: "Data",
    items: ["MS SQL Server", "PostgreSQL", "Oracle", "JSON"],
    accent: "accent",
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "Microservices", "CQRS Pattern", "Repository Pattern", "Unit of Work", "SOLID Principles"],
    accent: "accent2",
  },
  {
    title: "Practices",
    items: ["Agile / Scrum", "Code Reviews", "Unit Testing", "Integration Testing", "Pair Programming"],
    accent: "violet",
  },
];

export const allSkills = [
  ".NET Core", "C#", "ASP.NET Core", "Angular", "React.js", "TypeScript",
  "Azure", "Azure DevOps", "Azure Functions", "Docker", "SQL Server",
  "PostgreSQL", "Oracle", "Entity Framework", "Dapper", "Web API",
  "Microservices", "CQRS", "Clean Architecture", "SignalR", "JWT",
  "Stripe", "PayPal", "CI/CD", "Git", "Agile",
];

export type Experience = {
  company: string;
  client: string;
  location: string;
  role: string;
  period: string;
  product: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Contour Software",
    client: "Fusion Family",
    location: "Kitchener, Canada",
    role: "Senior Software Engineer",
    period: "Jun 2024 — Feb 2026",
    product: "FUSION",
    description:
      "Comprehensive recreation management platform that streamlines operations and optimizes facility use — from program registration to facility reservations and membership management.",
    highlights: [
      "Built a tailored registration flow for programs, courses, and classes capturing every required detail.",
      "Developed the POS interface accelerating sales, inventory monitoring, and accounting reports.",
      "Built RESTful APIs in ASP.NET Core, C#, SQL Server, Dapper ORM with query & system performance tuning.",
      "Integrated granular access control for facility entry, forgotten IDs, and automatic waiver compliance.",
      "Wrote unit & integration tests to maintain code quality and system stability.",
    ],
    stack: [".NET Core", "C#", "SQL Server", "Dapper", "Azure"],
  },
  {
    company: "Contour Software",
    client: "Trapeze Group",
    location: "Germany",
    role: "Software Engineer",
    period: "Aug 2023 — Jun 2024",
    product: "Transit Operations Management System (OMS)",
    description:
      "Managed bus routes, driver/staff shifts, time-off requests, rest times and leaves for transit authorities — improving efficiency and reliability of public transit operations.",
    highlights: [
      "Built RESTful APIs with ASP.NET Web API for scheduling, route assignments, and staff data.",
      "Developed responsive Angular interfaces enabling real-time transit operations monitoring.",
      "Containerized the application with Docker for consistency across environments.",
      "Integrated Azure DevOps for continuous integration and deployment.",
      "Collaborated cross-functionally to bridge ops center and field staff systems.",
    ],
    stack: [".NET Core", "C#", "Angular", "Docker", "Azure DevOps"],
  },
  {
    company: "i3RL Pvt Ltd",
    client: "itim Group plc",
    location: "London, UK",
    role: "Software Engineer",
    period: "Dec 2021 — Aug 2023",
    product: "The Retail Suite (TRS)",
    description:
      "Integration of multiple itim Technology Solutions products into a single end-to-end retail platform spanning supplier maintenance, stock, warehousing and replenishment.",
    highlights: [
      "Worked on supplier maintenance, stock, warehousing & replenishment in the Merchandising team.",
      "Transitioned into Full-Stack role with .NET Core + Angular for new features and performance optimization.",
      "Served as Technical Support Developer for legacy systems, resolving production issues.",
      "Collaborated with QA, BAs and support teams for timely delivery and system stability.",
    ],
    stack: [".NET Core", "Angular", "SQL Server", "Oracle"],
  },
  {
    company: "Codexters Pvt Ltd",
    client: "Influwurk",
    location: "Newcastle, UK",
    role: "Software Engineer",
    period: "Feb 2021 — Nov 2021",
    product: "Influwurk",
    description:
      "Influencer-brand collaboration platform letting creators connect with companies for campaigns — Search, Manage, Track and Pay Influencers under one solution.",
    highlights: [
      "Designed system architecture with a layered N-Tier approach and clean separation of concerns.",
      "Built secure RESTful APIs with ASP.NET Core, JWT auth and role-based access control.",
      "Integrated PayPal and YouTube, Facebook, TikTok, Instagram APIs for syncing influencer profiles.",
      "Implemented real-time messaging using SignalR.",
      "Transitioned to Full-Stack with .NET Core + React for new features.",
    ],
    stack: [".NET Core", "React", "SignalR", "JWT", "PayPal"],
  },
  {
    company: "Codexters Pvt Ltd",
    client: "A-P-A",
    location: "Manningtree, UK",
    role: "Software Engineer",
    period: "Aug 2019 — Jan 2021",
    product: "Automatic Door Spare Parts",
    description:
      "E-commerce platform selling automatic door spare parts from top UK manufacturers — custom backend, catalogue, sales, and checkout flows.",
    highlights: [
      "Developed fully customized backend for product catalogue, sales, orders and checkout.",
      "Integrated Stripe for secure payment processing.",
      "Implemented JWT-based authentication and modular architecture using the Repository Pattern.",
      "Developed modules for cart, discount management, tax calculations and custom pricing rules.",
    ],
    stack: [".NET Core", "Stripe", "SQL Server", "JWT"],
  },
];

export const education = {
  institution: "University of Education",
  degree: "BSc (Honours) in Information Technology",
  period: "Aug 2016 — Jun 2020",
};
