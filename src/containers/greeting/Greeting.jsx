import React, { useEffect, useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import avatarImg from "../../assets/images/animated_son.png";

function TypewriterText({
    text,
    startDelay = 2200,
    typingSpeed = 70,
    deletingSpeed = 50,
    pause = 1800,
}) {
    const [phase, setPhase] = useState("waiting");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (!text) return;
        let timer = null;

        if (phase === "waiting") {
            timer = window.setTimeout(() => setPhase("typing"), startDelay);
        } else if (phase === "typing") {
            if (charIndex < text.length) {
                timer = window.setTimeout(
                    () => setCharIndex((index) => index + 1),
                    typingSpeed,
                );
            } else {
                timer = window.setTimeout(() => setPhase("deleting"), pause);
            }
        } else if (phase === "deleting") {
            if (charIndex > 0) {
                timer = window.setTimeout(
                    () => setCharIndex((index) => index - 1),
                    deletingSpeed,
                );
            } else {
                timer = window.setTimeout(() => setPhase("typing"), pause);
            }
        }

        return () => window.clearTimeout(timer);
    }, [phase, charIndex, text, startDelay, typingSpeed, deletingSpeed, pause]);

    return (
        <>
            <span className="typewriter-text">{text.slice(0, charIndex)}</span>
            <span className="typewriter-cursor" aria-hidden="true" />
        </>
    );
}

export default function Greeting(props) {
    const theme = props.theme;
    return (
        <div id="greeting-wrapper">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <Fade direction="left" triggerOnce duration={2000}>
                        <div className="greeting-text-div">
                            <div>
                                <h1
                                    className="greeting-text"
                                    style={{ color: theme.highlight }}
                                >
                                    {greeting.title}
                                </h1>
                                {greeting.nickname && (
                                    <h2
                                        className="greeting-nickname"
                                        style={{ color: theme.text }}
                                    >
                                        {greeting.nickname}
                                    </h2>
                                )}
                                <p
                                    className="greeting-text-p subTitle typewriter"
                                    style={{ color: theme.secondaryText }}
                                >
                                    <TypewriterText text={greeting.subTitle} />
                                </p>
                                <SocialMedia theme={theme} />
                                <div className="portfolio-repo-btn-div">
                                    <Button
                                        text="⭐ Star Me On Github"
                                        newTab={true}
                                        href={greeting.portfolio_repository}
                                        theme={theme}
                                        className="portfolio-repo-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="right" triggerOnce duration={2000}>
                        <div className="greeting-image-div">
                            <div className="triangle-avatar-section">
                                <div className="triangle-avatar-wrapper">
                                    {/* Decorative satellite triangles */}
                                    <svg
                                        className="deco-triangle deco-tri-1"
                                        viewBox="0 0 60 52"
                                        fill="none"
                                    >
                                        <polygon
                                            points="30,0 60,52 0,52"
                                            stroke={theme.highlight}
                                            strokeWidth="1.5"
                                            opacity="0.3"
                                        />
                                    </svg>
                                    <svg
                                        className="deco-triangle deco-tri-2"
                                        viewBox="0 0 40 35"
                                        fill="none"
                                    >
                                        <polygon
                                            points="20,0 40,35 0,35"
                                            fill={theme.jacketColor}
                                            opacity="0.15"
                                        />
                                    </svg>
                                    <svg
                                        className="deco-triangle deco-tri-3"
                                        viewBox="0 0 30 26"
                                        fill="none"
                                    >
                                        <polygon
                                            points="15,0 30,26 0,26"
                                            stroke={theme.highlight}
                                            strokeWidth="1"
                                            opacity="0.2"
                                        />
                                    </svg>
                                    <svg
                                        className="deco-triangle deco-tri-4"
                                        viewBox="0 0 50 43"
                                        fill="none"
                                    >
                                        <polygon
                                            points="25,0 50,43 0,43"
                                            fill={theme.highlight}
                                            opacity="0.08"
                                        />
                                    </svg>
                                    <svg
                                        className="deco-triangle deco-tri-5"
                                        viewBox="0 0 35 30"
                                        fill="none"
                                    >
                                        <polygon
                                            points="17.5,0 35,30 0,30"
                                            stroke={theme.jacketColor}
                                            strokeWidth="1"
                                            opacity="0.25"
                                        />
                                    </svg>

                                    {/* Main irregular triangle avatar */}
                                    <svg
                                        className="triangle-avatar-svg"
                                        viewBox="0 0 500 520"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            {/* Triangle clip allowing out-of-bounds at the top */}
                                            <clipPath id="triangle-clip">
                                                <polygon points="0,-50 500,-50 500,40 475,40 260,495 35,90 0,90" />
                                            </clipPath>

                                            {/* Border gradient */}
                                            <linearGradient
                                                id="tri-glow"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={theme.highlight}
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor={
                                                        theme.jacketColor
                                                    }
                                                />
                                            </linearGradient>

                                            {/* Shadow */}
                                            <filter
                                                id="tri-shadow"
                                                x="-50%"
                                                y="-50%"
                                                width="200%"
                                                height="200%"
                                            >
                                                <feDropShadow
                                                    dx="0"
                                                    dy="0"
                                                    stdDeviation="14"
                                                    floodColor={theme.highlight}
                                                    floodOpacity="0.45"
                                                />
                                            </filter>
                                        </defs>

                                        {/* Outer Triangle Border (drawn behind avatar for out-of-bounds effect) */}
                                        <polygon
                                            points="35,90 260,505 475,40"
                                            fill="none"
                                            stroke="url(#tri-glow)"
                                            strokeWidth="3"
                                            strokeLinejoin="round"
                                            filter="url(#tri-shadow)"
                                        />

                                        {/* Inner Triangle Border (double layer effect) */}
                                        <polygon
                                            points="35,90 260,505 475,40"
                                            fill="none"
                                            stroke={theme.text}
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            opacity="1"
                                            style={{
                                                transform: "scale(0.7)",
                                                transformOrigin: "256px 211px",
                                            }}
                                        />

                                        {/* Avatar */}
                                        <image
                                            href={avatarImg}
                                            x="-25"
                                            y="-210"
                                            width="550"
                                            height="720"
                                            clipPath="url(#triangle-clip)"
                                            preserveAspectRatio="xMidYMid slice"
                                        />
                                    </svg>
                                </div>

                                {/* Status + Title + CTA below triangle */}
                                <div className="triangle-avatar-info">
                                    <p
                                        className="avatar-status"
                                        style={{ color: theme.highlight }}
                                    >
                                        <span
                                            className="status-dot"
                                            style={{
                                                backgroundColor:
                                                    theme.highlight,
                                            }}
                                        ></span>
                                        AVAILABLE FOR WORK
                                    </p>
                                    <div className="avatar-cta-buttons">
                                        <a
                                            className="avatar-btn avatar-btn-primary"
                                            href={greeting.resumeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            CV của tôi
                                        </a>
                                        <a
                                            className="avatar-btn avatar-btn-outline"
                                            href={`#contact`}
                                        >
                                            Liên hệ
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
