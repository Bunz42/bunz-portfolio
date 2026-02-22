"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Insight-Forge",
        description:
            "A serverless, AI-powered dashboard for analyzing customer feedback. Upload CSVs of customer reviews, process them through Amazon Comprehend for sentiment analysis and key phrase extraction, and visualize churn risk in a sleek dark-mode dashboard.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AWS", "Amazon Comprehend", "Amazon S3", "DynamoDB"],
        href: "https://github.com/Bunz42/insight-forge",
    },
    {
        title: "Xi Yang Yang Renovation Site",
        description:
            "A website commissioned by a small local renovation company. Built with Next.js, Tailwind, and Framer Motion to show off their work and get them leads.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "NodeMailer"],
        href: "https://xiyangyangrenovation.vercel.app/",
    },
    {
        title: "Say Cheese! Discord Bot",
        description:
            "A Pokécord-style Discord game bot with a full economy system — catch, trade, and battle your way to the top. Powered by SQLite for persistent data.",
        tags: ["Python", "Discord.py", "SQLite", "Bot"],
        href: "https://github.com/Bunz42/Say-Cheese-Discord-Bot",
    },
    {
        title: "React-Five",
        description:
            "A showcase of my 5-project React challenge: TODO app, Crypto Dashboard, E-commerce store, and more. Building skills one project at a time.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "JavaScript", "Vite"],
        href: "https://github.com/Bunz42/react-five",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 md:py-32 px-6">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-medium tracking-tight text-white/60 mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-white/45 text-sm md:text-base tracking-tight max-w-md mx-auto">
                        Driven by curiosity, built with passion. Here&apos;s what I&apos;ve been working on.
                    </p>
                </motion.div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
