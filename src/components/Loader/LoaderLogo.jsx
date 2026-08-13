import React from "react";
import "./LoaderLogo.css";

function LoaderLogo({ theme }) {
    // Main triangle vertices (irregular, matching the greeting avatar style)
    const triPoints = "250,30 60,420 440,380";

    return (
        <div className="quantum-splash">
            {/* Floating decorative triangles */}
            <svg
                className="splash-deco splash-deco-1"
                viewBox="0 0 50 43"
                fill="none"
            >
                <polygon
                    points="25,0 50,43 0,43"
                    stroke={theme.highlight}
                    strokeWidth="1.5"
                    opacity="0.3"
                />
            </svg>
            <svg
                className="splash-deco splash-deco-2"
                viewBox="0 0 36 31"
                fill="none"
            >
                <polygon
                    points="18,0 36,31 0,31"
                    fill={theme.jacketColor}
                    opacity="0.15"
                />
            </svg>
            <svg
                className="splash-deco splash-deco-3"
                viewBox="0 0 28 24"
                fill="none"
            >
                <polygon
                    points="14,0 28,24 0,24"
                    stroke={theme.jacketColor}
                    strokeWidth="1"
                    opacity="0.2"
                />
            </svg>
            <svg
                className="splash-deco splash-deco-4"
                viewBox="0 0 44 38"
                fill="none"
            >
                <polygon
                    points="22,0 44,38 0,38"
                    fill={theme.highlight}
                    opacity="0.08"
                />
            </svg>
            <svg
                className="splash-deco splash-deco-5"
                viewBox="0 0 32 28"
                fill="none"
            >
                <polygon
                    points="16,0 32,28 0,28"
                    stroke={theme.highlight}
                    strokeWidth="1"
                    opacity="0.15"
                />
            </svg>

            {/* Main SVG */}
            <svg
                className="quantum-logo-svg"
                viewBox="0 0 500 450"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Gradient for the main triangle border */}
                    <linearGradient
                        id="splash-tri-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor={theme.highlight} />
                        <stop offset="100%" stopColor={theme.jacketColor} />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter
                        id="splash-glow"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="6"
                            result="blur"
                        />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Intense glow for the burst phase */}
                    <filter
                        id="splash-burst"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                    >
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="16"
                            result="blur"
                        />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Outer triangle — draws itself */}
                <polygon
                    className="splash-tri-draw"
                    points={triPoints}
                    fill="none"
                    stroke="url(#splash-tri-grad)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    filter="url(#splash-glow)"
                />

                {/* Inner triangle — draws itself with delay */}
                <polygon
                    className="splash-tri-inner"
                    points="250,104 117,377 383,349"
                    fill="none"
                    stroke={theme.text}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    opacity="1"
                />

                {/* Burst flash triangle — appears briefly on completion */}
                <polygon
                    className="splash-tri-burst"
                    points={triPoints}
                    fill="none"
                    stroke={theme.highlight}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    filter="url(#splash-burst)"
                />

                {/* "NS" Initials */}
                <text
                    className="splash-initials"
                    x="250"
                    y="255"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="60"
                    fontWeight="700"
                    letterSpacing="8"
                    fill={theme.text}
                >
                    NS
                </text>

                {/* Tagline below initials */}
                <text
                    className="splash-tagline"
                    x="250"
                    y="300"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="13"
                    fontWeight="400"
                    letterSpacing="6"
                    fill={theme.highlight}
                >
                    PORTFOLIO
                </text>
            </svg>
        </div>
    );
}

export default LoaderLogo;
