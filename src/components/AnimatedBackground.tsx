"use client";

interface AnimatedBackgroundProps {
    blurred: boolean;
}

export default function AnimatedBackground({ blurred }: AnimatedBackgroundProps) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Looping video backdrop */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    filter: blurred
                        ? "blur(3px) brightness(0.6)"
                        : "blur(0px) brightness(1)",
                    transition: "filter 1.2s ease-in-out",
                }}
            >
                <source src="/backdrop.webm" type="video/webm" />
            </video>

            {/* Dark overlay — fades in with content for contrast */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
                    opacity: blurred ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                }}
            />
        </div>
    );
}
