import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function Counter({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionVal, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, motionVal]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black font-headline text-primary mb-2 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">{label}</p>
    </div>
  );
}
