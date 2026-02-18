"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Coffee,
    Database,
    FileCode,
    Globe,
    Layers,
    Mail,
    Palette,
    Sparkles,
    Terminal,
    Triangle,
} from "lucide-react";

interface TechItem {
    name: string;
    icon: React.ReactNode;
}

const languages: TechItem[] = [
    { name: "Java", icon: <Coffee size={22} /> },
    { name: "Python", icon: <Terminal size={22} /> },
    { name: "C++", icon: <Code2 size={22} /> },
    { name: "HTML", icon: <Globe size={22} /> },
    { name: "CSS", icon: <Palette size={22} /> },
    { name: "JavaScript", icon: <FileCode size={22} /> },
];

const frameworks: TechItem[] = [
    { name: "React", icon: <Layers size={22} /> },
    { name: "Next.js", icon: <Globe size={22} /> },
    { name: "Tailwind CSS", icon: <Palette size={22} /> },
    { name: "Framer Motion", icon: <Sparkles size={22} /> },
    { name: "NodeMailer", icon: <Mail size={22} /> },
    { name: "Vercel", icon: <Triangle size={22} /> },
    { name: "SQL", icon: <Database size={22} /> },
];

function TechCard({
    item,
    index,
    fromLeft,
}: {
    item: TechItem;
    index: number;
    fromLeft: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="glow-border flex items-center gap-4 px-5 py-4 rounded-2xl border border-red-500/15 bg-white/[0.04] backdrop-blur-sm hover:border-accent/25 hover:bg-accent/[0.06] transition-colors duration-300 group cursor-default"
        >
            <span className="text-red-400/60 group-hover:text-accent transition-colors duration-300">
                {item.icon}
            </span>
            <span className="text-sm font-semibold tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300">
                {item.name}
            </span>
        </motion.div>
    );
}

export default function TechStack() {
    return (
        <section id="skills" className="relative py-24 md:py-32 px-6">
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-medium tracking-tight text-white/60 mb-4">
                        Tech Stack
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                        My{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h2>
                    <p className="text-white/45 text-sm md:text-base tracking-tight max-w-md mx-auto">
                        The tools and languages I work with.
                    </p>
                </motion.div>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Languages column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-lg md:text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2"
                        >
                            <span className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
                            Languages
                        </motion.h3>
                        <div className="flex flex-col gap-3">
                            {languages.map((item, i) => (
                                <TechCard
                                    key={item.name}
                                    item={item}
                                    index={i}
                                    fromLeft={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks & Tools column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-lg md:text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2"
                        >
                            <span className="w-8 h-px bg-gradient-to-r from-accent-light to-transparent" />
                            Frameworks & Tools
                        </motion.h3>
                        <div className="flex flex-col gap-3">
                            {frameworks.map((item, i) => (
                                <TechCard
                                    key={item.name}
                                    item={item}
                                    index={i}
                                    fromLeft={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
