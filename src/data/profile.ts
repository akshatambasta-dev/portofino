export interface ProfileData {
  name: string;
  role: string;
  institution: string;
  institutionShort: string;
  location: string;
  headline: string;
  subheadline: string;
  philosophy: string;
  bioParagraphs: string[];
  statusMessage: string;
  systemVersion: string;
  coordinates: string;
  socials: {
    linkedin: {
      url: string;
      label: string;
      verified: boolean;
    };
    github: {
      url: string | null;
      placeholderText: string;
      label: string;
      verified: boolean;
    };
    email: {
      address: string | null;
      placeholderText: string;
      label: string;
      verified: boolean;
    };
  };
  pillars: {
    code: string;
    title: string;
    description: string;
    tag: string;
  }[];
}

export const profile: ProfileData = {
  name: "AKSHAT AMBASTA",
  role: "AI Student · Software Builder · Systems Explorer",
  institution: "Symbiosis Centre for Applied Artificial Intelligence (SAII), Symbiosis International University",
  institutionShort: "SCAAI, Symbiosis International University, Pune",
  location: "Pune, Maharashtra, India",
  headline: "I BUILD SYSTEMS THAT CONNECT INTELLIGENCE TO THE REAL WORLD.",
  subheadline:
    "B.Sc. Artificial Intelligence student exploring the continuum between software logic, telemetry data, and physical embedded hardware—translating real-world frictions into calibrated systems.",
  philosophy: "Ideas become useful when they become systems.",
  bioParagraphs: [
    "I am an early-career AI student and builder at the Symbiosis Centre for Applied Artificial Intelligence (SAII), Symbiosis International University in Pune. My technical focus lies at the intersection where code leaves the screen and interfaces with physical constraints.",
    "My hands-on work spans building hardware-to-cloud architectures, edge power monitoring systems, automated soil telemetry, carbon calculation pipelines, and multi-terminal networked protocols. I take problems apart at the architectural level, test assumptions with real prototypes, and structure the data flows.",
    "Beyond software and electronics, I spent over a year as an instructor at the Atal Tinkering Lab mentoring students in robotics, 3D printing, and Arduino systems, and served as Head of Student Council coordinating initiatives across student and administrative bodies."
  ],
  statusMessage: "SYSTEM READY // MONITORING ACTIVE",
  systemVersion: "SYS-2026.10-PROD",
  coordinates: "18.5204° N, 73.8567° E",
  socials: {
    linkedin: {
      url: "https://www.linkedin.com/in/akshat-ambasta-3aaaab41b/",
      label: "LinkedIn Profile",
      verified: true
    },
    github: {
      url: null,
      placeholderText: "[add GitHub URL]",
      label: "GitHub Profile",
      verified: false
    },
    email: {
      address: null,
      placeholderText: "[add email]",
      label: "Contact Email",
      verified: false
    }
  },
  pillars: [
    {
      code: "PIL-01",
      title: "INTELLIGENCE & DATA",
      description: "AI/ML fundamentals, empirical telemetry, carbon emission factor modeling, and turning noisy sensor streams into actionable signals.",
      tag: "CORE LOGIC"
    },
    {
      code: "PIL-02",
      title: "SOFTWARE ARCHITECTURE",
      description: "Flask backend pipelines, SQLite transactional persistence, responsive UI/UX, and deterministic multi-terminal state synchronization.",
      tag: "FULL STACK"
    },
    {
      code: "PIL-03",
      title: "PHYSICAL & EMBEDDED",
      description: "ESP32 & Arduino microcontrollers, PZEM-004T high-voltage power sensing, analog soil-moisture instrumentation, and circuit prototyping.",
      tag: "HARDWARE"
    },
    {
      code: "PIL-04",
      title: "TRANSMISSION & LEADERSHIP",
      description: "Robotics lab instruction, mentoring young builders, engineering workshop delivery, and student council governance.",
      tag: "COMMUNITY"
    }
  ]
};
