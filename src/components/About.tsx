"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const stats = [
    { label: "Projects", value: "6+", icon: <Rocket size={18} /> },
    { label: "Languages", value: "6", icon: <Code2 size={18} /> },
    { label: "Curiosity", value: "∞", icon: <Sparkles size={18} /> },
];

export default function About() {
    const tilt = useTilt(6);

    return (
        <section id="about" className="relative py-24 md:py-32 px-6">
            {/* Background accent */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-medium tracking-tight text-white/60 mb-4">
                        About
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Who is{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                            Bunz
                        </span>
                        ?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div
                        ref={tilt.ref}
                        onMouseMove={tilt.onMouseMove}
                        onMouseEnter={tilt.onMouseEnter}
                        onMouseLeave={tilt.onMouseLeave}
                        style={tilt.style}
                        className="glow-border rounded-2xl border border-red-500/15 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12"
                    >
                        <div className="max-w-2xl mx-auto text-center">
                            <p className="text-white/60 text-sm md:text-base tracking-tight leading-relaxed mb-4">
                                I&apos;m a <span className="text-white font-medium">1st-year university student</span>{" "}
                                on a mission to become a full-stack software engineer. I love turning
                                abstract ideas into real, working products — whether that&apos;s a website
                                for a local business or a Discord bot with its own economy.
                            </p>
                            <p className="text-white/60 text-sm md:text-base tracking-tight leading-relaxed mb-8">
                                When I&apos;m not coding, you&apos;ll find me exploring new tech, breaking things
                                on purpose (to learn how they work), and building side projects that are
                                arguably <span className="text-accent-light font-medium">way too ambitious</span> for
                                a first-year. That&apos;s kind of the point though.
                            </p>

                            {/* Stats */}
                            <div className="flex items-center justify-center gap-8 md:gap-12">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <span className="text-accent/60">{stat.icon}</span>
                                        <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs tracking-tight text-white/40">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
