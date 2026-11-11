import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CircleHelp, Check, ArrowRight } from "lucide-react";
import Button from "../components/Button";

const projectTypes = [
  { id: "web", name: "Web Development", basePrice: 5000 },
  { id: "mobile", name: "Mobile App", basePrice: 8000 },
  { id: "saas", name: "SaaS Platform", basePrice: 12000 },
  { id: "uiux", name: "UI/UX Design", basePrice: 3000 },
];

const keyFeatures = [
  { id: "auth", name: "User Authentication", price: 1500 },
  { id: "payment", name: "Payment Integration", price: 2000 },
  { id: "ai", name: "AI Chatbot/Agent", price: 3500 },
  { id: "cloud", name: "Cloud Infrastructure", price: 2500 },
];

export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState(projectTypes[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const currentType = projectTypes.find((p) => p.id === selectedType);
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = keyFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);
  const grandTotal = (currentType ? currentType.basePrice : 0) + featuresTotal;

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Digital <br /> Solutions <br /> Built for Scale
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From strategic discovery to high-performance development, we offer a
              comprehensive suite of services designed to accelerate your growth.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-video lg:aspect-square"
          >
            <img
              src="https://picsum.photos/seed/services-concept/1000/800"
              alt="Premium digital solutions concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Interactive Scope & Pricing Calculator */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            {/* Step 1 */}
            <div>
              <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                1. Select Project Type{" "}
                <CircleHelp size={18} className="text-muted-foreground" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${
                      selectedType === type.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-bold block mb-1">{type.name}</span>
                    <span className="text-xs uppercase tracking-widest opacity-60">
                      Starting at ${type.basePrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                2. Add Key Features{" "}
                <CircleHelp size={18} className="text-muted-foreground" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${
                        isChecked
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div>
                        <span className="font-bold block mb-1">{feat.name}</span>
                        <span className="text-xs uppercase tracking-widest opacity-60">
                          +${feat.price.toLocaleString()}
                        </span>
                      </div>
                      {isChecked && <Check size={20} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Estimate Summary */}
          <div className="sticky top-32 bg-secondary text-white p-10 rounded-[2rem] border border-white/10 shadow-2xl">
            <h4 className="font-headline font-bold text-xl mb-8 uppercase tracking-widest text-primary">
              Estimate Summary
            </h4>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span>Base Project</span>
                <span className="font-bold">${currentType?.basePrice.toLocaleString()}</span>
              </div>
              {selectedFeatures.map((featId) => {
                const feat = keyFeatures.find((f) => f.id === featId);
                return (
                  <div key={featId} className="flex justify-between items-center text-sm">
                    <span>{feat?.name}</span>
                    <span className="font-bold text-primary">+${feat?.price.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-white/60 text-sm">Estimated Total</span>
                <span className="text-4xl font-black font-headline">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <Link to="/contact">
              <Button className="w-full">
                Start with This Scope <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
