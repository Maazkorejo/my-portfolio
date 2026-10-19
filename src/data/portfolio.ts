// Kestrel AI Project Assets & Screenshots
import kestrelWorkspace from "@/assets/kestrel/kestrel_ide_workspace.png";
import kestrelSecurityAudit from "@/assets/kestrel/kestrel_security_audit.png";
import kestrelAiChat from "@/assets/kestrel/kestrel_ai_chat.png";
import kestrelPatchDiff from "@/assets/kestrel/kestrel_patch_diff.png";
import kestrelThreatIntel from "@/assets/kestrel/kestrel_threat_intel.png";
import kestrelSymbol from "@/assets/kestrel/kestrel-symbol.svg";

// Official Resume Assets
import resumePreview from "@/assets/resume/maaz-korejo-resume-page-1.png";

export const personal = {
  name: "Muhammad Maaz Korejo",
  title: "AI Developer · Backend Engineer",
  location: "Hyderabad, Pakistan",
  email: "maazkorejo00@gmail.com",
  phone: "+92 345 661 8618",
  linkedin: "https://linkedin.com/in/muhammad-maaz-korejo",
  github: "https://github.com/Maazkorejo",
  bio: "AI Developer & Backend Engineer specializing in LLM-integrated systems, cybersecurity tooling, Intelligent Document Processing (IDP), and offline evaluation architectures. Creator of Kestrel AI (AI-native cybersecurity IDE) and CTX-Bridge (open-source context CLI on PyPI). Former Backend AI Engineering Intern at FlyRank.ai, Implementation Fellow at INFERENCE Lab (llm-eval-kit, Grade A graduate), AI Developer Intern at Nebulark, holding 12 Anthropic-verified credentials and Google AI Essentials specialization.",
};

export const skillGroups = [
  {
    label: "AI & LLM Engineering",
    icon: "Sparkles",
    items: [
      "NVIDIA Nemotron 3.5 Integration",
      "Claude / Anthropic API",
      "Claude Code (Subagents & Agent Skills)",
      "Model Context Protocol (MCP)",
      "Defensive Patch Synthesis (Unified Diffs)",
      "Conversational AI Guardrails",
      "Local LLM Routing (Ollama / LLaMA 3)",
      "Tavily Real-Time Threat Grounding",
      "Retrieval & Grounding (RAG)",
      "DSPy Prompt Optimization",
      "LangGraph (Agentic Workflows)",
      "Mistral AI",
      "Groq API (LLaMA 3.3 70B)",
      "sentence-transformers",
      "llm-eval-kit (Offline Deterministic Eval)",
      "Task & Prompt Engineering",
      "Vector Memory (pgvector / Supabase)",
    ],
  },
  {
    label: "Cybersecurity & Application Security",
    icon: "ShieldCheck",
    items: [
      "Static Application Security Testing (SAST)",
      "Abstract Syntax Trees (AST Traversal)",
      "OWASP Top 10 Vulnerability Research",
      "CWE-89 (SQLi) & CWE-78 (Cmd Injection)",
      "CWE-22 (Path Traversal) & CWE-502 (Deserialization)",
      "CWE-489 (Flask Debug Info Exposure)",
      "In-Memory Taint Analysis & Data Flow Tracing",
      "Shannon Entropy Secret Redaction",
      "Tavily Real-Time CVE & CVSS 3.1 Grounding",
      "Threat Modeling & Attack Tree Visualizers",
      "Multi-Standard Linters (YARA, Sigma, Snort)",
      "Quarantined Docker Exploit Sandboxing",
    ],
  },
  {
    label: "Document Intelligence & OCR",
    icon: "FileText",
    items: [
      "Intelligent Document Processing (IDP)",
      "Mistral-OCR-4",
      "Chandra-OCR",
      "Docling",
      "LiteParse",
      "DocLayout-YOLO (Fine-Tuned 9 Classes)",
      "Ray Parallel Processing (3.3x Speedup)",
      "Label-Studio (Annotation Pipelines)",
      "MinerU / Unstructured",
      "Agentic Workflow Design",
      "n8n Workflow Automation",
    ],
  },
  {
    label: "Machine Learning",
    icon: "BrainCircuit",
    items: [
      "XGBoost",
      "Random Forest",
      "Scikit-learn",
      "SHAP (Explainable AI)",
      "Pandas & NumPy",
      "Feature Engineering",
      "NIDS Anomaly Detection (CICIDS-2017)",
    ],
  },
  {
    label: "Backend, Cloud & DevSecOps",
    icon: "Server",
    items: [
      "Python (Advanced AST & Subprocesses)",
      "FastAPI (Async RESTful APIs)",
      "Pydantic v2 (Strict Schema Enforcement)",
      "Uvicorn & AsyncIO Concurrency",
      "Python (Flask & Gunicorn)",
      "REST APIs & Swagger / OpenAPI",
      "Docker Container Sandboxing",
      "OASIS SARIF 2.1.0 Compliance",
      "GitHub Actions & GitLab CI Workflows",
      "PostgreSQL (RLS Tenant Isolation)",
      "SQLite (Scan Caching & Schema Design)",
      "Supabase & Railway",
      "Vercel Edge Cloud Deployment",
      "Auth (JWT / PBKDF2 Password Hashing)",
      "Webhooks & Caching",
      "Background Jobs & Workflows",
      "The Twelve-Factor App",
    ],
  },
  {
    label: "Frontend & Desktop IDE Engineering",
    icon: "LayoutTemplate",
    items: [
      "React 18 (Hooks & State Context)",
      "TypeScript (Strict Types & IPC Bridges)",
      "Microsoft Monaco Editor API",
      "Electron 33 Desktop Development",
      "Tailwind CSS & shadcn/ui",
      "Vite 5 (Bundling & HMR Optimization)",
      "PyInstaller Binary Packaging",
      "PowerShell & Bash Scripting",
      "pytest (100% Coverage & Test Suites)",
      "Typer CLI",
      "Node.js & JavaScript (ES6+)",
      "SPA Client-Side Routing",
      "Web Scraping (HTML to Clean Data)",
      "HTML5 & CSS3",
    ],
  },
];

export const projects = [
  {
    name: "Kestrel AI",
    tagline: "AI-Native Cybersecurity IDE & DevSecOps Platform",
    live: "https://kestrel-website-sigma.vercel.app/",
    repo: "https://github.com/Maazkorejo/Kestrel",
    releases: "https://github.com/Maazkorejo/Kestrel/releases",
    download: "https://github.com/Maazkorejo/Kestrel/releases/latest/download/Kestrel-Setup-1.0.0.exe",
    image: kestrelWorkspace,
    symbol: kestrelSymbol,
    screenshots: [
      {
        title: "Monaco IDE Workspace",
        description: "In-memory file tree, tabbed Monaco code editor, and clean guarded workspace status.",
        image: kestrelWorkspace,
      },
      {
        title: "AST Security Audit Engine",
        description: "Deterministic in-memory AST vulnerability scanner detecting CWE-489, CWE-89, and CWE-78 with security scoring (87/100).",
        image: kestrelSecurityAudit,
      },
      {
        title: "NVIDIA Nemotron AI Copilot",
        description: "Context-aware vulnerability assistant powered by NVIDIA Nemotron 3.5 diagnosing CWE-78 root causes and synthesizing mitigations.",
        image: kestrelAiChat,
      },
      {
        title: "Unified Git Diff & Patch",
        description: "Side-by-side split diff modal showing vulnerable lines vs defensive fixes with 1-click apply to disk.",
        image: kestrelPatchDiff,
      },
      {
        title: "Live Threat Intelligence",
        description: "Tavily-grounded threat cards with CVE-2020-10987, CVSS 9.8 score, and exploit triggers.",
        image: kestrelThreatIntel,
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Monaco Editor",
      "Electron",
      "NVIDIA Nemotron",
      "Docker",
      "Tavily API",
      "Tailwind CSS",
      "SARIF",
    ],
    points: [
      "Architected an open-source, AI-native cybersecurity IDE combining deterministic AST static analysis, real-time Tavily threat intelligence, and NVIDIA Nemotron 3.5 defensive patch synthesis.",
      "Engineered 100% deterministic AST parser detecting OWASP Top 10 vulnerabilities (CWE-89, CWE-78, CWE-22, CWE-502) in volatile memory with zero LLM hallucination.",
      "Built a privacy-first data guard using Shannon entropy secret redaction to strip AWS tokens, OpenAI keys, and credentials before LLM dispatch.",
      "Integrated live threat grounding via Tavily API correlating detected flaws with real CVE records, CVSS 9.8 severity metrics, and NVD mitigations.",
      "Delivered one-click unified git diff patch synthesis with automated attack verification in isolated Docker sandboxes and enterprise SARIF 2.1.0 CI/CD export.",
    ],
  },
  {
    name: "CTX-Bridge",
    tagline: "Open-Source AI Context Handoff CLI",
    live: "https://pypi.org/project/ctx-bridge",
    repo: "https://github.com/Maazkorejo/CTX-Bridge",
    journal: "/blog/ctx-bridge-engineering-lab-note",
    stack: ["Python", "Typer CLI", "Rich", "pytest", "PyPI", "Git"],
    points: [
      "Engineered and published an open-source CLI developer tool (pip install ctx-bridge) to package codebase context with zero-friction handoff for LLMs (Claude, Cursor, ChatGPT).",
      "Built automated language detection, intelligent gitignore filtering, token counting, and automated secret redaction (API keys, env tokens).",
      "Implemented template presets for Claude Code subagents, Cursor rules, and architecture specs with clean terminal UI and 100% test coverage.",
    ],
  },
  {
    name: "llm-eval-kit",
    tagline: "Offline LLM Evaluation Library",
    live: "https://pypi.org/project/llm-eval-kit",
    repo: "https://github.com/Inference-LAB/llm-eval-kit",
    journal: "/blog/deterministic-offline-evaluation-engine-llm-eval-kit",
    stack: ["Python", "sentence-transformers", "PyTorch", "NumPy", "pytest", "Scikit-learn"],
    points: [
      "Built an open-source, lightweight Python library for offline, deterministic LLM response evaluation without costly LLM-as-a-judge API calls.",
      "Implemented 4 core evaluation metrics: Factual Grounding, Question Relevance, Refusal Detection, and Response Completeness using local all-MiniLM-L6-v2 embeddings.",
      "Engineered thread-safe singleton model caching and strict numeric mismatch verification to prevent false-positive semantic matches in quantitative evaluations.",
    ],
  },
  {
    name: "Self-Reflective RAG Engine",
    tagline: "Self-RAG Architecture on LLaMA 3.3 70B",
    live: null,
    repo: "https://github.com/Maazkorejo/self-rag-engine",
    stack: ["Python", "Groq API", "LLaMA 3.3 70B", "LangGraph", "ChromaDB / pgvector", "Docker", "pytest"],
    points: [
      "Implemented the Self-RAG architecture (Asai et al.) over Groq LLaMA 3.3 70B, integrating 4 automated reflection checkpoints (Retrieve, IsRel, IsSup, IsUse) for adaptive document retrieval.",
      "Designed multi-step fallback logic dynamically triggering query rewriting and web search fallback when retrieved local documents fail relevance scoring.",
      "Containerized with Docker and achieved 100% unit & integration test coverage (46 pytest test cases) validating reflection token generation and state transitions.",
    ],
  },
  {
    name: "Alfred",
    tagline: "Personal AI Operating Assistant",
    live: "https://alfred-personal-assistant.vercel.app",
    repo: "https://github.com/Maazkorejo/Alfred-Personal-Assistant",
    stack: ["Flask", "Flask-SocketIO", "LangGraph", "Mistral AI", "PostgreSQL", "pgvector", "React 18", "Piper TTS", "Railway", "Vercel"],
    points: [
      "Architected an agentic desktop/web operating assistant with 14 custom tools (email, calendar, filesystem, shell, web search) and persistent pgvector long-term memory.",
      "Implemented real-time streaming WebSocket trace panel exposing agent reasoning and step-by-step tool invocation logs.",
      "Integrated offline local Piper TTS speech synthesis and a lightweight FFT spectral clap-to-wake detector for hands-free local triggering.",
    ],
  },
  {
    name: "AI Pundit Rankings",
    tagline: "FIFA World Cup 2026 Prediction Platform",
    live: "https://football-pundit.vercel.app",
    repo: "https://github.com/Maazkorejo/football-pundit",
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
    name: "Kestrel",
    description: "Open-source AI-native cybersecurity IDE: deterministic AST audit, real-time CVE threat intelligence, and NVIDIA Nemotron patch synthesis.",
    url: "https://github.com/Maazkorejo/Kestrel",
    homepage: "https://kestrel-website-sigma.vercel.app/",
    language: "TypeScript / Python",
  },
  {
    name: "Alfred-Personal-Assistant",
    description: "LangGraph-based personal AI operating assistant with 14 custom tools and pgvector memory.",
    url: "https://github.com/Maazkorejo/Alfred-Personal-Assistant",
    homepage: "https://alfred-personal-assistant.vercel.app",
    language: "Python",
  },
  {
    name: "self-rag-engine",
    description: "Self-Reflective RAG architecture over Groq LLaMA 3.3 70B with 4 reflection checkpoints and 100% test coverage.",
    url: "https://github.com/Maazkorejo/self-rag-engine",
    homepage: null,
    language: "Python",
  },
  {
    name: "CTX-Bridge",
    description: "Open-source AI context handoff CLI with automated language & secret redaction and agent presets.",
    url: "https://github.com/Maazkorejo/CTX-Bridge",
    homepage: "https://pypi.org/project/ctx-bridge",
    language: "Python",
  },
  {
    name: "llm-eval-kit",
    description: "Open-source Python library for offline, deterministic LLM evaluation with zero external judge API calls.",
    url: "https://github.com/Inference-LAB/llm-eval-kit",
    homepage: "https://pypi.org/project/llm-eval-kit",
    language: "Python",
  },
  {
    name: "football-pundit",
    description: "Full-stack AI football prediction platform with automated roasting pipeline for the FIFA World Cup 2026.",
    url: "https://github.com/Maazkorejo/football-pundit",
    homepage: "https://football-pundit.vercel.app",
    language: "JavaScript",
  },
  {
    name: "NIDS-Machine-Learning",
    description: "Network Intrusion Detection System classifying 14 attack types with SHAP explainability on CICIDS-2017.",
    url: "https://github.com/Maazkorejo/NIDS-Machine-Learning",
    homepage: null,
    language: "Python",
  },
];

// Certificate images — real scanned certificates & screenshots.
import antMcp from "@/assets/certs_real/anthropic-mcp.jpg";
import antMcpAdvanced from "@/assets/certs_real/anthropic-mcp-advanced.png";
import antClaudeApi from "@/assets/certs_real/anthropic-claude-api.jpg";
import antClaudeVertexAi from "@/assets/certs_real/anthropic-claude-vertex-ai.png";
import antAgentSkills from "@/assets/certs_real/anthropic-agent-skills.jpg";
import antSubagents from "@/assets/certs_real/anthropic-subagents.jpg";
import antClaudeCode from "@/assets/certs_real/anthropic-claude-code-action.jpg";
import antClaudeCode101 from "@/assets/certs_real/anthropic-claude-code-101.png";
import antClaudePlatform101 from "@/assets/certs_real/anthropic-claude-platform-101.png";
import antFluencyFramework from "@/assets/certs_real/anthropic-ai-fluency-framework.jpg";
import antClaude101 from "@/assets/certs_real/anthropic-claude-101.jpg";
import antFluencyStudents from "@/assets/certs_real/anthropic-ai-fluency-students.jpg";

import googleAiEssentials from "@/assets/certs_real/google-ai-essentials.png";
import googleAiFundamentals from "@/assets/certs_real/google-ai-fundamentals.png";
import googleAiResearchInsights from "@/assets/certs_real/google-ai-research-insights.png";
import linuxFoundationLfc102 from "@/assets/certs_real/linux-foundation-lfc102.png";

import flyrankBackendAi from "@/assets/certs_real/flyrank-backend-ai-engineering.png";
import flyrankRecomP1 from "@/assets/certs_real/flyrank-recommendation-page-1.png";
import flyrankRecomP2 from "@/assets/certs_real/flyrank-recommendation-page-2.png";
import flyrankEvalP1 from "@/assets/certs_real/flyrank-evaluation-report-page-1.png";
import flyrankEvalP2 from "@/assets/certs_real/flyrank-evaluation-report-page-2.png";

import flyrankLogo from "@/assets/flyrank-logo.svg";
import inferenceLabLogo from "@/assets/inference-lab-logo.png";
import inferenceLabCert from "@/assets/certs_real/inference-lab-fellowship.jpg";
import pitpLogo from "@/assets/pitp-logo.webp";

import forageDatacom from "@/assets/certs_real/forage-datacom-cybersec.jpg";
import forageMastercard from "@/assets/certs_real/forage-mastercard-cybersec.jpg";
import ibmJobLandscape from "@/assets/certs_real/ibm-cybersec-job-landscape.jpg";
import ibmGettingStarted from "@/assets/certs_real/ibm-getting-started-cybersec.jpg";
import ibmMalwarebytes from "@/assets/certs_real/ibm-malwarebytes.jpg";
import ibmCybersecData from "@/assets/certs_real/ibm-cybersec-data.jpg";
import simplilearnCyber from "@/assets/certs_real/simplilearn-cybersec.jpg";
import hpAi from "@/assets/certs_real/hp-life-ai-beginners.jpg";
import pitpDesigner from "@/assets/certs_real/pitp-graphic-designer.jpg";

import uaPythonDs from "@/assets/certs_real/uniathena-python-ds-ml.jpg";
import uaDataStructure from "@/assets/certs_real/uniathena-data-structure-python.jpg";
import uaOops from "@/assets/certs_real/uniathena-oops-python.jpg";
import uaFunctions from "@/assets/certs_real/uniathena-functions-python.jpg";
import uaModules from "@/assets/certs_real/uniathena-modules-python.jpg";
import uaDataTypes from "@/assets/certs_real/uniathena-datatypes-python.jpg";
import uaBasics from "@/assets/certs_real/uniathena-basics-python.jpg";

export const certificateImages = [
  // Anthropic (12 Credentials)
  { title: "Introduction to Model Context Protocol (MCP)", issuer: "Anthropic", src: antMcp, image: antMcp },
  { title: "Model Context Protocol: Advanced Topics", issuer: "Anthropic", src: antMcpAdvanced, image: antMcpAdvanced },
  { title: "Claude with the Anthropic API", issuer: "Anthropic", src: antClaudeApi, image: antClaudeApi },
  { title: "Claude with Google Vertex AI", issuer: "Anthropic", src: antClaudeVertexAi, image: antClaudeVertexAi },
  { title: "Introduction to Agent Skills", issuer: "Anthropic", src: antAgentSkills, image: antAgentSkills },
  { title: "Introduction to Subagents", issuer: "Anthropic", src: antSubagents, image: antSubagents },
  { title: "Claude Code in Action", issuer: "Anthropic", src: antClaudeCode, image: antClaudeCode },
  { title: "Claude Code 101", issuer: "Anthropic", src: antClaudeCode101, image: antClaudeCode101 },
  { title: "Claude Platform 101", issuer: "Anthropic", src: antClaudePlatform101, image: antClaudePlatform101 },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", src: antFluencyFramework, image: antFluencyFramework },
  { title: "Claude 101", issuer: "Anthropic", src: antClaude101, image: antClaude101 },
  { title: "AI Fluency for Students", issuer: "Anthropic", src: antFluencyStudents, image: antFluencyStudents },

  // Google & Linux Foundation
  { title: "Google AI Essentials (5-Course Specialization)", issuer: "Google · Coursera", src: googleAiEssentials, image: googleAiEssentials },
  { title: "AI Fundamentals", issuer: "Google · Coursera", src: googleAiFundamentals, image: googleAiFundamentals },
  { title: "AI for Research and Insights", issuer: "Google · Coursera", src: googleAiResearchInsights, image: googleAiResearchInsights },
  { title: "Inclusive Open Source Community Orientation (LFC102)", issuer: "The Linux Foundation", src: linuxFoundationLfc102, image: linuxFoundationLfc102 },

  // Industry Engineering & Program Honors
  { title: "Backend AI Engineering Internship", issuer: "FlyRank.ai", src: flyrankBackendAi, image: flyrankBackendAi },
  { title: "Engineering Fellowship Program (Grade A)", issuer: "INFERENCE Lab · llm-eval-kit", src: inferenceLabCert, image: inferenceLabCert },

  // Cybersecurity & Professional Simulations
  { title: "Cyber Security Operations Job Simulation", issuer: "Datacom · Forage", src: forageDatacom, image: forageDatacom },
  { title: "Cybersecurity Job Simulation", issuer: "Mastercard · Forage", src: forageMastercard, image: forageMastercard },
  { title: "Your Future in Cybersecurity: The Job Landscape", issuer: "IBM SkillsBuild", src: ibmJobLandscape, image: ibmJobLandscape },
  { title: "Getting Started with Cybersecurity", issuer: "IBM SkillsBuild", src: ibmGettingStarted, image: ibmGettingStarted },
  { title: "Protecting a Device with Malwarebytes", issuer: "IBM SkillsBuild", src: ibmMalwarebytes, image: ibmMalwarebytes },
  { title: "Cybersecurity and Data", issuer: "IBM SkillsBuild", src: ibmCybersecData, image: ibmCybersecData },
  { title: "Introduction to Cyber Security", issuer: "Simplilearn SkillUp", src: simplilearnCyber, image: simplilearnCyber },
  { title: "AI for Beginners", issuer: "HP LIFE · HP Foundation", src: hpAi, image: hpAi },
  { title: "Certified Graphic Designer", issuer: "PITP–MUET · Govt of Sindh", src: pitpDesigner, image: pitpDesigner },

  // Python Specialization (UniAthena / CIQ)
  { title: "Python for Data Science & Machine Learning", issuer: "UniAthena · CIQ", src: uaPythonDs, image: uaPythonDs },
  { title: "Data Structure in Python", issuer: "UniAthena · CIQ", src: uaDataStructure, image: uaDataStructure },
  { title: "OOPs Concept in Python", issuer: "UniAthena · CIQ", src: uaOops, image: uaOops },
  { title: "Functions in Python", issuer: "UniAthena · CIQ", src: uaFunctions, image: uaFunctions },
  { title: "Modules, Packages & Files in Python", issuer: "UniAthena · CIQ", src: uaModules, image: uaModules },
  { title: "Data Types & Statements in Python", issuer: "UniAthena · CIQ", src: uaDataTypes, image: uaDataTypes },
  { title: "Basics of Python Programming", issuer: "UniAthena · CIQ", src: uaBasics, image: uaBasics },
];

export const experience = [
  {
    role: "Back-End AI Engineering Intern",
    org: "FlyRank.ai (Casper, WY · Remote)",
    logo: flyrankLogo,
    period: "Jul – Sep 2026",
    badge: "Completed Track",
    points: [
      "Completed 292+ documented hours across API contracts, Task design and prompting, Retrieval and grounding (RAG), and Evaluation and operations.",
      "Delivered accepted culminating capstone solution ('Your 10x Solution') reviewed and approved by lead track mentors and executive leadership.",
      "Built and deployed end-to-end backend services spanning 5 core technical assignments: custom web scrapers, JWT/auth protection layers, multi-container Docker stacks, PostgreSQL database integrations, and CRUD APIs.",
      "Attended 29 technical masterclasses and completed 55 industry learning resources alongside completing 12 verified Anthropic Academy certifications.",
    ],
    documents: [
      {
        title: "Certificate of Completion — Backend AI Engineering",
        badge: "Certificate",
        issuer: "FlyRank.ai · ID: FR-D11-FA8DB-52256",
        images: [flyrankBackendAi],
        verifyUrl: "https://internship.flyrank.ai/verify?id=FR-D11-FA8DB-52256",
      },
      {
        title: "Official Recommendation Letter",
        badge: "Letter of Recommendation",
        issuer: "Alen Malkoc, CEO · FlyRank.ai",
        images: [flyrankRecomP1, flyrankRecomP2],
        verifyUrl: "https://internship.flyrank.ai/verify?id=FR-D10-4A2D2-7F7FF",
      },
      {
        title: "Final Internship Report & Evaluation",
        badge: "Evaluation Report",
        issuer: "Arijana Ibrović, Director · FlyRank.ai",
        images: [flyrankEvalP1, flyrankEvalP2],
        verifyUrl: "https://internship.flyrank.ai/verify?id=FR-D8-2C53C-C9AA4",
      },
    ],
  },
  {
    role: "AI Developer Intern",
    org: "Nebulark (IDP SaaS)",
    period: "Jul 2026 – Present",
    badge: "Current Role",
    points: [
      "Conducted a comprehensive 14-tool benchmark across OCR, layout parsing, and table extraction engines (Docling, Mistral-OCR-4, Chandra-OCR, DocLayout-YOLO, Reducto, LandingAI DPT-3, PaddleOCR, LiteParse).",
      "Architected a 3-tier cost-optimized hybrid extraction pipeline (0.5s LiteParse heuristic pre-check -> local Docling on CPU -> Mistral-OCR-4 / Chandra-OCR cloud fallback), slashing cloud API costs by 80–90%.",
      "Implemented Ray parallel actor processing achieving 3.3x speedup for batch PDF document extraction; fine-tuned DocLayout-YOLO (9 document layout classes) using Label-Studio annotations.",
      "Conducted OpenMAIC provider-registry architectural review and enforced PostgreSQL Row-Level Security (RLS) policies for multi-tenant isolation.",
    ],
  },
  {
    role: "Research / Implementation Engineer",
    org: "INFERENCE Lab Fellowship",
    logo: inferenceLabLogo,
    period: "Jul – Sep 2026",
    badge: "Completed (Grade A)",
    points: [
      "Selected from 130+ applicants for Cohort 01 building llm-eval-kit, an open-source, pip-installable Python library for offline, deterministic LLM evaluation.",
      "Designed and implemented 4 core evaluation modules (Factual Grounding, Relevance, Refusal Detection, Completeness) with zero external LLM-as-judge API calls using local sentence-transformers (all-MiniLM-L6-v2).",
      "Engineered thread-safe singleton embedding model loader and numeric-mismatch verification layer to prevent false positives in semantic similarity scoring.",
      "Successfully completed the Engineering Fellowship Program with top evaluation grade 'A' and outstanding contribution award for the llm-eval-kit open-source core.",
    ],
    documents: [
      {
        title: "Certificate of Achievement — Engineering Fellowship Program",
        badge: "Certificate · Grade A",
        issuer: "INFERENCE Lab · ID: IL-EF-2026-0006",
        images: [inferenceLabCert],
        verifyUrl: "https://www.inference-lab.org",
      },
    ],
  },
  {
    role: "Cloud Computing Intern",
    org: "PITP–MUET, Jamshoro (Govt of Sindh)",
    logo: pitpLogo,
    period: "Mar – May 2026",
    points: [
      "Delivered a capstone Flask + PostgreSQL + Railway platform with automated CI/CD as part of a government-backed technical training program.",
      "Reduced lab environment setup time by ~30% by scripting automated VM configuration for trainee onboarding.",
    ],
  },
  {
    role: "Certified Graphic Designer Intern",
    org: "PITP–MUET (Govt of Sindh)",
    logo: pitpLogo,
    period: "Jan – Mar 2025",
    points: [
      "Produced 10+ branded visual assets for institutional print and digital communications under a government-accredited design program.",
    ],
    documents: [
      {
        title: "Certificate of Completion — Certified Graphic Designer",
        badge: "Certificate",
        issuer: "PITP–MUET · Govt of Sindh",
        images: [pitpDesigner],
      },
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
    category: "Anthropic — 12 Verified Credentials",
    group: "Anthropic — 12 Verified Credentials",
    issuer: "Anthropic",
    items: [
      { name: "Model Context Protocol (MCP)", issuer: "Anthropic", date: "Apr 2026" },
      { name: "MCP: Advanced Topics", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude with the Anthropic API", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude with Google Vertex AI", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Introduction to Agent Skills", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Introduction to Subagents", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude Code in Action", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude Code 101", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude Platform 101", issuer: "Anthropic", date: "Apr 2026" },
      { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "Apr 2026" },
      { name: "Claude 101", issuer: "Anthropic", date: "Apr 2026" },
      { name: "AI Fluency for Students", issuer: "Anthropic", date: "Apr 2026" },
    ],
  },
  {
    category: "Google & Linux Foundation",
    group: "Google & Linux Foundation",
    issuer: "Google / Linux Foundation",
    items: [
      { name: "Google AI Essentials (5-Course Specialization)", issuer: "Google · Coursera", date: "Jul 2026" },
      { name: "AI Fundamentals", issuer: "Google · Coursera", date: "Aug 2026" },
      { name: "AI for Research and Insights", issuer: "Google · Coursera", date: "Aug 2026" },
      { name: "Inclusive Open Source Community Orientation (LFC102)", issuer: "The Linux Foundation", date: "Aug 2026" },
    ],
  },
  {
    category: "Programs, Awards & Fellowships",
    group: "Programs, Awards & Fellowships",
    issuer: "Research & Industry Honors",
    items: [
      { name: "Backend AI Engineering Internship — Certificate of Completion", issuer: "FlyRank.ai", date: "Sep 2026" },
      { name: "INFERENCE Lab Fellowship — Certificate of Achievement (Grade A)", issuer: "INFERENCE Lab", date: "Sep 2026" },
      { name: "Top Participant — HEC/NAVTTC ACT AI SkillBridge", issuer: "HEC / NAVTTC", date: "2026" },
      { name: "McKinsey Forward Program", issuer: "McKinsey.org", date: "Jun 2026" },
    ],
  },
  {
    category: "Cybersecurity & Foundations",
    group: "Cybersecurity & Foundations",
    issuer: "Professional Accreditations",
    items: [
      { name: "Your Future in Cybersecurity: The Job Landscape", issuer: "IBM SkillsBuild", date: "2026" },
      { name: "Getting Started with Cybersecurity", issuer: "IBM SkillsBuild", date: "2026" },
      { name: "Protecting a Device with Malwarebytes", issuer: "IBM SkillsBuild", date: "2026" },
      { name: "Cybersecurity and Data", issuer: "IBM SkillsBuild", date: "2026" },
      { name: "Mastercard Cybersecurity Job Simulation", issuer: "Forage", date: "2026" },
      { name: "Datacom Cyber Security Operations Job Simulation", issuer: "Forage", date: "2026" },
      { name: "Introduction to Cyber Security", issuer: "Simplilearn SkillUp", date: "2026" },
      { name: "AI for Beginners", issuer: "HP LIFE · HP Foundation", date: "2026" },
      { name: "Certified Graphic Designer", issuer: "PITP–MUET · Govt of Sindh", date: "2025" },
      { name: "Python Specialization (×7 Certifications)", issuer: "UniAthena · CIQ", date: "2025" },
    ],
  },
];

export const resumeData = {
  pdfUrl: "/maaz-korejo-resume.pdf",
  previewImage: resumePreview,
  filename: "Muhammad_Maaz_Korejo_Resume.pdf",
  lastUpdated: "October 2026",
  headline: "AI Engineer & Backend Systems Developer",
  summary:
    "AI Engineer & Backend Systems Developer specializing in high-throughput AI platforms, deterministic AST vulnerability enrichment with Tree-Sitter, and offline evaluation architectures (llm-eval-kit). Proven experience shipping across Nebulark (ExploitGrid v0 Engine & 14-tool IDP benchmark), INFERENCE Lab Fellowship (Grade A graduate), and FlyRank.ai (292+ hrs, 12 Anthropic credentials).",
  overviewHighlights: [
    { label: "Target Roles", value: "AI Engineer · Backend Systems Developer · LLM Platform Engineer" },
    { label: "Education", value: "BS Information Technology (6th Sem.), University of Sindh (Feb 2024 – Dec 2027)" },
    { label: "Current Roles", value: "AI Engineer Intern at Nebulark · Research Fellow at INFERENCE Lab" },
    { label: "Flagship Releases", value: "Kestrel AI (Nebius x NVIDIA Hackathon) · llm-eval-kit (PyPI) · CTX-Bridge (PyPI)" },
    { label: "Core Security", value: "Tree-Sitter AST Parsing · SARIF 2.1.0 · CVSS v3.1 · EPSS v3 · CISA KEV" },
    { label: "Verified Credentials", value: "12 Anthropic Verifications · Google AI Essentials · Linux Foundation (LFC102)" },
  ],
  technicalSkillsCategories: [
    {
      name: "AI & LLM Systems",
      items: [
        "Anthropic Claude API",
        "NVIDIA Nemotron 3.5",
        "LangGraph",
        "DSPy",
        "Self-RAG",
        "pgvector",
        "sentence-transformers",
        "Mistral AI",
        "Groq (LLaMA 3.3 70B)",
        "Ollama",
      ],
    },
    {
      name: "Backend & Tooling",
      items: [
        "FastAPI",
        "Redis",
        "BullMQ",
        "Docker",
        "Supabase",
        "Flask",
        "Drizzle ORM",
        "Electron",
        "Monaco Editor",
        "Typer CLI",
        "Pytest",
        "node:test",
      ],
    },
    {
      name: "Languages",
      items: [
        "Python 3.12",
        "TypeScript",
        "JavaScript (Node.js 20/24)",
        "SQL (PostgreSQL)",
        "Bash/PowerShell",
      ],
    },
    {
      name: "Security & DevSecOps",
      items: [
        "Tree-Sitter AST Parsing",
        "SARIF 2.1.0",
        "CVSS v3.1",
        "EPSS v3",
        "CISA KEV",
        "npm lockfile v1/v2/v3",
        "Docker Sandboxing",
        "Tavily API",
      ],
    },
    {
      name: "Document Intelligence",
      items: [
        "Docling (TableFormer)",
        "Mistral OCR-4",
        "Ray Actor Framework",
        "LiteParse (Rust PDFium)",
        "Chandra OCR",
        "DocLayout-YOLO",
      ],
    },
  ],
  experience: [
    {
      role: "AI Engineer & AI Developer Intern",
      org: "Nebulark",
      period: "Jul 2026 – Present",
      bullets: [
        "Built deterministic AST vulnerability enrichment pipeline (ExploitGrid v0 Engine) with Tree-Sitter across Go, Python, C, and JS, isolating exact vulnerable function boundaries and git patch diffs with 0% AI hallucination.",
        "Shipped GitHub Marketplace Action (exploitgrid-dependency-scanner) in TypeScript; wrote 30 tests on the native node:test runner, 100% pass in 8.94s with zero external test dependencies.",
        "Implemented lockfile analysis for npm schemas v1/v2/v3, normalizing ranges with semver.minVersion and processing dependencies in 250-package chunks through BullMQ Redis queue workers.",
        "Designed 3-tier IDP routing for a 14-tool benchmark (LiteParse pre-check → Docling local CPU parser → Mistral OCR-4 cloud fallback), cutting cloud OCR cost by 80–90%.",
        "Parallelized PDF page rendering and object detection with a Ray Actor worker pool: 3.3x speedup, 20 PDFs in 3.61s.",
      ],
    },
    {
      role: "Research / Implementation Engineer",
      org: "INFERENCE Lab Fellowship",
      period: "Jul 2026 – Present",
      bullets: [
        "Published llm-eval-kit on PyPI (github.com/Inference-LAB/llm-eval-kit): offline, deterministic LLM evaluation requiring zero external API keys.",
        "Implemented cosine semantic similarity with local sentence-transformers (all-MiniLM-L6-v2), regex refusal classification, and JSON schema validation at 100% Pytest coverage.",
      ],
    },
    {
      role: "Back-End AI Engineering Intern",
      org: "FlyRank.ai",
      period: "Jul 2026 – Sep 2026",
      bullets: [
        "Logged 292+ hours building 5 backend microservices, Redis sliding-window rate limiters, and async task queues for the 'Your 10x Solution' content ingestion capstone.",
        "Integrated Anthropic Claude API for structured text synthesis; wrote Pytest suites; earned 12 Anthropic-verified credentials. Credential ID: FR-D11-FA8DB-52256.",
      ],
    },
  ],
  projects: [
    {
      name: "Kestrel AI — AI-Native Cybersecurity IDE & DevSecOps Platform",
      badge: "Nebius x NVIDIA Hackathon 2026",
      bullets: [
        "Built desktop security IDE: Electron frontend, embedded FastAPI sidecar (port 8000), Monaco Editor with gutter vulnerability glyphs and line-level diff decorations.",
        "Detected OWASP Top 10 flaws (CWE-89, CWE-78, CWE-22, CWE-502, CWE-489) with deterministic AST analyzers; sent AST boundaries to NVIDIA Nemotron 3.5 to generate unified git diff patches.",
        "Grounded findings with Tavily API CVE/EPSS lookups; verified exploit attack trees in isolated Docker sandboxes; headless CLI exports OASIS SARIF 2.1.0 (39/39 tests passing).",
      ],
    },
    {
      name: "llm-eval-kit — Deterministic Offline LLM Evaluation Library",
      badge: "INFERENCE Lab | PyPI",
      bullets: [
        "Computes cosine similarity, refusal rate, factual grounding, and JSON adherence locally, with no network latency or API billing.",
        "Modular test framework at 100% Pytest coverage, enabling CI gating for local and hosted model evaluation pipelines.",
      ],
    },
    {
      name: "Alfred — Personal AI Operating Assistant",
      badge: "Full-stack, personal",
      bullets: [
        "Built agent with 14 custom tools, episodic long-term memory on PostgreSQL (pgvector), and dual-wake trigger: local Piper TTS plus real-time audio FFT clap detection.",
        "Dockerized microservices; backend on Railway, client on Vercel Edge.",
      ],
    },
    {
      name: "CTX-Bridge — AI Context Handoff CLI",
      badge: "PyPI: ctx-bridge",
      bullets: [
        "Built Python CLI (Typer, GitPython) that serializes branch diffs, commit history, task state, and blockers into markdown handoff files for multi-agent workflows.",
      ],
    },
  ],
};
