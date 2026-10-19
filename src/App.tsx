import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "./components/portfolio/Nav";
import { SiteFooter } from "./components/portfolio/SiteFooter";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificationsPage from "./pages/CertificationsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    // reducedMotion="user" makes every animation on the site respect
    // prefers-reduced-motion automatically — no per-component checks needed.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <ScrollToTop />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
        <Toaster position="bottom-right" />
      </div>
    </MotionConfig>
  );
}
