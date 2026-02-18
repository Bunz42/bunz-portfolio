import { useRef, useState, useCallback } from "react";

/**
 * Reusable 3D tilt hook — tracks mouse position over an element
 * and returns rotateX/Y values for a perspective transform.
 *
 * Usage:
 *   const { ref, style, onMouseMove, onMouseEnter, onMouseLeave } = useTilt();
 *   <div ref={ref} style={style} onMouseMove={onMouseMove} ... />
 */
export function useTilt(maxAngle = 8) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const onMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            setRotateX(((y - centerY) / centerY) * -maxAngle);
            setRotateY(((x - centerX) / centerX) * maxAngle);
        },
        [maxAngle]
    );

    const onMouseEnter = useCallback(() => setIsHovered(true), []);

    const onMouseLeave = useCallback(() => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    }, []);

    const style: React.CSSProperties = {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease-out",
    };

    return { ref, style, onMouseMove, onMouseEnter, onMouseLeave, isHovered };
}
