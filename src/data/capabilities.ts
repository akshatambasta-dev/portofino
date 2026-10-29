export interface CapabilityNode {
  id: string;
  name: string;
  domain: 'ai-data' | 'software' | 'iot' | 'tools' | 'leadership';
  domainLabel: string;
  whatItDoes: string;
  whereUsed: string;
  relatedProjectId?: string;
  relatedProjectName?: string;
  tag: string;
}

export interface CapabilityGroup {
  id: 'ai-data' | 'software' | 'iot' | 'tools' | 'leadership';
  title: string;
  subtitle: string;
  code: string;
  color: string;
  nodes: CapabilityNode[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "ai-data",
    title: "AI & DATA SYSTEMS",
    subtitle: "Empirical modeling, data estimation pipelines, and AI fundamentals",
    code: "DOM-01",
    color: "#52E6D2",
    nodes: [
      {
        id: "python-data",
        name: "Python & Data Computation",
        domain: "ai-data",
        domainLabel: "AI & Data",
        whatItDoes: "Core language for data modeling, algorithmic calculations, file parsing, and backend logic.",
        whereUsed: "Calculated monthly carbon footprint metrics across regional factors, and built backend telemetry ingest.",
        relatedProjectId: "carbon-tracker",
        relatedProjectName: "Carbon Emissions Tracker",
        tag: "CORE LANGUAGE"
      },
      {
        id: "carbon-calc",
        name: "Carbon Emissions Calculations",
        domain: "ai-data",
        domainLabel: "AI & Data",
        whatItDoes: "Translates activity metrics (kWh, fuel, transit km) into carbon equivalent (kg CO2e) using grid coefficients.",
        whereUsed: "Formulated the mathematical conversion engine in Carbon Emissions Tracker.",
        relatedProjectId: "carbon-tracker",
        relatedProjectName: "Carbon Emissions Tracker",
        tag: "DATA MODELING"
      },
      {
        id: "ai-ml-fundamentals",
        name: "AI & ML Foundations",
        domain: "ai-data",
        domainLabel: "AI & Data",
        whatItDoes: "Formal study of machine learning architectures, statistical pattern recognition, and neural representations at SAII.",
        whereUsed: "Undergraduate curriculum at Symbiosis Centre for Applied AI; conceptualized NILM for VoltVision.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "ACADEMIC & RESEARCH"
      },
      {
        id: "telemetry-analysis",
        name: "Sensor Telemetry Analysis",
        domain: "ai-data",
        domainLabel: "AI & Data",
        whatItDoes: "Cleaning, aggregating, and smoothing real-time analog sensor signals to extract dependable trend indicators.",
        whereUsed: "Processed voltage, current, and soil moisture streams to prevent spurious threshold triggers.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "SIGNAL PROCESSING"
      }
    ]
  },
  {
    id: "software",
    title: "WEB & BACKEND ARCHITECTURE",
    subtitle: "Full-stack prototypes, local distributed state, and clean interfaces",
    code: "DOM-02",
    color: "#A6FF6B",
    nodes: [
      {
        id: "flask-backend",
        name: "Flask Framework",
        domain: "software",
        domainLabel: "Web & Backend",
        whatItDoes: "Lightweight Python micro-framework for building RESTful endpoints, request routing, and real-time game loops.",
        whereUsed: "Central state coordinator for DOOMSDAY PROTOCOL and backend ingest server for VoltVision.",
        relatedProjectId: "doomsday",
        relatedProjectName: "DOOMSDAY PROTOCOL",
        tag: "BACKEND"
      },
      {
        id: "sqlite-storage",
        name: "SQLite Database",
        domain: "software",
        domainLabel: "Web & Backend",
        whatItDoes: "Zero-configuration transactional SQL database engine ideal for edge prototypes and local applications.",
        whereUsed: "Stored event logs and player session timestamps in Doomsday, and energy readings in VoltVision.",
        relatedProjectId: "doomsday",
        relatedProjectName: "DOOMSDAY PROTOCOL",
        tag: "PERSISTENCE"
      },
      {
        id: "frontend-uiux",
        name: "HTML / CSS / JavaScript",
        domain: "software",
        domainLabel: "Web & Backend",
        whatItDoes: "Crafting structured DOM layouts, custom styling themes, responsive UI components, and dynamic client interactions.",
        whereUsed: "Designed terminal interfaces for Doomsday, dashboards for VoltVision, and animated File2Base landing page.",
        relatedProjectId: "file2base",
        relatedProjectName: "File2Base",
        tag: "FRONTEND"
      },
      {
        id: "lan-protocols",
        name: "Local Network Synchronization",
        domain: "software",
        domainLabel: "Web & Backend",
        whatItDoes: "Orchestrating state across multiple client terminals over local Wi-Fi/Ethernet without internet dependency.",
        whereUsed: "Maintained synchronous timed escape room phase unlocks in DOOMSDAY PROTOCOL.",
        relatedProjectId: "doomsday",
        relatedProjectName: "DOOMSDAY PROTOCOL",
        tag: "DISTRIBUTED"
      }
    ]
  },
  {
    id: "iot",
    title: "EMBEDDED SYSTEMS & IOT",
    subtitle: "Microcontrollers, physical sensors, high-voltage power sensing, and circuitry",
    code: "DOM-03",
    color: "#52E6D2",
    nodes: [
      {
        id: "esp32-sys",
        name: "ESP32 Microcontroller",
        domain: "iot",
        domainLabel: "Embedded & IoT",
        whatItDoes: "Dual-core 32-bit MCU with integrated Wi-Fi and Bluetooth, excellent for high-speed edge telemetry transmission.",
        whereUsed: "Primary microcontroller driving the VoltVision power monitoring node.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "MICROCONTROLLER"
      },
      {
        id: "arduino-sys",
        name: "Arduino Prototyping",
        domain: "iot",
        domainLabel: "Embedded & IoT",
        whatItDoes: "Rapid embedded C/C++ firmware development for direct pin control, analog sampling, and actuator timing.",
        whereUsed: "Programmed closed-loop irrigation controller and taught robotics workshops at Atal Tinkering Lab.",
        relatedProjectId: "smart-plant",
        relatedProjectName: "Smart Plant Monitoring",
        tag: "EMBEDDED FIRMWARE"
      },
      {
        id: "pzem-sensor",
        name: "PZEM-004T v3.0 Power Sensor",
        domain: "iot",
        domainLabel: "Embedded & IoT",
        whatItDoes: "Precision AC electrical sensor capturing true RMS voltage, current, active power, and frequency via UART.",
        whereUsed: "Implemented non-invasive AC branch load monitoring in the VoltVision hardware architecture.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "ELECTRICAL SENSING"
      },
      {
        id: "sensor-actuator",
        name: "Sensors & Actuator Integration",
        domain: "iot",
        domainLabel: "Embedded & IoT",
        whatItDoes: "Interfacing analog soil moisture sensors, DHT humidity/temperature probes, and 5V optocoupled relays.",
        whereUsed: "Engineered feedback loop triggering submersible pump in Smart Plant Monitoring system.",
        relatedProjectId: "smart-plant",
        relatedProjectName: "Smart Plant Monitoring",
        tag: "CIRCUIT CONTROL"
      },
      {
        id: "electronics-fab",
        name: "Soldering & Rapid Prototyping",
        domain: "iot",
        domainLabel: "Embedded & IoT",
        whatItDoes: "Physical circuit assembly, through-hole and wire soldering, breadboard prototyping, and 3D printing integration.",
        whereUsed: "Constructed test bench rigs and instructed students in hands-on hardware fabrication.",
        tag: "HARDWARE LAB"
      }
    ]
  },
  {
    id: "tools",
    title: "TOOLS & ENGINEERING WORKFLOW",
    subtitle: "Version control, hosting pipelines, documentation, and hardware toolchains",
    code: "DOM-04",
    color: "#A6FF6B",
    nodes: [
      {
        id: "git-github",
        name: "Git & GitHub",
        domain: "tools",
        domainLabel: "Tools",
        whatItDoes: "Distributed version control, branch management, issue tracking, and collaborative code development.",
        whereUsed: "Standard version control across File2Base, VoltVision, and personal software repositories.",
        tag: "VERSION CONTROL"
      },
      {
        id: "render-deploy",
        name: "Render Deployment",
        domain: "tools",
        domainLabel: "Tools",
        whatItDoes: "Cloud application hosting, web service deployment, environment variable management, and continuous builds.",
        whereUsed: "Explored and tested staging deployment pipelines for the File2Base prototype.",
        relatedProjectId: "file2base",
        relatedProjectName: "File2Base",
        tag: "CLOUD HOSTING"
      },
      {
        id: "arduino-ide",
        name: "Arduino IDE & Serial Debugging",
        domain: "tools",
        domainLabel: "Tools",
        whatItDoes: "Firmware compilation, board flash uploading, baud-rate serial stream inspection, and memory optimization.",
        whereUsed: "Embedded firmware toolchain for all Arduino and ESP32 project builds.",
        tag: "DEVELOPMENT TOOL"
      },
      {
        id: "pitch-doc",
        name: "Technical Documentation & Pitching",
        domain: "tools",
        domainLabel: "Tools",
        whatItDoes: "Translating technical architecture into concise business pitches, system block diagrams, and project briefs.",
        whereUsed: "Delivered winning business pitch for VoltVision at IEEE EIG 2026; scientific presentations at RSBVP.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "COMMUNICATION"
      }
    ]
  },
  {
    id: "leadership",
    title: "LEADERSHIP & TRANSMISSION",
    subtitle: "STEM mentorship, student governance, and technical workshop execution",
    code: "DOM-05",
    color: "#52E6D2",
    nodes: [
      {
        id: "atl-mentoring",
        name: "Atal Tinkering Lab Instruction",
        domain: "leadership",
        domainLabel: "Leadership",
        whatItDoes: "Designing and leading practical lab workshops on Arduino programming, robotics, 3D printing, and soldering.",
        whereUsed: "Instructed and guided students from Sep 2023 to Feb 2025 at Kendriya Vidyalaya Jashpur.",
        tag: "EDUCATION & MENTORSHIP"
      },
      {
        id: "student-council",
        name: "Student Council Governance",
        domain: "leadership",
        domainLabel: "Leadership",
        whatItDoes: "Directing student council operations, leading a 40–50 person student team, coordinating assemblies and events.",
        whereUsed: "Served as Head of Student Council at Kendriya Vidyalaya Jashpur (Jun 2024 – Mar 2025).",
        tag: "ORGANIZATIONAL LEADERSHIP"
      },
      {
        id: "collaborative-dev",
        name: "Engineering Teamwork",
        domain: "leadership",
        domainLabel: "Leadership",
        whatItDoes: "Cross-functional collaboration between hardware wiring, backend software, and pitch presentation workflows.",
        whereUsed: "Co-developed VoltVision within a multidisciplinary team to win IEEE section competition.",
        relatedProjectId: "voltvision",
        relatedProjectName: "VoltVision",
        tag: "TEAMWORK"
      }
    ]
  }
];
