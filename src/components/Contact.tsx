"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Check, ArrowUpRight } from "lucide-react";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Bunz42",
        icon: <Github size={20} />,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/raymond-hao-b03254375/",
        icon: <Linkedin size={20} />,
    },
];

const EMAIL = "raymond.hao0322@gmail.com";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 px-6">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-3xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-medium tracking-tight text-white/60 mb-4">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                        Let&apos;s{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    <p className="text-white/45 text-sm md:text-base tracking-tight max-w-md mx-auto mb-10">
                        Got a project idea, want to collaborate, or just want to say hi?
                        I&apos;m always down to chat.
                    </p>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center gap-4 mb-16 flex-wrap"
                >
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-border group flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/15 bg-white/[0.04] text-white/50 hover:text-white hover:border-accent/25 hover:bg-accent/[0.06] transition-all duration-300"
                        >
                            {social.icon}
                            <span className="text-sm font-medium tracking-tight hidden sm:inline">
                                {social.label}
                            </span>
                            <ArrowUpRight
                                size={14}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </a>
                    ))}

                    {/* Copy email button */}
                    <button
                        onClick={copyEmail}
                        className="glow-border group flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/15 bg-white/[0.04] text-white/50 hover:text-white hover:border-accent/25 hover:bg-accent/[0.06] transition-all duration-300 cursor-pointer"
                    >
                        {copied ? <Check size={20} className="text-green-400" /> : <Mail size={20} />}
                        <span className="text-sm font-medium tracking-tight hidden sm:inline">
                            {copied ? "Copied!" : EMAIL}
                        </span>
                        {!copied && <span className="text-sm font-medium tracking-tight sm:hidden">Email</span>}
                    </button>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-8 border-t border-white/[0.04]"
                >
                    <p className="text-xs text-white/25 tracking-tight">
                        © {new Date().getFullYear()} Raymond Hao. Built with Next.js,
                        Tailwind CSS & Framer Motion.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
