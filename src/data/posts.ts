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
  officialUrl?: string;
  publisher?: string;
  rightsNotice?: string;
  contributors?: { name: string; role: string; profileUrl?: string }[];
  featured?: boolean;
  stats?: { label: string; value: string }[];
};

export const posts: Post[] = [
  {
    slug: "deterministic-offline-evaluation-engine-llm-eval-kit",
    title: "Building a Deterministic Offline Evaluation Engine for LLM Systems",
    date: "2026-09-19",
    readTime: "6 min read",
    tag: "Offline LLM Evaluation & CI/CD",
    featured: true,
    author: "Mahrukh Baig (Lead), Warisha Arshad (Evaluation), Muhammad Maaz (Implementation)",
    project: "llm-eval-kit",
    version: "v0.2.0",
    classification: "Trustworthy AI / Offline Evaluation / LLM Systems Engineering",
    publisher: "INFERENCE Lab",
    officialUrl: "https://www.inference-lab.org/engineering/journal/llm-eval-kit-1789849273759",
    github: "https://github.com/Inference-LAB/llm-eval-kit",
    pypi: "https://pypi.org/project/llm-eval-kit/",
    rightsNotice:
      "© 2026 INFERENCE Lab. Originally published on the official INFERENCE Lab Engineering Journal. All intellectual rights reserved by INFERENCE Lab (Applied AI Research and Engineering Lab, Multan, Pakistan). Authored during the Engineering Fellowship Program (Cohort 2026). Shared here as an authorized technical portfolio record by Muhammad Maaz (Implementation Engineer). All artefacts are open and reproducible.",
    contributors: [
      {
        name: "Mahrukh Baig",
        role: "Lead Engineer",
        profileUrl: "https://www.inference-lab.org/people/mahrukh-baig",
      },
      {
        name: "Warisha Arshad",
        role: "Evaluation Engineer",
        profileUrl: "https://www.inference-lab.org/people/warisha-arshad",
      },
      {
        name: "Muhammad Maaz",
        role: "Implementation Engineer",
        profileUrl: "https://www.inference-lab.org/people/muhammad-maaz",
      },
    ],
    stats: [
      { label: "Test Coverage", value: "93% (88 Tests)" },
      { label: "Network IO", value: "Zero Network" },
      { label: "CI Matrix", value: "Py 3.9 – 3.12" },
      { label: "Verification", value: "Hybrid Sem+Sym" },
    ],
    excerpt:
      "We redesigned llm-eval-kit into a deterministic, zero-network evaluation pipeline built for continuous evaluation in CI/CD without relying on costly, privacy-compromising, or non-deterministic LLM-as-a-judge APIs.",
    content: `# Building a Deterministic Offline Evaluation Engine for LLM Systems

**Project**: \`llm-eval-kit\`  
**Program**: INFERENCE Lab Engineering Fellowship · Cohort 2026  
**Publisher**: INFERENCE Lab ([Official Journal Publication](https://www.inference-lab.org/engineering/journal/llm-eval-kit-1789849273759))  
**Authors**: Mahrukh Baig (Lead Engineer), Warisha Arshad (Evaluation Engineer), Muhammad Maaz (Implementation Engineer)  
**Artifacts**: [GitHub Repository](https://github.com/Inference-LAB/llm-eval-kit) | [PyPI Package](https://pypi.org/project/llm-eval-kit/) | [Official Lab Note](https://www.inference-lab.org/engineering/journal/llm-eval-kit-1789849273759)  
**Classification**: Trustworthy AI / Offline Evaluation / LLM Systems Engineering  

---

## 1. Abstract & Motivation

We redesigned \`llm-eval-kit\` into a deterministic, zero-network evaluation pipeline built for reliable continuous evaluation in CI/CD environments. The new architecture introduces a decoupled criteria registry, fail-fast orchestration, hybrid semantic and symbolic verification, and graceful handling of inapplicable evaluation criteria.

The implementation reached **93% test coverage across 88 tests**, with cross-version CI validation from Python 3.9 to 3.12. The work demonstrates how carefully defined evaluation contracts and offline heuristics can provide reproducible, privacy-preserving model assessment without relying on external LLM-as-a-judge APIs.

### The Problem with Cloud-Bound LLM Judges

\`llm-eval-kit\`'s pipeline originally lacked a deterministic, offline evaluation harness, forcing teams to rely on non-deterministic "LLM-as-a-judge" cloud APIs or slow manual reviews. This created several critical operational failure modes:
1. **Latency Bottlenecks**: Synchronous cloud API roundtrips created massive slowdowns during automated pull request testing.
2. **Per-Token Cost Overhead**: Continuous automated evaluation generated unsustainable API expenditures.
3. **Data Privacy & Exfiltration Risks**: Sensitive context and prompt pairs had to leave local/VPC execution boundaries.
4. **Non-Deterministic & Flaky Scores**: Prompt variance and cloud model drift produced non-reproducible scores that broke automated test pipelines.

This project set out to permanently close that gap.

---

## 2. Systems Architecture & What Changed

The pipeline transitioned from monolithic, ad-hoc checks into a decoupled, layered evaluation engine:
* **Decoupled Criteria Registry**: A decorator-based registry isolates criteria definitions from the evaluation lifecycle.
* **Fail-Fast Orchestrator**: Validates inputs, schemas, and requirements before invoking computationally dense embeddings.
* **Hybrid Verification Engine**: Combines dense semantic sentence embeddings with an orthogonal symbolic parser to verify numeric claims.
* **Graceful Degradation Aggregator**: Employs a deliberate three-valued scoring model to cleanly exclude ungrounded checks rather than penalizing missing reference context.
* **Packaging & Developer Ergonomics**: Integrated a zero-overhead CLI, multilingual Urdu heuristics, and strict wheel packaging rules.

### Decoupled Criteria Registry via Micro-Kernel Pattern

To scale across diverse evaluation checks without creating a fragile orchestrator, we adapted a micro-kernel registry pattern where criteria functions self-register via \`@register_criterion\` into a centralized dispatch table:

\`\`\`python
# criteria/registry.py
_CRITERIA_REGISTRY = {}

def register_criterion(name: str):
    """Decorator to register evaluation criteria into the central dispatch table."""
    def decorator(fn):
        _CRITERIA_REGISTRY[name] = fn
        return fn
    return decorator
\`\`\`

The central \`Evaluator\` interacts solely with this registry interface, ensuring new criteria require no orchestrator modifications.

---

## 3. Hybrid Semantic & Symbolic Verification

Standard semantic similarity embeddings exhibit a dangerous vulnerability: syntactically identical sentences with conflicting numbers (such as *"water boils at 50°C"* versus *"100°C"*) are treated as near-identical (~0.90 cosine similarity).

To solve this, we paired dense sentence embeddings with an orthogonal symbolic parser in \`numeric_utils.py\`:

| Verification Dimension | Dense Semantic Embeddings | Symbolic Numeric Parser (\`numeric_utils.py\`) | Hybrid Synthesis |
| :--- | :--- | :--- | :--- |
| **Numeric Discrepancies** | Blind (~0.90 similarity on conflicting values) | Extracts numeric claims & canonicalizes units | Caps unsupported claims at **0.30** |
| **Unit Conversions** | Inconsistent across scales | Synonym mappings & scale normalization | Exact numeric parity checking |
| **Network Dependency** | Zero (local \`all-MiniLM-L6-v2\` weights) | Zero (pure Python AST/regex parsing) | **100% Offline Execution** |
| **Compute Overhead** | ~100–250ms per batch | < 2ms execution latency | Minimal impact on test execution |

The hybrid parser extracts numeric claims across scales, canonicalizes units through synonym mappings, and validates response claims against the context's numeric union, capping unsupported claims at 0.30. This design combines dense representations with fast symbolic sanity checks, acting as an offline consistency heuristic rather than open-world factual verification.

---

## 4. Engineering Outcomes & CI/CD Hardening

Automated test coverage grew from initial prototype checks to **88 tests across 9 test suites**, raising overall test coverage to **93 percent**.

### Pre-Review Defect Elimination

These tests caught three critical real-world defects before review:
1. **Backward-Compatibility Failure on Python 3.9**: Caused by Python 3.10 union syntax (\`|\`), resolved with backward-compatible type annotations.
2. **Missing Configuration JSONs in Wheel Archives**: Static configuration JSONs were omitted in packaged builds, resolved via explicit \`package-data\` rules in \`pyproject.toml\`.
3. **Empty Input Cosine Similarity Artifacts**: Non-zero cosine similarity artifacts on empty inputs caused by BERT \`[CLS]\` and \`[SEP]\` tokens, resolved with pre-encoding guards.

A CI matrix workflow now runs the full test suite across **Python 3.9, 3.10, 3.11, and 3.12** on every push and pull request.

---

## 5. Key Engineering Lessons

1. **Fail-Fast Validation**: Enforcing strict input verification before computing expensive embeddings prevents unnecessary compute utilization.
2. **Explicit Interface Contracts**: Maintaining explicit interface contracts across criteria boundaries allows parallel feature additions without merge friction.
3. **Graceful Degradation with 3-Valued Scoring**: A naive aggregation treats an unexecuted check as a zero, but penalizing a model when reference context is absent misrepresents its actual quality. Implementing a deliberate three-valued scoring model—where inapplicable criteria return \`score: None\` with an explanation and are cleanly excluded from the composite average—ensures the pipeline distinguishes between an LLM failing a check and the pipeline lacking the context to evaluate it.

---

## 6. Official Attribution & Rights

* **Original Publication**: This engineering lab note was originally researched, authored, and published on the **INFERENCE Lab Engineering Journal** at [https://www.inference-lab.org/engineering/journal/llm-eval-kit-1789849273759](https://www.inference-lab.org/engineering/journal/llm-eval-kit-1789849273759).
* **Copyright & Rights**: © 2026 INFERENCE Lab. All intellectual rights for the publication and fellowship program documentation belong to INFERENCE Lab. Shared here as an authorized technical portfolio record by Muhammad Maaz (Implementation Engineer). All artefacts are open and reproducible under open-source licenses.`,
  },
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
