"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    href: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    tags,
    href,
    index,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX(((y - centerY) / centerY) * -8);
        setRotateY(((x - centerX) / centerX) * 8);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: isHovered ? "none" : "transform 0.5s ease-out",
            }}
            className="group relative glow-border rounded-2xl border border-red-500/15 bg-white/[0.04] backdrop-blur-sm overflow-hidden cursor-pointer"
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
        >
            {/* Hover glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background:
                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(220,38,38,0.06), transparent 40%)",
                }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-accent-light transition-colors duration-300">
                        {title}
                    </h3>
                    <span className="p-2 rounded-lg border border-white/[0.10] text-white/30 group-hover:text-accent group-hover:border-accent/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight size={16} />
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 tracking-tight leading-relaxed mb-6">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium tracking-tight border border-white/[0.10] text-white/50 bg-white/[0.04]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
