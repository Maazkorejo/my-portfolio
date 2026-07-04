export const personal = {
  name: "Muhammad Maaz Korejo",
  title: "AI Developer · Backend Engineer",
  location: "Hyderabad, Pakistan",
  email: "maazkorejo00@gmail.com",
  phone: "+92 345 661 8618",
  linkedin: "https://linkedin.com/in/muhammad-maaz-korejo",
  github: "https://github.com/Maazkorejo",
  bio: "AI Developer and Backend Engineer specializing in LLM-integrated platforms, ML pipelines, and cloud-deployed backends. 3rd-year IT student at University of Sindh with 8 Anthropic-verified credentials, 2 government-backed internships, and 3 deployed projects spanning agentic AI systems, ML-based intrusion detection, and full-stack web platforms.",
};

export const skillGroups = [
  {
    label: "AI & LLM Engineering",
    icon: "Sparkles",
    items: [
      "Claude / Anthropic API",
      "Claude Code (Subagents, Agent Skills)",
      "Model Context Protocol (MCP)",
      "LangGraph",
      "Mistral AI",
      "Prompt Engineering",
      "Hugging Face",
      "Agentic Workflows",
      "Vector Memory (pgvector)",
    ],
  },
  {
    label: "Machine Learning",
    icon: "BrainCircuit",
    items: ["XGBoost", "Random Forest", "scikit-learn", "SHAP", "pandas", "NumPy", "Feature Engineering"],
  },
  {
    label: "Backend & Cloud",
    icon: "Server",
    items: [
      "Python (Flask)",
      "Flask-SocketIO",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Railway",
      "Gunicorn",
      "APScheduler",
      "Git / GitHub",
      "CI/CD",
    ],
  },
  {
    label: "Frontend",
    icon: "LayoutTemplate",
    items: ["React 18", "Vite", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Automation",
    icon: "Workflow",
    items: ["n8n", "Agentic Workflow Design"],
  },
];

export const projects = [
  {
    name: "Alfred",
    tagline: "Personal AI Operating Assistant",
    live: "https://alfred-personal-assistant.vercel.app",
    repo: null,
    stack: ["Flask", "Flask-SocketIO", "LangGraph", "Mistral AI", "PostgreSQL", "pgvector", "React 18", "Railway", "Vercel"],
    points: [
      "Building a LangGraph-based agentic assistant with tool-calling (email, calendar, reminders) and persistent vector memory (pgvector) for contextual recall across sessions.",
      "Implemented a real-time streaming chat interface (Flask-SocketIO) with a live agent-reasoning trace panel, exposing the model's tool-selection steps.",
      "Deployed a public sandbox version (Railway + Vercel) to demo the architecture without exposing personal integrations wired into the private build; core agent in active development.",
    ],
  },
  {
    name: "AI Pundit Rankings",
    tagline: "Football Prediction Platform",
    live: "https://football-pundit.vercel.app",
    repo: null,
    stack: ["Flask", "React 18", "Supabase", "PostgreSQL", "Mistral AI", "APScheduler", "Vercel", "Railway"],
    points: [
      "Built a full-stack social prediction platform for the FIFA World Cup 2026 with a 6-module REST API and a 5-table relational schema.",
      "Engineered an automated AI-scoring pipeline (APScheduler + Mistral AI) that grades user predictions against live match results and generates real-time roasts, eliminating manual scoring.",
      "Integrated live football data via the API-Football feed; deployed to production on Vercel (frontend) and Railway (backend).",
    ],
  },
  {
    name: "Network Intrusion Detection System",
    tagline: "ML pipeline on CICIDS-2017",
    live: null,
    repo: "https://github.com/Maazkorejo/NIDS-Machine-Learning",
    stack: ["Python", "XGBoost", "Random Forest", "scikit-learn", "SHAP", "pandas"],
    points: [
      "Built an end-to-end ML pipeline on the CICIDS-2017 dataset, classifying 14 network attack categories (DDoS, Port Scan, Botnet, Brute Force) at ~99% accuracy with a near-zero false-positive rate.",
      "Applied SHAP for model explainability, identifying the top predictive features driving each attack classification.",
      "Packaged the pipeline as a reproducible module (requirements.txt, setup script) for one-command reuse.",
    ],
  },
];

export const repos = [
  {
    name: "Alfred-Personal-Assistant",
    description: "LangGraph-based personal AI operating assistant with tool-calling and vector memory.",
    url: "https://github.com/Maazkorejo/Alfred-Personal-Assistant",
    homepage: "https://alfred-personal-assistant.vercel.app",
    language: "Python",
  },
  {
    name: "football-pundit",
    description: "Full-stack AI football prediction platform for the FIFA World Cup 2026.",
    url: "https://github.com/Maazkorejo/football-pundit",
    homepage: "https://football-pundit.vercel.app",
    language: "JavaScript",
  },
  {
    name: "NIDS-Machine-Learning",
    description: "Network Intrusion Detection System using Machine Learning (Random Forest + XGBoost).",
    url: "https://github.com/Maazkorejo/NIDS-Machine-Learning",
    homepage: null,
    language: "Python",
  },
  {
    name: "Cloud-Portfolio",
    description: "Capstone Flask + PostgreSQL portfolio deployed on Railway during the PITP Cloud Computing internship.",
    url: "https://github.com/Maazkorejo/Cloud-Portfolio",
    homepage: "https://cloud-portfolio-production-f02c.up.railway.app/",
    language: "HTML",
  },
  {
    name: "AI-Chatbot-Project",
    description: "AI chatbot built on top of Hugging Face models.",
    url: "https://github.com/Maazkorejo/AI-Chatbot-Project",
    homepage: null,
    language: "Python",
  },
  {
    name: "Quran-Tracker",
    description: "Personal Quran reading and memorization tracker web app.",
    url: "https://github.com/Maazkorejo/Quran-Tracker",
    homepage: null,
    language: "JavaScript",
  },
  {
    name: "my-portfolio",
    description: "This portfolio site — React, Tailwind, and Framer Motion, deployed on Vercel.",
    url: "https://github.com/Maazkorejo/my-portfolio",
    homepage: "https://my-portfolio-iota-six-98.vercel.app",
    language: "TypeScript",
  },
  {
    name: "Maazkorejo",
    description: "GitHub profile README repository.",
    url: "https://github.com/Maazkorejo/Maazkorejo",
    homepage: null,
    language: "Markdown",
  },
];

// Certificate images — real scanned certificates.
import antSubagents from "@/assets/certs_real/anthropic-subagents.jpg";
import antClaudeApi from "@/assets/certs_real/anthropic-claude-api.jpg";
import antAgentSkills from "@/assets/certs_real/anthropic-agent-skills.jpg";
import antMcp from "@/assets/certs_real/anthropic-mcp.jpg";
import antClaude101 from "@/assets/certs_real/anthropic-claude-101.jpg";
import antClaudeCode from "@/assets/certs_real/anthropic-claude-code-action.jpg";
import antFluencyFramework from "@/assets/certs_real/anthropic-ai-fluency-framework.jpg";
import antFluencyStudents from "@/assets/certs_real/anthropic-ai-fluency-students.jpg";
import forageDatacom from "@/assets/certs_real/forage-datacom-cybersec.jpg";
import forageMastercard from "@/assets/certs_real/forage-mastercard-cybersec.jpg";
import ibmJobLandscape from "@/assets/certs_real/ibm-cybersec-job-landscape.jpg";
import ibmGettingStarted from "@/assets/certs_real/ibm-getting-started-cybersec.jpg";
import ibmMalwarebytes from "@/assets/certs_real/ibm-malwarebytes.jpg";
import ibmCybersecData from "@/assets/certs_real/ibm-cybersec-data.jpg";
import hpAi from "@/assets/certs_real/hp-life-ai-beginners.jpg";
import simplilearnCyber from "@/assets/certs_real/simplilearn-cybersec.jpg";
import uaPythonDs from "@/assets/certs_real/uniathena-python-ds-ml.jpg";
import uaDataStructure from "@/assets/certs_real/uniathena-data-structure-python.jpg";
import uaFunctions from "@/assets/certs_real/uniathena-functions-python.jpg";
import uaOops from "@/assets/certs_real/uniathena-oops-python.jpg";
import uaModules from "@/assets/certs_real/uniathena-modules-python.jpg";
import uaBasics from "@/assets/certs_real/uniathena-basics-python.jpg";
import uaDataTypes from "@/assets/certs_real/uniathena-datatypes-python.jpg";
import pitpDesigner from "@/assets/certs_real/pitp-graphic-designer.jpg";

export const certificateImages = [
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic", src: antMcp },
  { title: "Claude with the Anthropic API", issuer: "Anthropic", src: antClaudeApi },
  { title: "Introduction to Agent Skills", issuer: "Anthropic", src: antAgentSkills },
  { title: "Introduction to Subagents", issuer: "Anthropic", src: antSubagents },
  { title: "Claude Code in Action", issuer: "Anthropic", src: antClaudeCode },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", src: antFluencyFramework },
  { title: "Claude 101", issuer: "Anthropic", src: antClaude101 },
  { title: "AI Fluency for Students", issuer: "Anthropic", src: antFluencyStudents },
  { title: "Cyber Security Operations Job Simulation", issuer: "Datacom · Forage", src: forageDatacom },
  { title: "Cybersecurity Job Simulation", issuer: "Mastercard · Forage", src: forageMastercard },
  { title: "Your Future in Cybersecurity: The Job Landscape", issuer: "IBM SkillsBuild", src: ibmJobLandscape },
  { title: "Getting Started with Cybersecurity", issuer: "IBM SkillsBuild", src: ibmGettingStarted },
  { title: "Protecting a Device with Malwarebytes", issuer: "IBM SkillsBuild", src: ibmMalwarebytes },
  { title: "Cybersecurity and Data", issuer: "IBM SkillsBuild", src: ibmCybersecData },
  { title: "Introduction to Cyber Security", issuer: "Simplilearn SkillUp", src: simplilearnCyber },
  { title: "AI for Beginners", issuer: "HP LIFE · HP Foundation", src: hpAi },
  { title: "Certified Graphic Designer", issuer: "PITP–MUET · Govt of Sindh", src: pitpDesigner },
  { title: "Python for Data Science & Machine Learning", issuer: "UniAthena · CIQ", src: uaPythonDs },
  { title: "Data Structure in Python", issuer: "UniAthena · CIQ", src: uaDataStructure },
  { title: "OOPs Concept in Python", issuer: "UniAthena · CIQ", src: uaOops },
  { title: "Functions in Python", issuer: "UniAthena · CIQ", src: uaFunctions },
  { title: "Modules, Packages & Files in Python", issuer: "UniAthena · CIQ", src: uaModules },
  { title: "Data Types & Statements in Python", issuer: "UniAthena · CIQ", src: uaDataTypes },
  { title: "Basics of Python Programming", issuer: "UniAthena · CIQ", src: uaBasics },
];

export const experience = [
  {
    role: "Cloud Computing Intern",
    org: "PITP–MUET, Jamshoro (Govt of Sindh)",
    period: "Mar – May 2026",
    points: [
      "Delivered a capstone Flask + PostgreSQL + Railway platform with CI/CD as part of a government-backed technical training program.",
      "Reduced lab environment setup time by ~30% by scripting VM configuration for trainee onboarding.",
    ],
  },
  {
    role: "Certified Graphic Designer Intern",
    org: "PITP–MUET (Govt of Sindh)",
    period: "Jan – Mar 2025",
    points: [
      "Produced 10+ branded visual assets for institutional print and digital communications under a government-accredited design program.",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of Sindh, Jamshoro",
  period: "Feb 2024 – Dec 2027 · 6th Semester",
  coursework: [
    "AI & Machine Learning",
    "Advanced DBMS",
    "Cybersecurity",
    "Cloud Computing",
    "Computer Networks",
  ],
};

export const certifications = [
  {
    group: "Anthropic — 8 credentials",
    items: [
      "Model Context Protocol (Apr 2026)",
      "Claude with the Anthropic API",
      "Introduction to Agent Skills",
      "Introduction to Subagents",
      "Claude Code in Action",
      "AI Fluency: Framework & Foundations",
      "Claude 101",
      "AI Fluency for Students",
    ],
  },
  {
    group: "Programs & Awards",
    items: [
      "Top Participant — HEC/NAVTTC ACT AI SkillBridge (2026)",
      "McKinsey Forward — McKinsey.org (Jun 2026)",
    ],
  },
  {
    group: "Cybersecurity & Foundations",
    items: [
      "IBM SkillsBuild — Cybersecurity & Data",
      "IBM SkillsBuild — Protecting a Device with Malwarebytes",
      "Forage — Mastercard Job Simulation",
      "Forage — Datacom Job Simulation",
      "CIQ / UniAthena — Python (×4)",
      "Simplilearn — Git & GitHub",
    ],
  },
];
