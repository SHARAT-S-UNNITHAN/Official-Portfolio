import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for backend logic, web interactivity, and scripting.",
    skills: [
      { name: "Python", proficiency: "Working Knowledge", note: "Primary language for backend, automation, and data logic" },
      { name: "JavaScript (ES6+)", proficiency: "Working Knowledge", note: "Modern DOM manipulation, async patterns, and client logic" },
      { name: "PHP", proficiency: "Familiar", note: "Server-side scripting and basic CMS mechanics" },
      { name: "HTML5", proficiency: "Working Knowledge", note: "Semantic structures, SEO best practices, and accessibility" },
      { name: "CSS3", proficiency: "Working Knowledge", note: "Flexbox, Grid, custom animations, and responsive media queries" },
    ],
  },
  {
    category: "Frameworks & Development",
    description: "Architectural tools and component systems used to build modern applications.",
    skills: [
      { name: "Django", proficiency: "Working Knowledge", note: "MTV architecture, ORM, authentication, and templating" },
      { name: "React", proficiency: "Learning", note: "Component lifecycles, hooks, and modern UI state management" },
      { name: "Responsive Web Design", proficiency: "Working Knowledge", note: "Mobile-first layouts across all screen viewports" },
      { name: "Tailwind CSS", proficiency: "Working Knowledge", note: "Utility-first modern styling and design token workflows" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational schema design, query structure, and persistent data storage.",
    skills: [
      { name: "MySQL", proficiency: "Working Knowledge", note: "Relational table schemas, foreign keys, and structured queries" },
      { name: "SQLite", proficiency: "Working Knowledge", note: "Lightweight transactional databases embedded in applications" },
      { name: "Database Design", proficiency: "Working Knowledge", note: "Entity-relationship modeling and normalization" },
    ],
  },
  {
    category: "Developer Tools & Environment",
    description: "Daily engineering workflow tools for version control, coding, and design.",
    skills: [
      { name: "Git", proficiency: "Working Knowledge", note: "Branching, committing, merge workflows, and history tracking" },
      { name: "GitHub", proficiency: "Working Knowledge", note: "Repository hosting, release tags, and collaborative workflows" },
      { name: "Visual Studio Code", proficiency: "Working Knowledge", note: "Primary development IDE, debugging, and extensions" },
      { name: "Figma", proficiency: "Familiar", note: "Inspecting UI designs, layout wireframing, and component specs" },
    ],
  },
  {
    category: "Engineering Concepts & Methodologies",
    description: "Foundational software engineering principles and emerging technologies.",
    skills: [
      { name: "Machine Learning Fundamentals", proficiency: "Familiar", note: "Supervised regression, classification, and scikit-learn basics" },
      { name: "Software Engineering", proficiency: "Working Knowledge", note: "SDLC principles, modular code, and clean code architecture" },
      { name: "UI/UX Fundamentals", proficiency: "Working Knowledge", note: "Visual hierarchy, typography, contrast, and user workflows" },
      { name: "RESTful Principles", proficiency: "Familiar", note: "HTTP verbs, JSON payload formats, and endpoint integration" },
    ],
  },
];
