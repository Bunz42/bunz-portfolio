"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroAnimation from "@/components/IntroAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <AnimatedBackground blurred={ready} />
      <IntroAnimation onComplete={() => setReady(true)} />
      {ready && <Navbar />}

      <AnimatePresence>
        {ready && (
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
