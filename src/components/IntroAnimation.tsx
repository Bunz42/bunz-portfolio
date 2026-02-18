"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * Two slashes form an X across the screen, cutting it into 4 triangular shards.
 * Each slash fades to low opacity before the next event.
 *
 * Phases: slash1 → fade1 → slash2 → fade2 → flash → shatter → done
 */

const shards = [
    {
        clipPath: "polygon(0 0, 100% 0, 50% 50%)",
        exit: { y: "-120%", rotate: -12, opacity: 0 },
    },
    {
        clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
        exit: { x: "120%", rotate: 15, opacity: 0 },
    },
    {
        clipPath: "polygon(100% 100%, 0 100%, 50% 50%)",
        exit: { y: "120%", rotate: 10, opacity: 0 },
    },
    {
        clipPath: "polygon(0 100%, 0 0, 50% 50%)",
        exit: { x: "-120%", rotate: -18, opacity: 0 },
    },
];

type Phase = "slash1" | "fade1" | "slash2" | "fade2" | "flash" | "shatter" | "done";

export default function IntroAnimation({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const [phase, setPhase] = useState<Phase>("slash1");

    /* Which phases keep the slashes visible */
    const showSlashes = ["slash1", "fade1", "slash2", "fade2", "flash"].includes(phase);

    return (
        <AnimatePresence>
            {phase !== "done" && (
                <motion.div
                    className="fixed inset-0 z-50 pointer-events-none"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* ── The 4 triangular shards ── */}
                    {shards.map((shard, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 bg-[#050505]"
                            style={{ clipPath: shard.clipPath }}
                            animate={
                                phase === "shatter"
                                    ? shard.exit
                                    : { x: 0, y: 0, rotate: 0, opacity: 1 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: phase === "shatter" ? i * 0.03 : 0,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            onAnimationComplete={() => {
                                if (phase === "shatter" && i === shards.length - 1) {
                                    setPhase("done");
                                    onComplete();
                                }
                            }}
                        />
                    ))}

                    {/* ── Slash lines (SVG) ── */}
                    {showSlashes && (
                        <div className="absolute inset-0" style={{ zIndex: 2 }}>
                            <svg
                                viewBox="0 0 1000 1000"
                                preserveAspectRatio="none"
                                className="absolute inset-0 w-full h-full"
                            >
                                <defs>
                                    <filter
                                        id="slash-glow"
                                        x="-50%"
                                        y="-50%"
                                        width="200%"
                                        height="200%"
                                    >
                                        <feGaussianBlur stdDeviation="6" result="blur" />
                                        <feFlood floodColor="#dc2626" floodOpacity="0.7" />
                                        <feComposite in2="blur" operator="in" />
                                        <feMerge>
                                            <feMergeNode />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Slash 1: top-left → bottom-right */}
                                <motion.line
                                    x1="0"
                                    y1="0"
                                    x2="1000"
                                    y2="1000"
                                    stroke="#dc2626"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    filter="url(#slash-glow)"
                                    initial={{ pathLength: 0, opacity: 1 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: phase === "fade1" || phase === "slash2" || phase === "fade2" || phase === "flash"
                                            ? 0.15
                                            : 1,
                                    }}
                                    transition={
                                        phase === "fade1"
                                            ? { opacity: { duration: 0.25, ease: "easeOut" } }
                                            : { duration: 0.35, ease: [0.65, 0, 0.35, 1] }
                                    }
                                    onAnimationComplete={() => {
                                        if (phase === "slash1") setPhase("fade1");
                                    }}
                                />

                                {/* Slash 1 fade → triggers slash 2 */}
                                {phase === "fade1" && (
                                    <motion.rect
                                        width="0"
                                        height="0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        onAnimationComplete={() => setPhase("slash2")}
                                    />
                                )}

                                {/* Slash 2: top-right → bottom-left */}
                                {["slash2", "fade2", "flash"].includes(phase) && (
                                    <motion.line
                                        x1="1000"
                                        y1="0"
                                        x2="0"
                                        y2="1000"
                                        stroke="#dc2626"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        filter="url(#slash-glow)"
                                        initial={{ pathLength: 0, opacity: 1 }}
                                        animate={{
                                            pathLength: 1,
                                            opacity: phase === "fade2" || phase === "flash" ? 0.15 : 1,
                                        }}
                                        transition={
                                            phase === "fade2"
                                                ? { opacity: { duration: 0.2, ease: "easeOut" } }
                                                : { duration: 0.3, ease: [0.65, 0, 0.35, 1] }
                                        }
                                        onAnimationComplete={() => {
                                            if (phase === "slash2") setPhase("fade2");
                                        }}
                                    />
                                )}

                                {/* Slash 2 fade → triggers flash + shatter */}
                                {phase === "fade2" && (
                                    <motion.rect
                                        width="0"
                                        height="0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        onAnimationComplete={() => {
                                            setPhase("flash");
                                            setTimeout(() => setPhase("shatter"), 80);
                                        }}
                                    />
                                )}
                            </svg>
                        </div>
                    )}

                    {/* ── White flash on impact ── */}
                    {phase === "flash" && (
                        <motion.div
                            className="absolute inset-0"
                            style={{ zIndex: 3 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.7, 0] }}
                            transition={{ duration: 0.15, ease: "linear" }}
                        >
                            <div className="w-full h-full bg-white" />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
