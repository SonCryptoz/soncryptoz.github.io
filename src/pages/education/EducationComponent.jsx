import { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";

class Education extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="education-main">
                {!this.props.embedded && <Header theme={theme} />}
                <div className="basic-education">
                        <div className="heading-div">
                            <Fade direction="left" triggerOnce duration={2000}>
                                <div className="heading-img-div">
                                <EducationImg theme={theme} />
                                </div>
                            </Fade>
                            <Fade direction="right" triggerOnce duration={2000}>
                                <div className="heading-text-div">
                                    <h1
                                        className="heading-text"
                                        style={{ color: theme.text }}
                                    >
                                        Học vấn
                                    </h1>
                                    <h3
                                        className="heading-sub-text"
                                        style={{ color: theme.text }}
                                    >
                                        Chuyên môn và chứng chỉ cơ bản
                                    </h3>
                                    <CompetitiveSites
                                        logos={competitiveSites.competitiveSites}
                                    />
                                </div>
                            </Fade>
                        </div>
                    <Educations theme={this.props.theme} />
                    {certifications.certifications.length > 0 ? (
                        <Certifications theme={this.props.theme} />
                    ) : null}
                </div>
                {!this.props.embedded && <Footer theme={this.props.theme} />}
                {!this.props.embedded && <TopButton theme={this.props.theme} />}
            </div>
        );
    }
}

export default Education;
