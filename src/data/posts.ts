export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
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
Every node in a LangGraph agent reads and writes a typed state. Treat that state as an API contract...

_Replace this placeholder with the full article._`,
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

Long-running assistants need memory that outlives a chat window. pgvector on Postgres is the boring, correct answer...

_Replace this placeholder with the full article._`,
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

Users trust an agent more when they can see it think. Here's the event schema I settled on...

_Replace this placeholder with the full article._`,
  },
];
