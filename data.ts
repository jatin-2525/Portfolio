export const LINKS = {
  github: "https://github.com/jatin-2525",
  linkedin: "https://www.linkedin.com/in/kumarjatin25",
  email: "singhaljatin7378@gmail.com",
  mailto: "mailto:singhaljatin7378@gmail.com",
  phone: "+91 7378253955",
  cv: "https://docs.google.com/document/d/1BaQFH6qPvnUhYQdGJjOnLISKqFMDYuG3YVvMo707nCg/edit?usp=drive_link",
  cyberSmart: "http://cybersmart.wnscaresfoundation.org/Students/index",
} as const;

export const PROJECT_LINKS = {
  notes: "https://github.com/jatin-2525/ai-powered-notes-app",
  flappy: "https://github.com/jatin-2525/ai-flipping-bird",
  hillClimb: "https://github.com/jatin-2525/hill-climb-racing",
} as const;

export const META = {
  name: "Jatin Kumar Singhal",
  role: "B.Tech CSE Student",
  year: "2nd Year",
  university: "Lovely Professional University",
  location: "Phagwara, Punjab — India",
  cgpa: "7.63",
  status: "Open to internships & collabs",
};

export const ROTATING = [
  "AI agents that learn to play.",
  "Tools that summarise themselves.",
  "Small projects, built end to end.",
  "Python · C++ · a bit of everything.",
];

export const HERO_FACTS: [string, string][] = [
  ["Location", "Phagwara, Punjab — IN"],
  ["CGPA", "7.63 / 10"],
  ["Core stack", "Python · C++ · C · HTML"],
  ["Looking for", "Summer '27 internships"],
];

export const FACTS = [
  ["Programme", "B.Tech, Computer Science & Engineering"],
  ["Standing", "2nd year · Aug 2025 – present"],
  ["CGPA", "7.63 / 10"],
  ["Languages", "C++, Python, C, HTML"],
  ["Tooling", "MongoDB, Tableau, ETL, MS SQL Server"],
  ["Currently", "Reinforcement learning & full-stack AI"],
] as const;

export const STATS = [
  { value: "5+", label: "Projects built", note: "shipping since 1st year" },
  { value: "3+", label: "AI / ML models", note: "agents that act on input" },
  { value: "5+", label: "Certifications", note: "all verifiable below" },
  { value: "30+", label: "People trained", note: "WNS CyberSmart, Rajasthan" },
];

export const PRINCIPLES = [
  {
    no: "P1",
    title: "Build before believing",
    body: "Every idea gets a weekend prototype. If it can't run, it's not an idea — it's a wish.",
  },
  {
    no: "P2",
    title: "Ship small, finish things",
    body: "A clumsy finished project teaches more than a perfect abandoned one. My repos are full of 'done'.",
  },
  {
    no: "P3",
    title: "Teach it or don't know it",
    body: "Explaining phishing detection to teenagers found every gap in my own understanding. So I keep teaching.",
  },
];

export const JOURNEY = [
  {
    when: "Mar '21 – May '22",
    where: "Modern Jagdamba, Bharatpur",
    what: "Matriculation · 91.2%",
    note: "Wrote my first lines of code here.",
    accent: "#7e9cd8",
  },
  {
    when: "Mar '23 – May '24",
    where: "Holy Angels, Mehwa",
    what: "Intermediate (PCM) · 80%",
    note: "Logic and systems pulled me in.",
    accent: "#5cbfa9",
  },
  {
    when: "Aug '25 – Present",
    where: "Lovely Professional University",
    what: "B.Tech CSE · CGPA 7.63",
    note: "Projects, CDP, certifications — the real work.",
    accent: "#d9a85c",
  },
  {
    when: "2027",
    where: "Next",
    what: "Internship → final year → build",
    note: "The plan I'm working toward right now.",
    accent: "#e07a5c",
  },
];

export const CURRENTLY = [
  ["Reading", "Reinforcement learning, slowly but daily"],
  ["Building", "Turning my notes app into something I actually use daily"],
  ["Preparing", "Data structures — the way I want them before placements"],
];

export const RADAR = {
  labels: [
    "Python",
    "C++ / C",
    "Web & UI",
    "ML / AI",
    "Data & SQL",
    "Problem solving",
  ],
  values: [88, 80, 76, 74, 70, 86],
};

export const SKILL_ROWS = [
  {
    group: "Languages",
    accent: "#d9a85c",
    items: [
      { name: "Python", level: 88, note: "agents, scripting, ML" },
      { name: "C++", level: 80, note: "DSA & competitive practice" },
      { name: "C", level: 72, note: "fundamentals, memory" },
      { name: "HTML / CSS", level: 76, note: "interfaces for my tools" },
    ],
  },
  {
    group: "Data & Tools",
    accent: "#5cbfa9",
    items: [
      { name: "MongoDB", level: 72, note: "document storage" },
      { name: "MS SQL Server", level: 74, note: "queries & modelling" },
      { name: "Tableau", level: 68, note: "dashboards" },
      { name: "ETL pipelines", level: 68, note: "clean → load → analyse" },
    ],
  },
  {
    group: "How I work",
    accent: "#7e9cd8",
    items: [
      { name: "Problem-solving", level: 86, note: "break it down first" },
      { name: "Team player", level: 84, note: "LPU clubs & CDP squads" },
      { name: "Project management", level: 78, note: "scope small, finish" },
      { name: "Time management", level: 82, note: "coursework + building" },
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  kind: string;
  date: string;
  accent: string;
  repo: string;
  summary: string;
  stack: string[];
  bullets: string[];
  learned: string;
};

export const PROJECTS: Project[] = [
  {
    id: "notes",
    index: "01",
    title: "AI-Powered Notes App",
    kind: "Full-stack + AI",
    date: "May 2024",
    accent: "#d9a85c",
    repo: PROJECT_LINKS.notes,
    summary:
      "A note-taking app where the AI does the tidying — organising, summarising and pulling out what matters.",
    stack: ["Python", "HTML", "MongoDB", "AI integration"],
    bullets: [
      "Developed an intelligent note-taking application integrating AI capabilities to enhance note organisation, summarisation and productivity.",
      "Implemented AI-powered features that help users manage and process information instead of manually re-reading everything.",
      "Designed a clean, responsive interface using modern web development practices for a comfortable daily-driver experience.",
    ],
    learned:
      "My first time wiring a front end, a database and a model into one thing that had to agree with each other.",
  },
  {
    id: "flappy",
    index: "02",
    title: "AI Flappy Bird",
    kind: "Reinforcement learning",
    date: "Apr 2024",
    accent: "#7e9cd8",
    repo: PROJECT_LINKS.flappy,
    summary:
      "A bird that learns to flap. No hard-coded timers — the agent reads the game state and decides for itself.",
    stack: ["Python", "Machine learning", "Game logic"],
    bullets: [
      "Built an AI-based Flappy Bird agent to demonstrate intelligent decision-making and automated gameplay.",
      "Applied machine-learning concepts so the agent analyses the game state and optimises its actions through a learning-based approach.",
      "Created the game logic and the AI interaction layer to explore reinforcement learning and autonomous agent behaviour.",
    ],
    learned:
      "How an agent goes from flailing uselessly to clearing scores — and why reward design matters more than the model.",
  },
  {
    id: "hill",
    index: "03",
    title: "Hill Climb Racing AI",
    kind: "Computer vision",
    date: "Jun 2023",
    accent: "#5cbfa9",
    repo: PROJECT_LINKS.hillClimb,
    summary:
      "My first build, back in first year: a bot that watches the screen, reads the terrain and drives the throttle.",
    stack: ["Python", "Computer vision", "Real-time control"],
    bullets: [
      "Constructed an AI-based game control system capable of interacting with Hill Climb Racing using intelligent automation techniques.",
      "Integrated AI techniques with real-time control mechanisms to explore autonomous gameplay and human-computer interaction.",
    ],
    learned:
      "That perception is the hard part — deciding is easy once you can reliably see what's in front of you.",
  },
];

export const TRAINING = {
  title: "Community Development Project",
  org: "WNS CyberSmart · LPU",
  span: "Jun 2026 – Jul 2026",
  tag: "Cyber Awareness & Digital Safety",
  link: LINKS.cyberSmart,
  linkLabel: "Open the CyberSmart student portal",
  bullets: [
    "Delivered in-person cyber security awareness training to 30+ participants across schools in Rajasthan, covering phishing detection, password hygiene, social media privacy and cyberbullying prevention.",
    "Guided every trainee through end-to-end enrolment and completion of the WNS CyberSmart certification portal across five modules — Social Media Safety, Cyber Bullying, Financial Security, Public Internet and Cyber Grooming — with each trainee passing the assessments and earning a certified badge.",
    "Documented delivery through geotagged field verification across multiple sessions and maintained trainee records (reference IDs) for university audit and CDP certification.",
  ],
  metrics: [
    { k: "30+", v: "trainees taught" },
    { k: "5", v: "certification modules" },
    { k: "100%", v: "passed their badges" },
  ],
};

export const CERTS = [
  {
    title: "Google AI",
    issuer: "Coursera",
    mark: "G",
    date: "Jun 2026",
    accent: "#7e9cd8",
    blurb: "Generative AI foundations and responsible use of AI tooling.",
    href: "https://coursera.org/share/1714c638d6b653541c26a1fb9db7cd52",
    verify: "Shareable credential",
  },
  {
    title: "Introduction to Computer Networking",
    issuer: "SimpliLearn",
    mark: "S",
    date: "Jul 2026",
    accent: "#d9a85c",
    blurb: "OSI & TCP/IP layers, addressing and how data actually travels.",
    href: "https://simpli-web.app.link/e/kCtZYF0PU5b",
    verify: "Certificate of completion",
  },
  {
    title: "Communication Skills Course",
    issuer: "SimpliLearn",
    mark: "S",
    date: "Jul 2026",
    accent: "#5cbfa9",
    blurb: "Structured speaking and writing — used it to teach 30+ people.",
    href: "https://simpli-web.app.link/e/enEazy4PU5b",
    verify: "Certificate of completion",
  },
  {
    title: "Computer Programming",
    issuer: "neoColab",
    mark: "n",
    date: "May 2026",
    accent: "#e07a5c",
    blurb: "Core programming fundamentals, logic building and problem sets.",
    href: "https://drive.google.com/file/d/1Ez774KfWUf1J9BuVdFaa7M-Efl2XST9Z/view?usp=sharing",
    verify: "Verified PDF",
  },
  {
    title: "Data Science for Beginners",
    issuer: "Board Infinity",
    mark: "B",
    date: "Feb 2026",
    accent: "#b18cd9",
    blurb: "Cleaning, exploring and visualising a dataset end to end.",
    href: "https://drive.google.com/file/d/16CuS6yVJL7VqBhTymu7HeX3j99krYnxa/view?usp=sharing",
    verify: "Verified PDF",
  },
];

export const EDU = [
  {
    when: "Aug 2025 – Present",
    where: "Lovely Professional University",
    place: "Phagwara, Punjab",
    what: "B.Tech — Computer Science & Engineering",
    score: "CGPA 7.63",
    note: "Second year now. Coursework in data structures, object-oriented programming, DBMS and computer networks — the same topics I use in my builds.",
    accent: "#d9a85c",
    current: true,
  },
  {
    when: "Mar 2023 – May 2024",
    where: "Holy Angels",
    place: "Mehwa, Rajasthan",
    what: "Intermediate (Class XII) — Physics, Chemistry, Maths",
    score: "80%",
    note: "PCM background, where the interest in logic and systems first showed up.",
    accent: "#5cbfa9",
    current: false,
  },
  {
    when: "Mar 2021 – May 2022",
    where: "Modern Jagdamba",
    place: "Bharatpur, Rajasthan",
    what: "Matriculation (Class X)",
    score: "91.2%",
    note: "Wrote my first line of code around this time and never really stopped.",
    accent: "#7e9cd8",
    current: false,
  },
];

export const CV_INSIDE = [
  "Full education history with scores",
  "Technical & soft skills",
  "All three detailed project write-ups",
  "WNS CyberSmart training record",
  "Certifications with issuing bodies",
];
