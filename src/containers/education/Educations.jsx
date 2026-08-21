import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

class Educations extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="main" id="educations">
                <div className="educations-header-div">
                    <Fade direction="up" triggerOnce duration={2000}>
                        <h1
                            className="educations-header"
                            style={{ color: theme.text }}
                        >
                            Degree Received
                        </h1>
                    </Fade>
                </div>
                <div className="educations-body-div">
                    {degrees.degrees.map((degree, index) => {
                        return (
                            <DegreeCard
                                key={degree.title || index}
                                degree={degree}
                                theme={theme}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Educations;
