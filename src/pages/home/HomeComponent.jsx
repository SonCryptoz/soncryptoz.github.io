import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
    render() {
        return (
            <div>
                {!this.props.embedded && <Header theme={this.props.theme} />}
                <Greeting theme={this.props.theme} />
                <Skills theme={this.props.theme} />
                {!this.props.embedded && <Footer theme={this.props.theme} />}
                {!this.props.embedded && <TopButton theme={this.props.theme} />}
            </div>
        );
    }
}

export default Home;
