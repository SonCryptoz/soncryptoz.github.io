import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = ({ theme }) => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (isHidden) setIsHidden(false);
            
            // Check if hovering over clickable element
            const target = e.target;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const onMouseLeave = () => setIsHidden(true);
        const onMouseEnter = () => setIsHidden(false);

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [isHidden]);

    useEffect(() => {
        let animationFrameId;
        const updateTrailingPosition = () => {
            setTrailingPosition((prev) => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15,
                };
            });
            animationFrameId = requestAnimationFrame(updateTrailingPosition);
        };
        animationFrameId = requestAnimationFrame(updateTrailingPosition);
        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    // Don't render on touch devices where cursor is not needed
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            <div
                className={`custom-cursor-main ${isHovering ? "hovering" : ""} ${isHidden ? "hidden" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    color: theme.highlight,
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ filter: `drop-shadow(0 0 5px ${theme.highlight})` }}>
                    <polygon points="0 0, 18 6, 8 8, 6 18" />
                </svg>
            </div>
            <div
                className={`custom-cursor-trail ${isHovering ? "hovering" : ""} ${isHidden ? "hidden" : ""}`}
                style={{
                    left: `${trailingPosition.x}px`,
                    top: `${trailingPosition.y}px`,
                    color: theme.text,
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ filter: `drop-shadow(0 0 8px ${theme.highlight})` }}>
                    <polygon points="0 0, 18 6, 8 8, 6 18" />
                </svg>
            </div>
        </>
    );
};

export default CustomCursor;
