import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Zap, Rocket } from "lucide-react";

const principles = [
  {
    icon: <Target className="text-primary w-6 h-6" />,
    title: "Preservation",
    desc: "We focus on keeping the original 'feel' and soul of a product intact during major transitions.",
  },
  {
    icon: <ShieldCheck className="text-primary w-6 h-6" />,
    title: "Stability",
    desc: "Building systems that are stable, maintainable, and designed so future changes don't become rewrites.",
  },
  {
    icon: <Zap className="text-primary w-6 h-6" />,
    title: "Precision",
    desc: "Verification of every data flow and system path ensures a practical and technical cutover.",
  },
  {
    icon: <Rocket className="text-primary w-6 h-6" />,
    title: "Scalability",
    desc: "Moving systems from legacy droplets to modern backends ready for growth.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Philosophy Hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]">
              More Than <br /> Migration, <br /> Evolution
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We specialize in preserving the identity of digital products while rebuilding
              them on cleaner, more stable foundations.
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Whether it's migrating Minecraft ecosystems like LanternGolem or moving
              enterprise voice systems like Wang Fei from V1 to V2, our mission is to ensure
              that technical upgrades feel seamless to the user and effortless for the
              developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-square"
          >
            <img
              src="https://picsum.photos/seed/innovation/800/800"
              alt="Digital Innovation and System Evolution"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Built to Last Principles */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6">
              Built to Last
            </h2>
            <p className="text-muted-foreground">
              Our core principles for building maintainable, game-focused, and
              enterprise-grade systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="p-10 bg-white border border-border rounded-3xl hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black font-headline mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upgrade Infrastructure CTA Banner */}
        <div className="bg-secondary text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Let's build a practical and technical roadmap for your next big migration.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-primary text-white rounded-full font-headline font-bold text-xl hover:bg-primary/90 transition-all"
              >
                Start Discovery Phase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
