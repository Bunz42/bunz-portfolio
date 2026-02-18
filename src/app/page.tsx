"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroAnimation from "@/components/IntroAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";

/*
 * Intro flow:
 *   "slashing"       → slash X animation plays over black
 *   "backdrop-reveal" → shards break away, backdrop video shown unblurred, no content
 *   "ready"          → backdrop blurs, content + navbar fade in
 */
type IntroPhase = "slashing" | "backdrop-reveal" | "ready";

export default function Home() {
  const [phase, setPhase] = useState<IntroPhase>("slashing");

  // When slash animation completes, show raw backdrop for 2s then go to ready
  const handleSlashComplete = () => {
    setPhase("backdrop-reveal");
  };

  useEffect(() => {
    if (phase === "backdrop-reveal") {
      const timer = setTimeout(() => setPhase("ready"), 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <>
      <AnimatedBackground blurred={phase === "ready"} />
      <IntroAnimation onComplete={handleSlashComplete} />
      {phase === "ready" && <Navbar />}

      <AnimatePresence>
        {phase === "ready" && (
          <motion.main
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
