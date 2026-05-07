
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Smart Power Management System",
    category: "IoT, AI & Full-Stack",
    description: "A high-impact industrial solution integrating Hardware, Software, and AI to autonomously monitor and optimize building energy consumption through intelligent load shedding.",
    icon: "fa-bolt",
    extendedDetails: {
      overview: "Commercial energy optimization is redefined through the trifecta of custom hardware, full-stack software, and predictive AI. This system moves beyond simple monitoring to provide autonomous, data-driven load management for large-scale buildings.",
      technicalDeepDive: "The system integrates ESP32 microcontrollers and PZEM sensors with a robust AI engine that performs spectral load analysis. By ranking loads dynamically, the AI autonomously executes precision shedding during peak demands, all while streaming real-time telemetry to a MERN-stack dashboard via WebSockets.",
      skills: ["IoT Firmware (ESP32)", "MERN Stack", "AI & Machine Learning", "PCB Design", "Real-time Telemetry", "Autonomous Load Management"]
    }
  },
  {
    title: "ISLRS",
    category: "AI & Python",
    description: "Developed a real-time Indian Sign Language Recognition System using Python and Machine Learning to translate hand gestures into text/speech.",
    icon: "fa-hands-asl-interpreting",
    extendedDetails: {
      overview: "Communication barriers should never limit human potential. ISLRS is a dedicated platform designed to bridge the gap between the hearing-impaired community and the rest of the world through real-time translation.",
      technicalDeepDive: "The system utilizes Computer Vision and Deep Learning to track hand landmarks and classify gestures. The processed data is then converted into spoken text and displayed on a responsive web interface for seamless communication.",
      milestone: "This project was recognized as one of the Top 500 ideas in Tamil Nadu during the prestigious Niral Thiruvizha 3.0 competition, following an intensive Regional Bootcamp where we were selected from thousands of entries.",
      skills: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Machine Learning"]
    }
  },
  {
    title: "AI Energy Optimization Chatbot",
    category: "Python & Machine Learning",
    description: "An academic mini-project featuring an intelligent conversational agent trained on historical energy datasets to provide actionable efficiency tips and optimization strategies.",
    icon: "fa-robot",
    extendedDetails: {
      overview: "Data-driven sustainability starts with informed decision-making. This project demonstrates how machine learning can transform raw energy logs into intuitive, conversational insights for building efficiency.",
      technicalDeepDive: "Built using Python and NLP techniques, the chatbot was trained on pre-historical energy consumption datasets. It leverages pattern recognition to identify wastage trends and suggests context-aware optimization strategies to reduce a building's carbon footprint.",
      skills: ["Python", "Machine Learning", "NLP", "Data Analytics (Pandas/NumPy)", "Predictive Modeling"]
    }
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
    company: "CODEC Technologies",
    role: "MERN-STACK Developer Intern",
    date: "FEB-MAR 2026",
    description: "Actively developing and maintaining full-stack web applications using the MERN ecosystem. Focused on building responsive UI components, architecting RESTful APIs, and managing MongoDB databases."
  },
  {
    company: "Bvisor",
    role: "HVAC Design Intern",
    date: "NOV 2025-MAR 2026",
    description: "Specialized training in HVAC system design, heat load calculations, duct sizing, and interpreting architectural drawings for energy-efficient cooling."
  },

  {
    company: "DCW Limited",
    role: "Intern Trainee (Electrical)",
    date: "JUL-AUG 2025",
    description: "Hands-on experience in industrial electrical systems, maintenance workflows, routine inspections, and power distribution analysis."
  }
];
