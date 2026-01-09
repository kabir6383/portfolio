
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Sign Language Recognition",
    category: "AI & Python",
    description: "Developed a real-time system using Python and Machine Learning to translate hand gestures into text/speech. High accuracy for hearing impaired assistance.",
    icon: "fa-hands-asl-interpreting"
  },
  {
    title: "AI Energy Chatbot",
    category: "Python & ML",
    description: "Built an intelligent chatbot to analyze building energy data and suggest optimization strategies to reduce energy wastage.",
    icon: "fa-robot"
  },
  {
    title: "Smart Lock with Face ID",
    category: "Raspberry Pi & IoT",
    description: "Designed a biometric security system using Raspberry Pi and OpenCV. Automated door control logic based on real-time facial recognition.",
    icon: "fa-user-shield"
  },
  {
    title: "2D CNC Printer Prototype",
    category: "Embedded C",
    description: "Engineered a functional prototype for printing mini circuits, integrating electronics hardware with software control.",
    icon: "fa-print"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", icon: "fa-python", category: "Programming" },
  { name: "C#", icon: "fa-code", category: "Programming" },
  { name: "JavaScript", icon: "fa-js", category: "Programming" },
  { name: "ReactJS", icon: "fa-react", category: "Web" },
  { name: "Django", icon: "fa-leaf", category: "Web" },
  { name: "HVAC Design", icon: "fa-snowflake", category: "Engineering" },
  { name: "AutoCAD", icon: "fa-drafting-compass", category: "Engineering" },
  { name: "MATLAB", icon: "fa-square-root-alt", category: "Engineering" },
  { name: "Raspberry Pi", icon: "fa-microchip", category: "IoT" },
  { name: "Arduino", icon: "fa-bolt", category: "IoT" },
  { name: "Node.js", icon: "fa-node-js", category: "Learning" },
  { name: "Flutter", icon: "fa-mobile-alt", category: "Learning" },
  { name: "Flask", icon: "fa-pepper-hot", category: "Learning" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Bvisor",
    role: "HVAC Design Intern",
    date: "Present",
    description: "Specialized training in HVAC system design, heat load calculations, duct sizing, and interpreting architectural drawings for energy-efficient cooling."
  },
  {
    company: "DCW Limited",
    role: "Intern Trainee (Electrical)",
    date: "2024",
    description: "Hands-on experience in industrial electrical systems, maintenance workflows, routine inspections, and power distribution analysis."
  }
];
