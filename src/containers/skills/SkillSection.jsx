import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
    if (props.fileName === "DataScienceImg")
        return <DataScienceImg theme={props.theme} />;
    else if (props.fileName === "FullStackImg")
        return <FullStackImg theme={props.theme} />;
    else if (props.fileName === "CloudInfraImg")
        return <CloudInfraImg theme={props.theme} />;
    return <DesignImg theme={props.theme} />;
}

function highlightText(text, theme) {
    if (typeof text !== "string") return text;
    const highlights = [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "Supabase",
        "RESTful APIs",
        "GraphQL APIs",
        "RESTful",
        "APIs",
        "API",
        "SEO",
        "responsive",
        "high-performance",
        "cross-device compatibility",
        "relational and NoSQL databases",
        "authentication",
        "role-based access control",
        "data protection",
        "speed",
    ];
    const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);
    const escaped = sortedHighlights.map((h) =>
        h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (highlights.some((h) => h.toLowerCase() === part.toLowerCase())) {
            return (
                <span
                    key={index}
                    style={{ color: theme.highlight, fontWeight: "bold" }}
                >
                    {part}
                </span>
            );
        }
        return part;
    });
}

class SkillSection extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div>
                {skills.data.map((skill, i) => {
                    if (i % 2 !== 0) {
                        return (
                            <div key={i} className="skills-main-div">
                                <div className="skills-text-div skills-text-div--right">
                                    <Fade direction="left" triggerOnce duration={1000}>
                                        <h1
                                            className="skills-heading right"
                                            style={{ color: theme.text }}
                                        >
                                            {skill.title}
                                        </h1>
                                    </Fade>
                                    <Fade direction="left" triggerOnce duration={1500}>
                                        <SoftwareSkill
                                            logos={skill.softwareSkills}
                                        />
                                    </Fade>
                                    <Fade direction="left" triggerOnce duration={2000}>
                                        <div>
                                            {skill.skills.map(
                                                (skillSentence, i) => {
                                                    return (
                                                        <p
                                                            key={i}
                                                            className="subTitle skills-text"
                                                            style={{
                                                                color:
                                                                    theme.secondaryText,
                                                            }}
                                                        >
                                                            {highlightText(
                                                                skillSentence,
                                                                theme,
                                                            )}
                                                        </p>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </Fade>
                                </div>
                                <Fade direction="right" triggerOnce duration={2000}>
                                    <div className="skills-image-div">
                                        <GetSkillSvg
                                            fileName={skill.fileName}
                                            theme={theme}
                                        />
                                    </div>
                                </Fade>
                            </div>
                        );
                    }
                    return (
                        <div key={i} className="skills-main-div">
                            <Fade direction="left" triggerOnce duration={2000}>
                                <div className="skills-image-div">
                                    <GetSkillSvg
                                        fileName={skill.fileName}
                                        theme={theme}
                                    />
                                </div>
                            </Fade>

                            <div className="skills-text-div">
                                <Fade direction="right" triggerOnce duration={1000}>
                                    <h1
                                        className="skills-heading"
                                        style={{ color: theme.text }}
                                    >
                                        {skill.title}
                                    </h1>
                                </Fade>
                                <Fade direction="right" triggerOnce duration={1500}>
                                    <SoftwareSkill
                                        logos={skill.softwareSkills}
                                    />
                                </Fade>
                                <Fade direction="right" triggerOnce duration={2000}>
                                    <div>
                                        {skill.skills.map(
                                            (skillSentence, i) => {
                                                return (
                                                    <p
                                                        key={i}
                                                        className="subTitle skills-text"
                                                        style={{
                                                            color:
                                                                theme.secondaryText,
                                                        }}
                                                    >
                                                        {highlightText(
                                                            skillSentence,
                                                            theme,
                                                        )}
                                                    </p>
                                                );
                                            },
                                        )}
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SkillSection;
