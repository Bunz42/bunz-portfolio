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
const DISCORD = "sleepybunz";

export default function Contact() {
    const [copied, setCopied] = useState<"" | "email" | "discord">("");

    const copyToClipboard = (text: string, type: "email" | "discord") => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 px-6">

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
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 pb-4">
                        Let&apos;s{" "}
                        <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
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
                        onClick={() => copyToClipboard(EMAIL, "email")}
                        className="glow-border group flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/15 bg-white/[0.04] text-white/50 hover:text-white hover:border-accent/25 hover:bg-accent/[0.06] transition-all duration-300 cursor-pointer"
                    >
                        {copied === "email" ? <Check size={20} className="text-green-400" /> : <Mail size={20} />}
                        <span className="text-sm font-medium tracking-tight hidden sm:inline">
                            {copied === "email" ? "Copied!" : EMAIL}
                        </span>
                        {copied !== "email" && <span className="text-sm font-medium tracking-tight sm:hidden">Email</span>}
                    </button>

                    {/* Copy Discord button */}
                    <button
                        onClick={() => copyToClipboard(DISCORD, "discord")}
                        className="glow-border group flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/15 bg-white/[0.04] text-white/50 hover:text-white hover:border-accent/25 hover:bg-accent/[0.06] transition-all duration-300 cursor-pointer"
                    >
                        {copied === "discord" ? <Check size={20} className="text-green-400" /> : <img src="/discord.svg" alt="Discord" className="w-5 h-5 invert opacity-50 group-hover:opacity-100 transition-opacity" />}
                        <span className="text-sm font-medium tracking-tight hidden sm:inline">
                            {copied === "discord" ? "Copied!" : DISCORD}
                        </span>
                        {copied !== "discord" && <span className="text-sm font-medium tracking-tight sm:hidden">Discord</span>}
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
