import {
  Code,
  Database,
  PenTool,
  Globe,
  Layout,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const RESUME_DATA = {
  personal: {
    name: "Aleksandra Gromek",
    title: "Web Developer",
    bio: "Web Developer with 4+ years of experience. I specialize in building high-converting landing pages (Next.js/React) and advanced email development, including personalization and custom SAREscript integrations. Winner of an internal AI Hackathon.",
    email: "web.agromek@gmail.com",
    phone: "512 060 076",
    location: "Żyrardów / Remote",
    github: "https://github.com/NymfaWeb",
    linkedin: "https://www.linkedin.com/in/aleksandragromek/",
    languages: ["Polish (Native)", "English (B2)"],
    hobbies: "Graphic design, Board games, drawing, cooking, world cultures",
  },
  skills: {
    frontend: [
      { name: "HTML4/5", icon: Globe },
      { name: "CSS3", icon: Layout },
      { name: "Sass", icon: Code },
      { name: "Tailwind CSS", icon: Code },
      { name: "Bootstrap", icon: Layout },
      { name: "JavaScript / TypeScript", icon: Code },
      { name: "React", icon: Code },
      { name: "Next.js", icon: Code },
    ],
    backend: [
      { name: "PHP", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
    ],
    tools: [
      { name: "Git", icon: Code },
      { name: "GitLab", icon: Code },
      { name: "Docker", icon: Server },
      { name: "WordPress", icon: Globe },
      { name: "Figma", icon: PenTool },
      { name: "Photoshop", icon: PenTool },
      { name: "Cursor", icon: Sparkles },
      { name: "Antigravity", icon: Sparkles },
    ],
  },
  experience: [
    {
      company: "DIGITREE GROUP S.A.",
      title: "Web Developer",
      date: "05.2025 - now",
      description: [
        "Independently architect and build high-converting landing pages for marketing campaigns using modern stacks (Next.js, Tailwind, Docker, WordPress).",
        "Implement complex newsletter subscription forms with full frontend and backend (PHP) validation.",
        "Develop custom email personalization and logic scripts using SAREscript.",
        "Conduct internal training sessions on email coding best practices for the team.",
        "Analyze technical requirements and mailings to deliver optimal solutions for clients.",
        "Code XML surveys and maintain GitLab repositories for version control.",
        "Participant – Internal AI Hackathon: Awarded first place in the Open Category for developing an AI-powered solution addressing a business challenge.",
      ],
      stats: ["500+ Email Templates", "10+ Landing Pages"],
      tags: ["HTML5", "CSS", "JavaScript", "PHP", "Tailwind", "Next.js", "Docker", "GitLab"],
    },
    {
      company: "DIGITREE GROUP S.A.",
      title: "Junior Web Developer",
      date: "01.2023 - 12.2023, 06.2024 - 04.2025",
      description: [
        "Expanded responsibilities to include JavaScript and PHP development for web projects.",
        "Participated in Agile workflows, consistently monitoring performance and reporting progress.",
        "Developed robust, responsive web elements and supported the core development team.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      company: "DIGITREE GROUP S.A.",
      title: "Junior e-mail Developer",
      date: "10.2021 - 12.2022",
      description: [
        "Specialized in developing and optimizing responsive HTML/CSS email templates for large-scale enterprise campaigns.",
        "Ensured cross-client compatibility and high deliverability standards across various email clients.",
      ],
      tags: ["HTML", "CSS"],
    },
    {
      company: "DIGITREE GROUP S.A.",
      title: "Intern",
      date: "08.2021 - 09.2021",
      description: [
        "Assisted the team in coding responsive emails for enterprise clients.",
        "Analyzed client activities and prepared initial performance reports.",
      ],
      tags: ["HTML", "CSS"],
    },
  ],
  education: [
    {
      institution: "Uczelnia Techniczno-Handlowa im Marzenny Chodkowskiej",
      degree: "Bachelor's Degree in Interior Design",
      date: "09.2017 - 03.2021",
    },
  ],
  projects: [
    {
      title: "Signature Creator",
      description: "Built a web app to automate the creation of standardized, brand-consistent email signatures with a real-time live preview.",
      tags: ["HTML", "CSS", "JS"],
      demoUrl: "https://mail-signature-creator.vercel.app/",
      githubUrl: "https://github.com/NymfaWeb/Mail-Signature-Creator",
    },
    {
      title: "Expense management system",
      description: "A web-based application for tracking personal and/or business expenses, allowing users to add, categorize, and analyze spending. The system provides an intuitive dashboard with filtering, monthly summaries, and visual insights to help users manage their finances more effectively.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
};
