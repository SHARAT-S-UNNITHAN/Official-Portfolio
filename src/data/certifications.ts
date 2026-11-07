import { CertificationItem } from "@/types";

export const certificationsData: CertificationItem[] = [
  {
    id: "google-python",
    title: "Google Python Certificate",
    issuer: "Google",
    issueDate: "Verified Curriculum",
    skillsAcquired: ["Python Syntax", "Data Structures", "Automation Scripts", "OOP Principles", "Error Handling"],
    summary:
      "Comprehensive certification covering foundational to intermediate Python programming, procedural execution, object-oriented concepts, and practical scripting for everyday automation.",
    verified: true,
  },
  {
    id: "ibm-software-engineering",
    title: "IBM Software Engineering Certificate",
    issuer: "IBM",
    issueDate: "Verified Curriculum",
    skillsAcquired: ["Software Architecture", "Agile Methodologies", "SDLC", "Git & GitHub", "Application Design"],
    summary:
      "Industry-aligned curriculum exploring professional software engineering workflows, requirement gathering, architectural design principles, clean code structure, and collaborative version control.",
    verified: true,
  },
  {
    id: "microsoft-os-security",
    title: "Microsoft Computers, Operating Systems and Security Certificate",
    issuer: "Microsoft",
    issueDate: "Verified Curriculum",
    skillsAcquired: ["Operating System Architecture", "System Security", "Access Control", "Networking Basics"],
    summary:
      "Core computing foundations encompassing operating system processes, memory management, foundational cybersecurity principles, authentication mechanisms, and network security protocols.",
    verified: true,
  },
];

