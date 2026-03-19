"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        >

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 text-center max-w-4xl mx-auto"
            >


                {/* Name */}
                <motion.h1
                    variants={fadeUp}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-4"
                >
                    <span className="text-white">
                        Raymond
                    </span>
                    <br />
                    <span className="text-accent">
                        Hao
                    </span>
                </motion.h1>

                {/* Alias badge */}
                <motion.div variants={fadeUp} className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent-light text-sm font-medium tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        AKA Bunz
                    </span>
                </motion.div>

                {/* Title */}
                <motion.p
                    variants={fadeUp}
                    className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white/80 mb-3"
                >
                    Software Engineer
                </motion.p>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="text-sm md:text-base text-white/50 max-w-lg mx-auto mb-10 tracking-tight leading-relaxed"
                >
                    1st-year Computer Engineering student. <br></br>
                    I build user interfaces and backends.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-red-700 to-accent text-white font-semibold text-sm tracking-tight transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:scale-105"
                    >
                        <span>View My Work</span>
                        <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 text-white/70 font-semibold text-sm tracking-tight transition-all duration-300 hover:border-accent/30 hover:text-white hover:bg-accent/[0.06]"
                    >
                        <Mail size={16} />
                        <span>Get In Touch</span>
                    </a>
                </motion.div>
            </motion.div>


        </section>
    );
}
