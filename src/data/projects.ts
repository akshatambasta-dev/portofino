export interface ProjectCaseStudy {
  id: string;
  code: string;
  title: string;
  category: string;
  year: string;
  statusBadge: string;
  statusType: 'award' | 'prototype' | 'completed' | 'concept';
  shortDescription: string;
  headline: string;
  accentColor: string;
  problem: string;
  approach: string;
  systemArchitecture: {
    title: string;
    description: string;
    diagramType: 'voltvision' | 'file2base' | 'doomsday' | 'irrigation' | 'carbon';
    layers: {
      name: string;
      tech: string;
      role: string;
    }[];
  };
  hardwareSoftware: {
    hardware?: string[];
    software: string[];
    protocols?: string[];
  };
  statusTransparency: string;
  aiAspectNote?: string;
  recognition?: {
    award: string;
    event: string;
    date: string;
    level: string;
  }[];
  tags: string[];
  links: {
    githubUrl?: string | null;
    demoUrl?: string | null;
    pitchUrl?: string | null;
    hasLiveLink: boolean;
    placeholderNote?: string;
  };
}

export const projects: ProjectCaseStudy[] = [
  {
    id: "voltvision",
    code: "SYS-01",
    title: "VoltVision",
    category: "AI & IoT Energy Optimisation",
    year: "2026",
    statusBadge: "1st Place IEEE Pitch Winner · Prototype Validated",
    statusType: "award",
    headline: "Making household energy consumption visible, appliance-level, and actionable.",
    shortDescription:
      "An AI-powered household energy-optimization concept engineered to provide appliance-level power telemetry, eliminate parasitic standby waste, and inform smarter consumption decisions.",
    accentColor: "#52E6D2",
    problem:
      "Conventional electricity meters only display cumulative kilowatt-hours at the end of the billing cycle. Homeowners have zero visibility into individual appliance draws, continuous standby waste (phantom loads), or peak-tariff consumption spikes until the utility bill arrives.",
    approach:
      "Constructed a hardware-to-dashboard pipeline combining precision non-invasive edge electrical sensing with a local-to-cloud telemetry stack. Raw AC measurements are captured at the branch level, streamed via micro-controllers to a Flask server, and converted into readable consumption curves.",
    systemArchitecture: {
      title: "Edge-to-Dashboard Telemetry Flow",
      description: "Hardware telemetry stream passing through PZEM sensor to ESP32, processed via Python/Flask into SQLite and rendered to responsive dashboard.",
      diagramType: "voltvision",
      layers: [
        {
          name: "Sensing Layer",
          tech: "PZEM-004T v3.0 Sensor",
          role: "Captures true AC voltage, current, active power, frequency, and cumulative energy consumption."
        },
        {
          name: "Edge Processing",
          tech: "ESP32 Microcontroller",
          role: "Reads telemetry via UART TTL serial interface, buffers metrics, and transmits JSON payloads over Wi-Fi."
        },
        {
          name: "Backend Gateway",
          tech: "Python & Flask API",
          role: "Ingests sensor telemetry streams, enforces validation schemas, and computes consumption rolling averages."
        },
        {
          name: "Storage & Persistence",
          tech: "SQLite Database",
          role: "Time-series table logging timestamps, current, voltage, and instantaneous wattage for trend queries."
        },
        {
          name: "Interface",
          tech: "HTML5, CSS3, JavaScript",
          role: "Interactive client dashboard visualizing appliance profiles, load curves, and real-time wattage."
        }
      ]
    },
    hardwareSoftware: {
      hardware: ["ESP32 Microcontroller", "PZEM-004T v3.0 AC Power Meter", "CT Clamp Current Sensor", "Power Supply Module"],
      software: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
      protocols: ["UART TTL", "HTTP REST / JSON", "Wi-Fi 802.11 b/g/n"]
    },
    statusTransparency:
      "Hardware-to-dashboard architecture and physical telemetry prototypes were fully tested and presented. High-level AI energy disaggregation and predictive tariff recommendations are documented as proposed architectural extensions currently being developed.",
    aiAspectNote:
      "Proposed AI Extension: Investigating Non-Intrusive Load Monitoring (NILM) algorithms to identify distinct harmonic electrical signatures of domestic appliances from single-point current draws.",
    recognition: [
      {
        award: "First Place Winner",
        event: "IEEE Maharashtra Section Entrepreneurship & Innovation Group (EIG) Business Pitch Competition",
        date: "August 2026",
        level: "Section-Wide Team Recognition"
      }
    ],
    tags: ["IoT & Hardware", "ESP32", "PZEM-004T", "Python/Flask", "Energy Telemetry", "SQLite"],
    links: {
      githubUrl: null,
      demoUrl: null,
      pitchUrl: null,
      hasLiveLink: false,
      placeholderNote: "Hardware repository and demonstration telemetry dashboard available upon request."
    }
  },
  {
    id: "file2base",
    code: "SYS-02",
    title: "File2Base",
    category: "Workflow & Data Transformation",
    year: "In Active Refinement",
    statusBadge: "Early-Stage Prototype · In Development",
    statusType: "prototype",
    headline: "Transforming messy small-business spreadsheets and files into queryable relational databases.",
    shortDescription:
      "A product concept and active prototype designed to help small businesses graduate from fragmented file records into structured, queryable relational databases.",
    accentColor: "#A6FF6B",
    problem:
      "Micro and small businesses routinely run critical inventory, invoicing, and customer records on disconnected spreadsheets, loose CSVs, and text logs. As data grows, file-based methods collapse: version drift occurs, concurrent updates break, and running complex queries is impossible.",
    approach:
      "Designing a clean transitional pipeline that accepts raw tabular files, validates fields, detects data types, maps relationships, and provisions clean SQLite/Postgres schemas without requiring small-business operators to write SQL code.",
    systemArchitecture: {
      title: "File-to-Schema Ingestion Engine",
      description: "User file uploads pass through client-side preview, schema inference engine, validation gates, and SQL generation.",
      diagramType: "file2base",
      layers: [
        {
          name: "Upload & Landing UI",
          tech: "Responsive Frontend",
          role: "Landing page experience with interactive visual transitions, file drag-and-drop, and schema preview."
        },
        {
          name: "Parsing Engine",
          tech: "Python File Parsers",
          role: "Reads multi-format tabular data (CSV, Excel), normalizes encodings, and flags null or corrupted rows."
        },
        {
          name: "Schema Generation",
          tech: "Relational Modeling",
          role: "Infers column types (INTEGER, TEXT, DATE, REAL), detects primary keys, and drafts relational tables."
        },
        {
          name: "Deployment Pipeline",
          tech: "Render Exploration & Git",
          role: "Version-controlled development maintained on GitHub with automated cloud hosting experiments on Render."
        }
      ]
    },
    hardwareSoftware: {
      software: ["Python", "Flask/FastAPI Prototype", "HTML5/CSS3", "JavaScript", "SQLite", "Render Hosting", "Git/GitHub"]
    },
    statusTransparency:
      "This is an early-stage product concept and software prototype in active development. Animated landing experience and initial parsing workflows are operational, while automated extraction rules and end-to-end multi-tenant deployment are still being refined.",
    tags: ["Data Architecture", "Python", "Database Design", "Frontend UX", "Render", "Schema Migration"],
    links: {
      githubUrl: null,
      demoUrl: null,
      hasLiveLink: false,
      placeholderNote: "Prototype codebase tracked on private GitHub; staging deployment undergoing schema revisions."
    }
  },
  {
    id: "doomsday",
    code: "SYS-03",
    title: "DOOMSDAY PROTOCOL",
    category: "Distributed Web Systems / LAN Simulation",
    year: "2024 - 2025",
    statusBadge: "Multi-Terminal Functional Prototype",
    statusType: "prototype",
    headline: "Orchestrating synchronized multiplayer escape-room puzzles across four local terminals.",
    shortDescription:
      "A Flask-based distributed web application engineered for an interactive LAN escape-room experience, synchronizing 4 distinct challenge phases across separate networked PCs with real-time administrator controls.",
    accentColor: "#FF6B6B",
    problem:
      "Creating immersive multi-user puzzle simulations in classroom or event settings usually relies on third-party cloud apps, which suffer from venue Wi-Fi instability, variable latency, and an inability to provide synchronous physical room-state progression.",
    approach:
      "Engineered an offline-first, low-latency client-server architecture deployed on a local area network (LAN). A central Flask server maintains master game state in SQLite, feeding four dedicated PC terminal stations that unlock progressively as teams crack cryptographic, logic, and system challenges.",
    systemArchitecture: {
      title: "Distributed LAN Architecture",
      description: "Host server synchronizes timed gameplay states, puzzle unlock flags, and player logs across 4 networked workstations.",
      diagramType: "doomsday",
      layers: [
        {
          name: "Host Server",
          tech: "Python Flask Runtime",
          role: "Runs on master LAN node; handles socket/HTTP endpoints, validates puzzle solutions, and controls timers."
        },
        {
          name: "Terminal Stations",
          tech: "HTML, CSS, JavaScript",
          role: "Four distinct interactive stations (Cipher, Logic, Grid, Override) with terminal UI and audio/visual cues."
        },
        {
          name: "State Store",
          tech: "SQLite Transaction Log",
          role: "Records exact millisecond timestamps, team input attempts, penalty deductions, and room completion status."
        },
        {
          name: "Admin Control Console",
          tech: "Telemetry Dashboard",
          role: "Provides game operators real-time visibility into all terminal stages, manual overrides, and timer pauses."
        }
      ]
    },
    hardwareSoftware: {
      hardware: ["Local Network Hub / Router", "4 Distributed PC Terminals", "Master Controller Host"],
      software: ["Python", "Flask", "SQLite", "Vanilla JavaScript", "Custom CSS Terminal UI"],
      protocols: ["Local IPv4 LAN", "HTTP/REST", "Event Polling"]
    },
    statusTransparency:
      "Tested and operated as an in-person multi-terminal prototype. The four gameplay phases, timer state synchronization, and operator panel function reliably over private local networks.",
    tags: ["Distributed Systems", "Flask", "LAN Architecture", "SQLite", "Event Synchronization", "Game Design"],
    links: {
      githubUrl: null,
      demoUrl: null,
      hasLiveLink: false,
      placeholderNote: "Source code and game session setup documentation maintained in local archive."
    }
  },
  {
    id: "smart-plant",
    code: "SYS-04",
    title: "Smart Plant Monitoring & Irrigation",
    category: "Embedded Systems & Closed-Loop IoT",
    year: "2023 - 2024",
    statusBadge: "KVS National Selection & Regional 2nd Place",
    statusType: "award",
    headline: "Automating precision soil moisture regulation through closed-loop micro-controller sensing.",
    shortDescription:
      "An Arduino-based autonomous plant monitoring and irrigation system utilizing soil-moisture and environmental sensors with threshold-driven pump actuation to maximize water efficiency.",
    accentColor: "#52E6D2",
    problem:
      "Domestic and small-greenhouse plants frequently perish due to inconsistent manual watering schedules—either drying past the permanent wilting point or developing fungal root decay from waterlogging and nutrient leaching.",
    approach:
      "Built a closed-loop automated feedback system. An Arduino microcontroller continuously samples capacitive soil moisture sensors and ambient temperature/humidity probes, triggering a low-voltage submersible pump when moisture falls below a calibrated target threshold.",
    systemArchitecture: {
      title: "Closed-Loop Sensing & Actuation",
      description: "Sensor readings trigger microcontroller logic, toggling relay-isolated DC pump to restore moisture levels.",
      diagramType: "irrigation",
      layers: [
        {
          name: "Environmental Sensors",
          tech: "Capacitive Moisture & DHT",
          role: "Sub-surface probe measures volumetric water content; ambient sensor reads ambient humidity and temperature."
        },
        {
          name: "Control Logic Unit",
          tech: "Arduino (Atmega328P)",
          role: "Samples analog inputs, applies smoothing algorithms, and compares moisture levels against hysteresis bands."
        },
        {
          name: "Power & Isolation",
          tech: "Optocoupler Relay Module",
          role: "Isolates sensitive 5V logic circuit from 12V high-current submersible pump power rail."
        },
        {
          name: "Actuation Output",
          tech: "DC Submersible Pump & Tubing",
          role: "Dispatches calibrated water pulses directly to root zone until moisture climbs above upper cutoff."
        }
      ]
    },
    hardwareSoftware: {
      hardware: ["Arduino Microcontroller", "Soil Moisture Sensor", "DHT Environmental Sensor", "5V Relay Switch", "Submersible DC Pump", "LCD 16x2 I2C Screen"],
      software: ["Embedded C++ (Arduino IDE)", "Sensor Calibration Firmware"]
    },
    statusTransparency:
      "Physical prototype was built, calibrated, and successfully presented in competitive exhibitions. AI predictive irrigation (using historical sensor logs to anticipate moisture loss based on weather forecasts) was designed and proposed as a prospective research expansion.",
    aiAspectNote:
      "Proposed AI Extension: Future development envisioned feeding environmental time-series logs into a lightweight regression model to predict transpiration rates and irrigate in anticipation of drying.",
    recognition: [
      {
        award: "Second Place Winner",
        event: "KVS Regional Science Exhibition (RSBVP)",
        date: "December 2023",
        level: "Regional Student Science Competition"
      },
      {
        award: "Selected to Represent Region",
        event: "KVS National Science Exhibition (RSBVP)",
        date: "April 2024",
        level: "National Student Science Exhibition"
      }
    ],
    tags: ["Embedded IoT", "Arduino", "Sensor Integration", "Hardware Prototyping", "Environmental Automation"],
    links: {
      githubUrl: null,
      demoUrl: null,
      hasLiveLink: false,
      placeholderNote: "Arduino firmware sketches and sensor calibration schematics archived."
    }
  },
  {
    id: "carbon-tracker",
    code: "SYS-05",
    title: "Carbon Emissions Tracker",
    category: "Python Data Modeling & Environmental Tools",
    year: "2024",
    statusBadge: "KVS Regional Science Exhibition Selection",
    statusType: "completed",
    headline: "Demystifying household carbon footprints through regional state-specific emission coefficients.",
    shortDescription:
      "A Python-based carbon calculation tool designed to estimate monthly household carbon footprints using state-wise electricity grid and fuel emission factors to drive environmental awareness.",
    accentColor: "#A6FF6B",
    problem:
      "Most carbon footprint calculators apply generic global averages that fail to reflect India's regional diversity. A kilowatt-hour consumed in a state predominantly powered by thermal coal produces a vastly different footprint than one consumed in a hydro-rich grid.",
    approach:
      "Researched regional electricity generation data and compiled state-wise emission factors (kg CO2e/kWh) alongside standard transportation and fuel coefficients into a Python calculation pipeline.",
    systemArchitecture: {
      title: "Empirical Calculation Pipeline",
      description: "User utility and transit inputs are multiplied by regional emission coefficients to yield categorized footprint breakdown.",
      diagramType: "carbon",
      layers: [
        {
          name: "User Input Interface",
          tech: "Python CLI / Forms",
          role: "Gathers monthly metrics: state location, electricity bill units (kWh), LPG consumption, and vehicle transit km."
        },
        {
          name: "Factor Lookup Table",
          tech: "Regional Emission Matrix",
          role: "Stores empirical CEA (Central Electricity Authority) state-wise grid factors and standardized fuel emission rates."
        },
        {
          name: "Computation Engine",
          tech: "Mathematical Algorithms",
          role: "Applies formula: Footprint = Σ (Activity Data × Specific Emission Factor) across power, heating, and mobility."
        },
        {
          name: "Output Reporting",
          tech: "Structured Metrics & Visuals",
          role: "Generates monthly footprint summary, category breakdown, and highlights primary carbon reduction levers."
        }
      ]
    },
    hardwareSoftware: {
      software: ["Python 3", "Data Calculation Libraries", "CSV / Data Parsing"],
      protocols: ["Empirical Formula Modeling"]
    },
    statusTransparency:
      "Software tool was completed and presented. The application produces calibrated estimations derived from official state emission factors; it serves as an educational and monitoring tool, not as an industrial compliance auditor.",
    recognition: [
      {
        award: "Selected for Presentation",
        event: "KVS Regional Science Exhibition (RSBVP)",
        date: "2024",
        level: "Regional Science Innovation Selection"
      }
    ],
    tags: ["Python", "Data Analysis", "Environmental Tech", "Emission Factors", "Scientific Modeling"],
    links: {
      githubUrl: null,
      demoUrl: null,
      hasLiveLink: false,
      placeholderNote: "Python calculation script and emission factor lookup tables available upon request."
    }
  }
];
