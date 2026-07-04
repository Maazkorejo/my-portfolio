import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-wide py-28 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">404</p>
      <h1 className="font-display text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="font-mono text-sm text-accent hover:underline">← Back home</Link>
    </div>
  );
}
