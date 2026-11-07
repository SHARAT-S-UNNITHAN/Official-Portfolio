import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "expense-sha",
    slug: "expense-sha-tracker-ml",
    title: "EXPENSE_SHA — Expense Tracker with ML Insights",
    tagline: "Intelligent spending analytics, category tracking, and predictive regression for personal financial clarity.",
    category: "Machine Learning",
    featured: true,
    status: "Completed",
    statusDescription: "Core functional application built and tested with real datasets and predictive algorithms.",
    overview:
      "EXPENSE_SHA is an intelligent personal finance and expense management application designed to help individuals record daily transactions, uncover spending patterns, and anticipate future monthly expenditures using machine learning.",
    problemStatement:
      "Most basic expense tracking apps only act as digital ledgers without helping users understand their behavioral financial trends or forecasting upcoming month-end liabilities before deficits happen.",
    solution:
      "Engineered a full-stack Python/Django web application backed by SQLite and scikit-learn Linear Regression. It models historical expenditure trends, automatically flags anomalous transactions, classifies category expenses, and outputs dynamic visual reports.",
    role: "Sole Software Engineer — Architecture, Backend Logic, ML Pipeline Integration, and UI Implementation.",
    technologies: ["Python", "Django", "SQLite", "Machine Learning", "Scikit-Learn", "Chart.js", "HTML5/CSS3"],
    features: [
      "Structured transaction entry with dynamic categories and payment modes",
      "Linear Regression-based predictive model forecasting next-cycle expenditure",
      "Real-time visual analytics breakdown (category shares, monthly trends)",
      "Anomaly detection alerting users to atypical or spike transactions",
      "Exportable financial summaries and customizable period filters",
      "Responsive, secure dashboard built on Django authentication and session management"
    ],
    metricsOrHighlights: [
      "Trained on historical expense vectors with regression forecasting",
      "Full CRUD lifecycle with ACID-compliant SQLite relational schemas",
      "Zero external runtime dependencies for core analytics calculation"
    ],
    githubUrl: "https://github.com/SHARAT-S-UNNITHAN",
    image: "/images/projects/expense-tracker.svg",
    accentColor: "#10b981",
  },
  {
    id: "academic-ecosystem",
    slug: "intelligent-academic-ecosystem",
    title: "Intelligent Academic Ecosystem",
    tagline: "An automated academic management concept exploring geofenced attendance and proactive student performance analytics.",
    category: "System Concept",
    featured: true,
    status: "Concept",
    statusDescription: "Architectural specification and prototype research phase completed.",
    overview:
      "An exploratory concept addressing administrative friction in educational institutions through intelligent geofenced attendance logging, automated compliance checks, and academic trend forecasting.",
    problemStatement:
      "Manual roll calls and disconnected LMS platforms consume lecture hours and produce lagging indicators of student disengagement, only noticed after examinations are compromised.",
    solution:
      "Formulated a cohesive system architecture incorporating geofencing validation, automated student attendance states, centralized course material access, and early-warning analytics for faculty.",
    role: "Lead Systems Architect & Conceptual Designer.",
    technologies: ["Python", "Django Architecture", "Geofencing APIs", "Relational DB Design", "Analytics Engine"],
    features: [
      "Geofenced location verification for accurate classroom presence recording",
      "Faculty administrative portal with batch student performance insights",
      "Automated attendance shortage threshold notifications",
      "Modular design for LMS and gradebook integration",
      "Privacy-first geolocation validation (no persistent background tracking)"
    ],
    metricsOrHighlights: [
      "Designed for multi-department college architectures",
      "Eliminates proxy attendance through bounded coordinate verification"
    ],
    githubUrl: "https://github.com/SHARAT-S-UNNITHAN",
    image: "/images/projects/academic-ecosystem.svg",
    accentColor: "#3b82f6",
  },
  {
    id: "smart-local-service",
    slug: "smart-local-service-provider-platform",
    title: "Smart Local Service Provider Platform",
    tagline: "A localized marketplace connecting homeowners with verified technicians and neighborhood service professionals.",
    category: "Platform",
    featured: true,
    status: "In Development",
    statusDescription: "Core database models and provider onboarding workflows currently being built.",
    overview:
      "A dual-sided service discovery platform designed for regional communities in Kerala and beyond, enabling customers to find reliable electricians, plumbers, appliance technicians, and home service providers with transparent reviews.",
    problemStatement:
      "Local service discovery in Tier-2 and Tier-3 towns is fragmented across word-of-mouth with no reliable verification, pricing clarity, or structured service histories.",
    solution:
      "Developing a structured Python/Django web application with separate customer and verified provider portals, service category taxonomies, review verification, and administrative audit dashboards.",
    role: "Full Stack Developer — Data modeling, Authentication, and Interface Design.",
    technologies: ["Python", "Django", "MySQL / SQLite", "Tailwind CSS", "JavaScript"],
    features: [
      "Dual user roles: Customer booking profile & Verified Service Provider profile",
      "Multi-category service catalog with localized search and filtering",
      "Provider administrative approval queue with identity verification",
      "Transparent customer rating, feedback, and service completion logs",
      "Operational control panel for dispute resolution and category curation"
    ],
    metricsOrHighlights: [
      "Optimized for low-bandwidth mobile devices common in regional areas",
      "Role-based permission architecture protecting customer contact info"
    ],
    githubUrl: "https://github.com/SHARAT-S-UNNITHAN",
    image: "/images/projects/local-service.svg",
    accentColor: "#f59e0b",
  },
  {
    id: "aether-os",
    slug: "aether-os-developer-interface",
    title: "AETHER OS — Intelligent Developer Workspace",
    tagline: "A conceptual next-generation productivity dashboard and AI-assisted code review interface.",
    category: "System Concept",
    featured: false,
    status: "Concept",
    statusDescription: "UX research, interface wireframes, and developer workflow design.",
    overview:
      "A conceptual developer cockpit combining multi-repository telemetry, automated code-smell analysis, and an intelligent context-aware review assistant designed to eliminate cognitive fatigue during code audits.",
    problemStatement:
      "Developers constantly switch between GitHub, terminal outputs, documentation tabs, and IDEs, fragmenting deep focus and slowing comprehensive code reviews.",
    solution:
      "Conceptualized a unified keyboard-centric command environment featuring deep dark editorial aesthetics, contextual diff summaries, and proactive code pattern analysis.",
    role: "Creative Technologist & Interface Architect.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "LLM APIs (Design)"],
    features: [
      "Unified multi-stream review canvas with inline syntax annotations",
      "Intelligent code-review assist suggestions highlighting complexity anomalies",
      "Keyboard-first command palette navigation (Cmd/Ctrl + K driven)",
      "High-contrast, low-distraction dark mode typography"
    ],
    metricsOrHighlights: [
      "Designed specifically for high-throughput engineering workflows",
      "Modular widget architecture for extensible telemetry"
    ],
    githubUrl: "https://github.com/SHARAT-S-UNNITHAN",
    image: "/images/projects/aether-os.svg",
    accentColor: "#8b5cf6",
  },
  {
    id: "client-solutions",
    slug: "freelance-client-business-solutions",
    title: "Freelance & Business Digital Systems",
    tagline: "Specialized business applications including gold-loan tracking systems, camera repair management, and custom business sites.",
    category: "Client Solution",
    featured: true,
    status: "Completed",
    statusDescription: "Engineered practical tools and management software for specialized commercial workflows.",
    overview:
      "A suite of custom software solutions developed to solve domain-specific business problems for local commercial operations — including customer intake, repair lifecycle tracking, and interest accounting workflows.",
    problemStatement:
      "Small-to-medium retail and service businesses often struggle with generic spreadsheet tracking, leading to lost customer tickets, manual error in interest calculations, and poor customer communication.",
    solution:
      "Engineered purpose-built web tools: a Camera Repair Shop Management portal to track intake diagnosis and repair milestones; a Gold-Loan tracking utility for accurate tenure, interest, and pledge recording; and modern business landing sites.",
    role: "Independent Freelance Software Developer.",
    technologies: ["Python", "Django", "SQLite / MySQL", "JavaScript", "Responsive HTML/CSS"],
    features: [
      "Camera Repair Intake: Device serial tracking, issue diagnostics, status updates, and invoicing",
      "Loan & Pledge Utility: Accurate tenure calculation, interest breakdowns, and redemption status",
      "Fast responsive business websites with mobile-first layouts and direct enquiry actions",
      "Secure local database backups and tamper-resistant transaction logs"
    ],
    metricsOrHighlights: [
      "Zero bloated dependencies — built for fast local execution and long-term stability",
      "Designed to replace error-prone manual paper registers"
    ],
    githubUrl: "https://github.com/SHARAT-S-UNNITHAN",
    image: "/images/projects/business-systems.svg",
    accentColor: "#06b6d4",
  },
];
