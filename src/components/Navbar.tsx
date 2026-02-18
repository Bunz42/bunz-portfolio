"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // If scrolled to the bottom, highlight the last section
            const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50;
            if (atBottom) {
                setActiveSection(navLinks[navLinks.length - 1].href.slice(1));
                return;
            }

            const sections = navLinks.map((l) => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500",
                    scrolled
                        ? "bg-white/[0.07] backdrop-blur-2xl border border-white/[0.12] shadow-lg shadow-black/20"
                        : "bg-white/[0.02] backdrop-blur-xl border border-white/[0.05]"
                )}
            >
                {/* Logo */}
                <a
                    href="#home"
                    className="px-4 py-1.5 text-sm font-bold tracking-tight text-white mr-2"
                >
                    <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                        RH
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative px-4 py-1.5 text-sm font-medium tracking-tight transition-colors duration-300 rounded-full",
                                activeSection === link.href.slice(1)
                                    ? "text-white"
                                    : "text-white/50 hover:text-white"
                            )}
                        >
                            {activeSection === link.href.slice(1) && (
                                <motion.span
                                    layoutId="navbar-active"
                                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </motion.nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl md:hidden flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className={cn(
                                        "text-2xl font-semibold tracking-tight transition-colors",
                                        activeSection === link.href.slice(1)
                                            ? "text-white"
                                            : "text-white/40 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
