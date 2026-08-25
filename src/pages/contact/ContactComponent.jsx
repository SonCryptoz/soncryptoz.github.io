import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="contact-main">
                {!this.props.embedded && <Header theme={theme} />}
                <div className="basic-contact">
                    <Fade direction="left" triggerOnce duration={1000}>
                        <div className="contact-heading-div">
                            <div className="contact-heading-img-div">
                                <div className="contact-triangle-wrapper">
                                    {/* Decorative satellite triangles */}
                                    <svg
                                        className="contact-deco-tri contact-deco-1"
                                        viewBox="0 0 50 43"
                                        fill="none"
                                    >
                                        <polygon
                                            points="25,0 50,43 0,43"
                                            stroke={theme.imageHighlight}
                                            strokeWidth="1.5"
                                            opacity="0.3"
                                        />
                                    </svg>
                                    <svg
                                        className="contact-deco-tri contact-deco-2"
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
                                        className="contact-deco-tri contact-deco-3"
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
                                        className="contact-deco-tri contact-deco-4"
                                        viewBox="0 0 44 38"
                                        fill="none"
                                    >
                                        <polygon
                                            points="22,0 44,38 0,38"
                                            fill={theme.imageHighlight}
                                            opacity="0.08"
                                        />
                                    </svg>

                                    {/* Main irregular triangle avatar */}
                                    {/* Main large irregular triangle avatar */}
                                    <svg
                                        className="contact-triangle-svg"
                                        viewBox="0 -40 500 620"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            {/* Triangle clipping area allowing out-of-bounds at the top */}
                                            <clipPath id="contact-triangle-clip">
                                                <polygon points="0,-50 500,-50 500,10 490,10 250,505 10,100 0,100" />
                                            </clipPath>

                                            {/* Gradient for neon border */}
                                            <linearGradient
                                                id="contact-tri-glow"
                                                x1="100%"
                                                y1="0%"
                                                x2="0%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={
                                                        theme.imageHighlight
                                                    }
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor={
                                                        theme.jacketColor
                                                    }
                                                />
                                            </linearGradient>

                                            {/* Glow shadow */}
                                            <filter
                                                id="contact-tri-shadow"
                                                x="-50%"
                                                y="-50%"
                                                width="200%"
                                                height="200%"
                                            >
                                                <feDropShadow
                                                    dx="0"
                                                    dy="4"
                                                    stdDeviation="14"
                                                    floodColor={
                                                        theme.imageHighlight
                                                    }
                                                    floodOpacity="0.35"
                                                />
                                            </filter>
                                        </defs>

                                        {/* Outer Glow border (drawn behind avatar) */}
                                        <polygon
                                            points="490,10 10,100 250,515"
                                            fill="none"
                                            stroke="url(#contact-tri-glow)"
                                            strokeWidth="3"
                                            strokeLinejoin="round"
                                            filter="url(#contact-tri-shadow)"
                                            opacity="0.9"
                                        />

                                        {/* Inner Triangle Border (double layer effect) */}
                                        <polygon
                                            points="490,10 10,100 250,515"
                                            fill="none"
                                            stroke={theme.text}
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            opacity="1"
                                            style={{
                                                transform: "scale(0.7)",
                                                transformOrigin: "250px 208px",
                                            }}
                                        />

                                        {/* Clipped profile image */}
                                        <image
                                            href={
                                                new URL(
                                                    `../../assets/images/${ContactData["profile_image_path"]}`,
                                                    import.meta.url,
                                                ).href
                                            }
                                            x="-20"
                                            y="-136"
                                            width="540"
                                            height="640"
                                            clipPath="url(#contact-triangle-clip)"
                                            preserveAspectRatio="xMidYMid slice"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="contact-heading-text-div">
                                <h1
                                    className="contact-heading-text"
                                    style={{ color: theme.text }}
                                >
                                    {ContactData["title"]}
                                </h1>
                                <p
                                    className="contact-header-detail-text subTitle"
                                    style={{ color: theme.secondaryText }}
                                >
                                    {ContactData["description"]}
                                </p>
                                <SocialMedia theme={theme} />
                                <div className="resume-btn-div">
                                    <Button
                                        text="See My Resume"
                                        newTab={true}
                                        href={greeting.resumeLink}
                                        theme={theme}
                                    />
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="right" triggerOnce duration={1000}>
                        <div className="address-heading-div">
                            <div className="address-heading-text-div">
                                <h1
                                    className="address-heading-text"
                                    style={{ color: theme.text }}
                                >
                                    {addressSection["title"]}
                                </h1>
                                <p
                                    className="contact-header-detail-text subTitle justify"
                                    style={{ color: theme.secondaryText }}
                                >
                                    {addressSection["subtitle"]}
                                </p>
                                <h1
                                    className="address-heading-text"
                                    style={{ color: theme.text }}
                                >
                                    {phoneSection["title"]}
                                </h1>
                                <p
                                    className="contact-header-detail-text subTitle"
                                    style={{ color: theme.secondaryText }}
                                >
                                    {phoneSection["subtitle"]}
                                </p>
                                <div className="address-btn-div">
                                    <Button
                                        text="Google Maps"
                                        newTab={true}
                                        href={addressSection.location_map_link}
                                        theme={theme}
                                    />
                                </div>
                            </div>
                            <div className="contact-heading-img-div">
                                <AddressImg theme={theme} />
                            </div>
                        </div>
                    </Fade>
                </div>
                {!this.props.embedded && (
                    <Footer
                        theme={this.props.theme}
                        onToggle={this.props.onToggle}
                    />
                )}
                {!this.props.embedded && <TopButton theme={this.props.theme} />}
            </div>
        );
    }
}

export default Contact;
