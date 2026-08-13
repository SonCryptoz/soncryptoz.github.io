import React, { Component } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router";
import LandingPage from "../pages/landing/LandingPage";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio";

export default class Main extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <Routes>
                    <Route
                        path="/"
                        element={
                            settings.isSplash ? (
                                <Splash theme={this.props.theme} />
                            ) : (
                                <LandingPage theme={this.props.theme} />
                            )
                        }
                    />
                    <Route
                        path="/portfolio"
                        element={<LandingPage theme={this.props.theme} />}
                    />
                    <Route
                        path="/education"
                        element={<Navigate to="/portfolio#education" replace />}
                    />
                    <Route
                        path="/experience"
                        element={<Navigate to="/portfolio#experience" replace />}
                    />
                    <Route
                        path="/projects"
                        element={<Navigate to="/portfolio#projects" replace />}
                    />
                    <Route
                        path="/contact"
                        element={<Navigate to="/portfolio#contact" replace />}
                    />
                    {settings.isSplash && (
                        <Route
                            path="/splash"
                            element={<Splash theme={this.props.theme} />}
                        />
                    )}
                    <Route
                        path="*"
                        element={<Navigate to={settings.isSplash ? "/" : "/portfolio"} replace />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}
