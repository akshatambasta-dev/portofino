export interface Milestone {
  id: string;
  type: 'award' | 'leadership' | 'teaching';
  date: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  badge: string;
  badgeColor: string;
  relatedProject?: string;
}

export const milestones: Milestone[] = [
  {
    id: "ieee-eig-2026",
    type: "award",
    date: "August 2026",
    year: "2026",
    title: "First Place — Business Pitch Competition",
    organization: "IEEE Maharashtra Section Entrepreneurship & Innovation Group (EIG)",
    description:
      "Team recognized with First Place for pitch presentation and hardware-to-dashboard system architecture of VoltVision, an AI-powered household energy monitoring solution.",
    highlights: [
      "Secured 1st Place across section-wide innovative entrepreneurship entries",
      "Demonstrated edge sensing concept using PZEM-004T and ESP32",
      "Pitched value proposition addressing household appliance waste and electricity tariffs"
    ],
    badge: "1ST PLACE WINNER",
    badgeColor: "#52E6D2",
    relatedProject: "VoltVision"
  },
  {
    id: "head-student-council",
    type: "leadership",
    date: "Jun 2024 – Mar 2025",
    year: "2024 - 2025",
    title: "Head of Student Council",
    organization: "Kendriya Vidyalaya Jashpur",
    description:
      "Represented the entire student body and coordinated institutional initiatives between students, faculty, and school administration.",
    highlights: [
      "Led and organized a student council team of approximately 40 to 50 student representatives",
      "Coordinated school-wide daily assemblies, scientific exhibitions, and academic events",
      "Structured problem-solving feedback loops addressing student concerns with faculty"
    ],
    badge: "STUDENT GOVERNANCE",
    badgeColor: "#A6FF6B"
  },
  {
    id: "atl-instructor",
    type: "teaching",
    date: "Sep 2023 – Feb 2025",
    year: "2023 - 2025",
    title: "Student Instructor — Robotics & Innovation Lab",
    organization: "Atal Tinkering Lab (ATL), Kendriya Vidyalaya Jashpur",
    description:
      "Delivered hands-on technical instruction and mentored secondary students in physical electronics, firmware development, and rapid fabrication.",
    highlights: [
      "Conducted practical workshops on Arduino C++ programming, sensor interfaces, and breadboard prototyping",
      "Guided students in 3D printing, CAD basics, component soldering, and circuit safety",
      "Mentored student teams in transforming conceptual ideas into working robotic and IoT prototypes"
    ],
    badge: "STEM MENTORSHIP",
    badgeColor: "#52E6D2"
  },
  {
    id: "kvs-national-2024",
    type: "award",
    date: "April 2024",
    year: "2024",
    title: "Selected for KVS National Science Exhibition (RSBVP)",
    organization: "Kendriya Vidyalaya Sangathan (National Level)",
    description:
      "Selected to represent the entire region at the KVS National Science Exhibition following top regional honors for student engineering innovation.",
    highlights: [
      "Represented regional cohort at the prestigious national exhibition level",
      "Defended embedded engineering decisions and calibration methodologies before national evaluation panels"
    ],
    badge: "NATIONAL SELECTION",
    badgeColor: "#52E6D2",
    relatedProject: "Smart Plant Monitoring & Irrigation System"
  },
  {
    id: "carbon-regional-2024",
    type: "award",
    date: "2024",
    year: "2024",
    title: "Selected for Presentation — Carbon Emissions Tracker",
    organization: "KVS Regional Science Exhibition (RSBVP)",
    description:
      "Selected to present Python-based carbon calculation software utilizing state-wise electricity and transport emission factors.",
    highlights: [
      "Demonstrated empirical modeling of Indian regional electricity grid emission factors",
      "Highlighted localized data-driven approaches to climate awareness"
    ],
    badge: "REGIONAL SELECTION",
    badgeColor: "#A6FF6B",
    relatedProject: "Carbon Emissions Tracker"
  },
  {
    id: "kvs-regional-2023",
    type: "award",
    date: "December 2023",
    year: "2023",
    title: "Second Place — KVS Regional Science Exhibition (RSBVP)",
    organization: "Kendriya Vidyalaya Sangathan (Regional Level)",
    description:
      "Awarded Second Place for designing and demonstrating the Smart Plant Monitoring & Irrigation System using soil moisture sensors and Arduino control logic.",
    highlights: [
      "Won 2nd Place among competitive regional science entries",
      "Demonstrated functional closed-loop relay actuation and capacitive soil moisture sensing"
    ],
    badge: "2ND PLACE WINNER",
    badgeColor: "#52E6D2",
    relatedProject: "Smart Plant Monitoring & Irrigation System"
  }
];
