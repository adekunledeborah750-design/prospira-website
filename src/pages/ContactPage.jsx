import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  LoaderCircle,
  Sparkles,
  CircleCheckBig,
  Send,
} from "lucide-react";
import Button from "../components/Button";

export default function ContactPage() {
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleAISubmit = async (e) => {
    e.preventDefault();
    if (!projectIdea.trim()) return;

    setIsLoadingAI(true);
    // Simulate AI Advisor analysis
    setTimeout(() => {
      let techStack = ["Next.js", "React 19", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel"];
      if (projectIdea.toLowerCase().includes("mobile") || projectIdea.toLowerCase().includes("app")) {
        techStack = ["Flutter", "React Native", "FastAPI", "Firebase", "PostgreSQL"];
      } else if (projectIdea.toLowerCase().includes("game") || projectIdea.toLowerCase().includes("3d")) {
        techStack = ["Three.js", "WebGL", "Unity", "Node.js WebSockets", "Redis"];
      } else if (projectIdea.toLowerCase().includes("ai") || projectIdea.toLowerCase().includes("agent")) {
        techStack = ["Next.js", "LangChain", "OpenAI API", "Pinecone Vector DB", "Python FastAPI"];
      }

      setAiResult({
        techStackRecommendations: techStack,
        developmentRoadmap: [
          {
            step: "Phase 1: Architecture & Technical Discovery",
            description: "System diagramming, data schema design, and technical risk mitigation.",
          },
          {
            step: "Phase 2: UI/UX & Interactive Prototyping",
            description: "High-fidelity Figma prototypes and user journey verification.",
          },
          {
            step: "Phase 3: Production Engineering & Core APIs",
            description: "Robust sprint-based development with 100% test coverage and CI/CD pipelines.",
          },
          {
            step: "Phase 4: Security Audit, QA & Global Launch",
            description: "Load testing, penetration testing, and zero-downtime production deployment.",
          },
        ],
      });
      setIsLoadingAI(false);
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Title & AI Advisor */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Let's Build <br /> Your Next <br /> Digital Product
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Ready to take your project to the next level? Fill out the form or use
              our AI Project Advisor for immediate technical recommendations.
            </p>

            <div className="space-y-8">
              <div className="p-8 bg-secondary text-white rounded-[2rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-black font-headline mb-4 flex items-center gap-2 relative z-10">
                  <BrainCircuit className="text-primary" /> AI Project Advisor
                </h3>
                <p className="text-white/60 mb-6 relative z-10">
                  Input your project idea below to get instant AI-powered tech stack
                  and roadmap recommendations.
                </p>
                <form onSubmit={handleAISubmit} className="space-y-4 relative z-10">
                  <textarea
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    placeholder="E.g. I want to build a real-time SaaS platform for real estate agents..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 min-h-[120px] focus:outline-none focus:border-primary transition-colors text-white placeholder-white/40"
                  />
                  <button
                    disabled={isLoadingAI}
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {isLoadingAI ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={18} /> Get AI Recommendations
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form or AI Result */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {aiResult ? (
                <motion.div
                  key="recommendations"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border border-border p-10 rounded-[2rem] shadow-2xl h-full"
                >
                  <button
                    onClick={() => setAiResult(null)}
                    className="text-primary font-bold mb-6 hover:underline block text-sm"
                  >
                    ← Back to Contact Form
                  </button>
                  <h3 className="text-3xl font-black font-headline mb-8">
                    Your Technical Roadmap
                  </h3>

                  <div className="mb-10">
                    <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary mb-4">
                      Recommended Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {aiResult.techStackRecommendations.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary mb-4">
                      Development Phases
                    </h4>
                    <div className="space-y-6">
                      {aiResult.developmentRoadmap.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-bold text-lg">{item.step}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      Happy with these suggestions? Let's discuss how Prospira can
                      implement them for you.
                    </p>
                    <Button
                      onClick={() => setAiResult(null)}
                      className="w-full"
                    >
                      Schedule a Deep Dive
                    </Button>
                  </div>
                </motion.div>
              ) : isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary text-white p-12 rounded-[2rem] text-center flex flex-col items-center justify-center h-full min-h-[500px]"
                >
                  <CircleCheckBig size={80} className="mb-8" />
                  <h3 className="text-4xl font-black font-headline mb-4">
                    Message Received!
                  </h3>
                  <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                    Thanks for reaching out. A Prospira technical lead will review your
                    requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-6 py-2 rounded-full border border-white/30 text-sm hover:bg-white/10 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleFormSubmit}
                  className="bg-[#FDF6E3] border border-border p-10 rounded-[2rem] shadow-xl space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Acme Inc."
                      className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-60">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your goals, timeline, and any specific needs..."
                      className="w-full bg-white border border-border rounded-xl p-4 min-h-[150px] focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Inquiry <Send size={18} />
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
