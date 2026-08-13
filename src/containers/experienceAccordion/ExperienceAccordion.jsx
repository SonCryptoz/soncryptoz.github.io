import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="experience-accord">
                {this.props.sections.map((section) => {
                    return (
                        <div
                            className="experience-section"
                            key={section["title"]}
                            style={{
                                backgroundColor: theme.body,
                                border: `1px solid ${theme.headerColor}`,
                                borderRadius: `10px`,
                                marginBottom: `20px`,
                            }}
                        >
                            <div
                                className="experience-section-title"
                                style={{
                                    color: theme.text,
                                    borderBottom: `1px solid ${theme.headerColor}`,
                                }}
                            >
                                {section["title"]}
                            </div>
                            <div style={{ padding: "15px" }}>
                                {section["experiences"].map(
                                    (experience, index) => {
                                        return (
                                            <ExperienceCard
                                                key={index}
                                                index={index}
                                                totalCards={
                                                    section["experiences"]
                                                        .length
                                                }
                                                experience={experience}
                                                theme={theme}
                                            />
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceAccordion;
