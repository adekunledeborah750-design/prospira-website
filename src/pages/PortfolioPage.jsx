import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Game Dev", "SaaS", "Systems"];

const projects = [
  {
    id: 1,
    title: "LanternGolem Migration",
    category: "Game Dev",
    image: "https://picsum.photos/seed/golem/800/1000",
    tags: ["Minecraft Mods", "System Migration", "Optimization"],
    desc: "Migrating complex game systems to stable foundations while preserving original mechanics.",
  },
  {
    id: 2,
    title: "Wang Fei Voice System",
    category: "Systems",
    image: "https://picsum.photos/seed/voice/800/600",
    tags: ["Voice AI", "Backend Migration", "Real-time"],
    desc: "Seamless voice integration for game environments, moving from V1 to V2 infrastructure.",
  },
  {
    id: 3,
    title: "EcoSphere Dashboard",
    category: "SaaS",
    image: "https://picsum.photos/seed/port1/800/1000",
    tags: ["React", "D3.js", "Firebase"],
    desc: "Real-time environmental monitoring platform for global enterprises.",
  },
  {
    id: 4,
    title: "Nebula OS",
    category: "Web",
    image: "https://picsum.photos/seed/port3/800/600",
    tags: ["Next.js", "Three.js"],
    desc: "Immersive 3D operating system for browser-based collaboration.",
  },
  {
    id: 5,
    title: "Pixel Quest",
    category: "Game Dev",
    image: "https://picsum.photos/seed/port4/800/1000",
    tags: ["Unity", "WebGL"],
    desc: "Massively multiplayer online adventure game built for the open web.",
  },
  {
    id: 6,
    title: "Atlas CRM",
    category: "SaaS",
    image: "https://picsum.photos/seed/port6/800/800",
    tags: ["Node.js", "PostgreSQL"],
    desc: "Transforming customer relationships through predictive analytics.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header and Filter Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Selected <br /> Works
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how we've helped startups and game developers build
              world-class digital experiences and stable system architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border-2 ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-white"
                    : "bg-transparent border-border hover:border-primary/50 text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Columns Layout */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all break-inside-avoid"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                    <p className="font-bold text-sm uppercase tracking-widest text-primary mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-3xl font-black font-headline mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 mb-6 text-sm line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 border border-white/20 rounded-full font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors">
                      View Case Study <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
