import React, { useRef, useEffect, useCallback } from "react";

/**
 * TriangleBackground
 * ------------------
 * Renders scattered abstract triangles on a full-screen fixed canvas.
 * - Triangles glow when the mouse cursor hovers near them.
 * - Parallax offset: triangles shift subtly as the user scrolls.
 * - Fully GPU-composited (position:fixed + transform) for 60fps.
 */

// ── Helpers ──────────────────────────────────────────────
function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

function generateTriangles(width, height, count) {
    const triangles = [];
    // Palette matching materialDarkTheme
    const palette = [
        { r: 34, g: 211, b: 238 },  // cyan  #22D3EE
        { r: 99, g: 102, b: 241 },  // indigo #6366F1
        { r: 129, g: 140, b: 248 }, // light indigo #818CF8
        { r: 168, g: 162, b: 245 }, // soft violet
        { r: 200, g: 200, b: 220 }, // silver-grey
    ];

    for (let i = 0; i < count; i++) {
        const cx = randomBetween(0, width);
        const cy = randomBetween(0, height);
        const size = randomBetween(14, 70);
        const color = palette[Math.floor(Math.random() * palette.length)];
        const baseOpacity = randomBetween(0.02, 0.08);
        const rotation = randomBetween(0, Math.PI * 2);
        const parallaxDepth = randomBetween(0.02, 0.12); // how much it moves on scroll
        const filled = Math.random() > 0.35; // 65% filled, 35% outline-only

        // Generate 3 vertices relative to center
        const vertices = [];
        for (let v = 0; v < 3; v++) {
            const angle = rotation + (v * (Math.PI * 2)) / 3;
            vertices.push({
                x: Math.cos(angle) * size,
                y: Math.sin(angle) * size,
            });
        }

        triangles.push({
            cx,
            cy,
            size,
            color,
            baseOpacity,
            rotation,
            parallaxDepth,
            filled,
            vertices,
            currentOpacity: baseOpacity,
        });
    }

    // Sort by size so smaller (farther away) triangles are drawn first
    triangles.sort((a, b) => a.size - b.size);
    return triangles;
}

export default function TriangleBackground({ theme }) {
    const canvasRef = useRef(null);
    const trianglesRef = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const scrollRef = useRef(0);
    const animFrameRef = useRef(null);
    const lastSizeRef = useRef({ w: 0, h: 0 });

    const HOVER_RADIUS = 180;
    const TRIANGLE_COUNT_BASE = 280; // for 1920×1080

    // ── Regenerate triangles on resize ─────────────────────
    const rebuild = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const w = window.innerWidth;
        const h = document.documentElement.scrollHeight || window.innerHeight;

        canvas.width = w * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Scale triangle count by viewport area
        const area = w * h;
        const refArea = 1920 * 1080;
        const count = Math.round(TRIANGLE_COUNT_BASE * (area / refArea));

        trianglesRef.current = generateTriangles(w, h, Math.min(count, 600));
        lastSizeRef.current = { w, h };
    }, []);

    // ── Draw loop ─────────────────────────────────────────
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const W = canvas.width;
        const H = canvas.height;

        ctx.clearRect(0, 0, W, H);
        ctx.save();
        ctx.scale(dpr, dpr);

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const scrollY = scrollRef.current;
        const viewH = window.innerHeight;

        trianglesRef.current.forEach((tri) => {
            // Parallax: shift triangle y position based on scroll
            const offsetY = -scrollY * tri.parallaxDepth;
            const screenY = tri.cy + offsetY;

            // Only draw if visible on screen (with margin)
            if (screenY < -100 || screenY > viewH + 100) return;

            // Distance from mouse to triangle center (on screen)
            const dx = mx - tri.cx;
            const dy = my - screenY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Glow on hover
            let targetOpacity = tri.baseOpacity;
            let glowStrength = 0;
            if (dist < HOVER_RADIUS) {
                const proximity = 1 - dist / HOVER_RADIUS;
                targetOpacity = tri.baseOpacity + proximity * 0.35;
                glowStrength = proximity;
            }

            // Smooth opacity transition
            tri.currentOpacity += (targetOpacity - tri.currentOpacity) * 0.12;

            const { r, g, b } = tri.color;

            ctx.save();
            ctx.translate(tri.cx, screenY);



            // Draw triangle
            ctx.beginPath();
            ctx.moveTo(tri.vertices[0].x, tri.vertices[0].y);
            ctx.lineTo(tri.vertices[1].x, tri.vertices[1].y);
            ctx.lineTo(tri.vertices[2].x, tri.vertices[2].y);
            ctx.closePath();

            if (tri.filled) {
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${tri.currentOpacity})`;
                ctx.fill();
            } else {
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${tri.currentOpacity * 1.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            ctx.restore();
        });

        ctx.restore();
        animFrameRef.current = requestAnimationFrame(draw);
    }, []);

    // ── Lifecycle ─────────────────────────────────────────
    useEffect(() => {
        rebuild();

        const onResize = () => rebuild();
        const onMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const onMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };
        const onScroll = () => {
            scrollRef.current = window.scrollY;
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("scroll", onScroll, { passive: true });

        animFrameRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("scroll", onScroll);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [rebuild, draw]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                pointerEvents: "none",
            }}
            aria-hidden="true"
        />
    );
}
