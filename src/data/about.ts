import type { Experience } from "../types/about";
import type { Education } from "../types/about";
import type { Certificate } from "../types/about";
export const experiences: Experience[] = [
  {
    id: "army",
    role: "IT Officer (Frontend / Web Developer)",
    company: "Egyptian Army",
    period: "May 2024 – Apr 2026",
    points: [
      "Maintained and improved internal React.js web interfaces used in daily operations.",
      "Developed responsive UI components with modern React and CSS.",
      "Integrated RESTful APIs on the frontend, handling loading states, errors, and data display.",
      "Followed clean code practices and participated in team planning and reviews.",
    ],
  },
  {
    id: "smart",
    role: "Full Stack Developer Intern",
    company: "SMART Technological Solutions",
    period: "Oct 2022 – Apr 2023",
    points: [
      "Contributed to building a landing page and web features using React.js and Node.js.",
      "Built reusable UI components and implemented routing for smooth navigation.",
      "Applied Git-based workflows including branches, commits, and pull requests.",
      "Practiced API integration and improving responsiveness on the frontend.",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computer & Artificial Intelligence",
  institution: "El Mansoura University, Egypt",
  period: "Feb 2019 – Jul 2023",
  linkedIn: "https://linkedin.com/in/m-gabr",
};
export const certificates: Certificate[] = [
  {
    name: "Web Development Professional",
    provider: "Udacity",
    issuer: "Udacity",
    link: "www.linkedin.com/in/m-gabr",
  },
  {
    name: "Full Stack Web Developer Track",
    provider: "Udacity",
    issuer: "Udacity",
    link: "www.linkedin.com/in/m-gabr",
  },
  {
    name: "Data Analysis",
    provider: "Udacity",
    issuer: "Udacity",
    link: "www.linkedin.com/in/m-gabr",
  },
  {
    name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    provider: "Coursera",
    issuer: "The Hong Kong University of Science and Technology",
    link: "www.linkedin.com/in/m-gabr",
  },
];
