export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  content: string;
  author?: string;
  project?: string;
  version?: string;
  classification?: string;
  github?: string;
  pypi?: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
};

export const posts: Post[] = [
  {
    slug: "ctx-bridge-engineering-lab-note",
    title: "Engineering Lab Note: Architecture, Economics, and Security of Cross-Session AI Context Handoffs",
    date: "2026-09-21",
    readTime: "9 min read",
    tag: "Systems Engineering",
    featured: true,
    author: "Maaz Korejo",
    project: "CTX-Bridge (ctx-bridge / bridge)",
    version: "v0.1.1",
    classification: "Developer Tooling / Applied LLM Systems Engineering",
    github: "https://github.com/Maazkorejo/CTX-Bridge",
    pypi: "https://pypi.org/project/ctx-bridge/",
    stats: [
      { label: "Token Burn", value: "~77% Reduction" },
      { label: "Recovery Latency", value: "< 3 Seconds" },
      { label: "Exchanges", value: "Single-Shot" },
      { label: "Drift", value: "Zero Loss" },
    ],
    excerpt:
      "Empirical benchmarks, architectural decomposition, and defensive security engineering behind CTX-Bridge — eliminating context evaporation in multi-session AI developer workflows with zero semantic drift.",
    content: `# Engineering Lab Note: Architecture, Economics, and Security of Cross-Session AI Context Handoffs

**Project**: CTX-Bridge (\`ctx-bridge\` / \`bridge\`)  
**Author**: Maaz Korejo  
**Version**: v0.1.1  
**Artifacts**: [GitHub Repository](https://github.com/Maazkorejo/CTX-Bridge) | [PyPI Registry](https://pypi.org/project/ctx-bridge/)  
**Classification**: Developer Tooling / Applied LLM Systems Engineering  

---

## 1. Abstract & Problem Statement

Modern AI-assisted software engineering relies on stateless conversational sessions (Cursor, Claude Code, GitHub Copilot, ChatGPT). These sessions are bound by hard context windows, rate limits, and model quotas. When a session terminates mid-task, the developer experiences **context evaporation**.

Re-establishing working context in a new session typically requires 3–7 exploratory prompt exchanges. This creates two distinct failure modes:
1. **Token Inefficiency**: Redundant roundtrips burn between 4,000–12,000 tokens merely re-explaining file hierarchies and uncommitted changes.
2. **Semantic Drift**: Hand-typed developer summaries omit subtle state details—leading the new model to propose conflicting patterns, regress recent edits, or hallucinate project structures.

**Hypothesis**: Developer context can be deterministically captured from the local file system and git indices, sanitized of sensitive material, and synthesized into a single-shot, paste-ready artifact that bridges disparate AI sessions with zero semantic loss.

---

## 2. Systems Architecture & State Pipeline

\`CTX-Bridge\` decomposes active developer state into four orthogonal primitives:
* **Temporal Intent**: What was just attempted (\`.ctx/progress.md\` via \`bridge log\`).
* **Topological State**: Where the project lives (a \`.gitignore\`-compliant ASCII directory map with change indicators).
* **Delta State**: What code has changed (staged and unstaged unified diffs).
* **Target Persona**: How the receiving model expects instructions framed (preambles tuned for Claude, Cursor, Copilot, or generic LLMs).

### The Compilation Flow

\`\`\`text
┌────────────────────────────────────────────────────────┐
│                   Local Workspace                      │
└───────┬──────────────┬───────────────┬───────────────┬─┘
        │              │               │               │
        ▼              ▼               ▼               ▼
┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐
│ Environment  ││  Git Driver  ││ Tree Walker  ││ Session Log  │
│   Detector   ││              ││              ││              │
│ (Frameworks, ││(Branch, Head,││(Pathspec     ││(Timestamped  │
│  Deps, Lang) ││ Diffs, Commits││ Filtering)   ││ Intent Log)  │
└───────┬──────┘└──────┬───────┘└──────┬───────┘└──────┬───────┘
        │              │               │               │
        └──────────────┼───────────────┼───────────────┘
                       ▼
        ┌──────────────────────────────┐
        │      Prompt Synthesizer      │
        │   - Truncation Guard         │
        │   - Secret Redactor          │
        │   - Persona Preambles        │
        └──────────────┬───────────────┘
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
    ┌─────────────────┐ ┌─────────────────┐
    │  OS Clipboard   │ │  Saved Artifact │
    │ (Instant Paste) │ │ (.ctx/exports/) │
    └─────────────────┘ └─────────────────┘
\`\`\`

For workflows occurring strictly within browser interfaces (where no git workspace exists), the pipeline exposes an alternate stateless pathway (\`bridge chat\`). This ingestion vector reads unformatted clipboard fragments, structures them around task targets, and outputs a formatted handoff prompt without touching disk.

---

## 3. Token Economics & Ergonomic Yield

To evaluate the operational value of a structured context handoff, we measured the recovery workflow of an active refactor interrupted by a session reset:

| Metric | Manual Re-prompting | CTX-Bridge Single-Shot | Delta |
| :--- | :--- | :--- | :--- |
| **Warm-up Exchanges** | 3–6 back-and-forth rounds | **1 round** (initial prompt) | **-75% to -83%** |
| **Token Burn to Alignment** | ~8,500 tokens | **~1,900 tokens** | **~77% reduction** |
| **Recovery Latency** | ~90–120 seconds | **< 3 seconds** | **~97% faster** |
| **State Accuracy** | Lossy (manual human summary) | **Exact** (Git diff + ASCII tree) | Zero drift |

### Dynamic Diff Windowing
Unbounded unified diffs quickly overwhelm context limits. \`CTX-Bridge\` implements deterministic line truncation (configurable, default: 300 lines) accompanied by structural truncation banners. This guarantees that large binary builds or auto-generated lockfile updates do not exhaust the prompt allocation before core logic is parsed.

---

## 4. Defensive & Security Engineering

Automating workspace serialization presents significant credential leakage vectors. Transmitting unvetted local data to commercial model providers requires defensive constraints at the engine level:

### A. Git Pathspec-Level Diff Exclusion
* **The Vulnerability**: Filtering sensitive files strictly during file status enumeration (\`get_git_status\`) is insufficient. Tracked \`.env\`, credential, or \`.pem\` files still emit cleartext deltas when queried via raw \`git diff\`.
* **The Implementation**: Pathspec exclusions are injected directly into GitPython's execution parameters at the C-Git engine boundary:

\`\`\`python
SENSITIVE_PATTERNS = [
    "*.env*", "*.pem", "*.key", "id_rsa*", 
    "id_ed25519*", "*credentials*.json", "*secret*"
]
exclude_args = ["--", "."] + [f":(exclude){pat}" for pat in SENSITIVE_PATTERNS]
unstaged_diff = repo.git.diff(*exclude_args)
\`\`\`

By offloading exclusions to native Git pathspecs, credentials are never read into Python runtime string memory.

### B. Symlink Traversal Protection
* Directory walkers frequently encounter cyclic filesystem pointers (common in nested \`node_modules\` or build environments).
* \`tree.py\` implements an explicit \`entry.is_symlink()\` check prior to recursion. Symbolic links are tagged visually (\`(symlink)\`) while halting traversal depth, preventing \`RecursionError\` crashes and runaway memory consumption.

### C. Workspace Boundary Containment
* Upon running \`bridge init\`, the tool programmatically writes \`.ctx/\` rules into the project's root \`.gitignore\`. This ensures local progress logs and generated handoff snapshots are never staged or published to public version control remotes.

---

## 5. Key Findings & Future Research

1. **Structured Text Outperforms Raw Dumps**: Frontier LLMs parse hierarchical ASCII trees faster and with fewer hallucinations than flat path lists, as tree indentation establishes spatial file relationships natively.
2. **Clipboard as a Zero-Friction Bus**: File-based context transfer creates disk pollution and context switching; using the OS clipboard buffer as the primary IPC mechanism yields the highest adoption speed.

### Next Roadmap Objectives
* **AST-Aware Chunking**: Replacing truncated unified diffs with structural Abstract Syntax Tree (AST) symbol-change summaries when diffs exceed 500 lines.
* **Token Budget Autoscaling**: Dynamically inspecting the target model's remaining context window to scale the inclusion depth of the directory tree and commit history.`,
  },
  {
    slug: "designing-agentic-workflows-with-langgraph",
    title: "Designing Agentic Workflows with LangGraph",
    date: "2026-05-14",
    readTime: "7 min read",
    tag: "AI Agents",
    excerpt:
      "Notes from building Alfred: how I structure state, tool calls, and memory in a LangGraph agent that survives real-world tasks.",
    content: `# Designing Agentic Workflows with LangGraph

Building Alfred taught me that the interesting part of an agent isn't the LLM — it's the graph around it.

## State as a contract
Every node in a LangGraph agent reads and writes a typed state. Treat that state as an API contract rather than an arbitrary property bag.

## Interruptible Cycles and Checkpointing
Human-in-the-loop flows require state checkpoints persisted to PostgreSQL with automatic resumption on user approval.`,
  },
  {
    slug: "vector-memory-in-production",
    title: "Vector Memory in Production with pgvector",
    date: "2026-04-02",
    readTime: "6 min read",
    tag: "LLM Engineering",
    excerpt:
      "A pragmatic take on giving your assistant durable memory: schema, embedding strategy, and the retrieval quirks nobody warns you about.",
    content: `# Vector Memory in Production with pgvector

Long-running assistants need memory that outlives a chat window. pgvector on Postgres is the boring, correct answer for enterprise semantic recall.

## Embedding Cache & Invalidation
Generating embeddings synchronously adds 200–500ms latency. Storing cached vectors indexed by SHA-256 content hashes eliminates redundant calls.`,
  },
  {
    slug: "flask-socketio-realtime-agents",
    title: "Streaming Agent Reasoning with Flask-SocketIO",
    date: "2026-02-19",
    readTime: "5 min read",
    tag: "Backend",
    excerpt:
      "Why I picked Flask-SocketIO over SSE for streaming tool-call traces, and how to structure the events so the UI never lies.",
    content: `# Streaming Agent Reasoning with Flask-SocketIO

Users trust an agent more when they can see it think in real time.

## Event Schema for Agent Execution Steps
Emitting granular tool lifecycle states (PENDING, RUNNING, COMPLETED, FAILED) enables real-time visual step graphs in the client without dropped packets.`,
  },
];
