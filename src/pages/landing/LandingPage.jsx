import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Home from "../home/HomeComponent";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";

export default function LandingPage({ theme }) {
    useEffect(() => {
        const sectionId = window.location.hash.slice(1);
        const section = sectionId && document.getElementById(sectionId);

        if (section) requestAnimationFrame(() => section.scrollIntoView());
    }, []);

    return (
        <div className="landing-page">
            <Header theme={theme} />
            <main>
                <section id="home">
                    <Home theme={theme} embedded />
                </section>
                <section id="education">
                    <Education theme={theme} embedded />
                </section>
                <section id="experience">
                    <Experience theme={theme} embedded />
                </section>
                <section id="projects">
                    <Projects theme={theme} embedded />
                </section>
                <section id="contact">
                    <Contact theme={theme} embedded />
                </section>
            </main>
            <Footer theme={theme} />
            <TopButton theme={theme} />
        </div>
    );
}
