import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    shortDesc: "Fast, modern, and responsive websites tailored for businesses and professionals.",
    description:
      "Crafting high-performance, mobile-responsive websites that establish strong credibility, load instantly, and turn casual visitors into active clients. Every site is built with modern web standards and clean semantic markup.",
    iconName: "Globe",
    deliverables: [
      "Custom Business Websites & Portfolios",
      "Conversion-focused Landing Pages",
      "Mobile & Tablet Responsive Layouts",
      "Complete Website Redesign & Modernization",
      "SEO-friendly Semantic Architecture"
    ],
    relevantProjects: ["Client Business Sites", "Official Portfolio", "Regional Commercial Portals"],
    badge: "Core Service",
  },
  {
    id: "web-application-development",
    number: "02",
    title: "Web Application Development",
    shortDesc: "Custom web software, management tools, and database-driven business platforms.",
    description:
      "Building tailored web applications designed around your specific operating workflow. From interactive internal tools to client-facing booking and tracking systems, built with robust architectures.",
    iconName: "LayoutGrid",
    deliverables: [
      "Custom Web Applications & Admin Dashboards",
      "Relational Database-Driven Systems",
      "Secure Role-Based User Access & Auth",
      "Interactive Data Entry & Workflow Portals",
      "RESTful API Integration & Client Interfaces"
    ],
    relevantProjects: ["Camera Repair Management", "Expense Tracker ML", "Smart Local Services"],
    badge: "Specialized",
  },
  {
    id: "python-django-development",
    number: "03",
    title: "Python & Django Development",
    shortDesc: "Robust backend engineering, automated logic, and secure database solutions.",
    description:
      "Leveraging the speed, security, and scalability of Python and Django to engineer reliable backend systems. Perfect for database-heavy platforms, business calculations, and automated report generation.",
    iconName: "Code2",
    deliverables: [
      "Full-stack Django Architecture & Views",
      "Complete CRUD Data Lifecycles",
      "Database Integration (MySQL / SQLite / PostgreSQL)",
      "Automated Business Data Calculations & Reporting",
      "Secure Session & Authentication Management"
    ],
    relevantProjects: ["EXPENSE_SHA", "Gold-Loan Tracking System", "Service Provider Platform"],
    badge: "Primary Backend",
  },
  {
    id: "business-digital-solutions",
    number: "04",
    title: "Business Digital Solutions",
    shortDesc: "Digitizing manual workflows, registers, and operations into reliable software.",
    description:
      "Eliminating the chaos of fragmented spreadsheets and physical notebooks by converting everyday business workflows into accessible digital systems that save hours of operational effort.",
    iconName: "Cpu",
    deliverables: [
      "Manual Register to Digital Transition",
      "Business Workflow Automation & Form Automation",
      "Operational Record-Keeping & Searchable Archives",
      "NFC & Digital Profile Integrations",
      "Practical Domain-Specific Utility Software"
    ],
    relevantProjects: ["Repair Status Tracking", "Interest & Tenure Calculator", "Supportta Solutions"],
    badge: "Practical Solutions",
  },
  {
    id: "website-maintenance",
    number: "05",
    title: "Website Maintenance & Upgrades",
    shortDesc: "Ongoing technical care, performance tuning, bug fixing, and user experience updates.",
    description:
      "Keeping your digital presence secure, fast, and up-to-date. Whether resolving broken scripts, enhancing mobile layout quirks, or adding fresh features to an existing site, I ensure continuous uptime and speed.",
    iconName: "Wrench",
    deliverables: [
      "Technical Bug Fixing & Code Refactoring",
      "Mobile Responsiveness & UI/UX Enhancements",
      "Page Speed & Performance Optimization",
      "Content & Asset Updates",
      "Ongoing Technical Support & Health Checks"
    ],
    relevantProjects: ["Business Website Audits", "Legacy Script Upgrades", "SEO Fixes"],
    badge: "Long-term Support",
  },
];
