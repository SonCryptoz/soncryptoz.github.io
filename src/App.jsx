import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import CustomCursor from "./components/cursor/CustomCursor";
import TriangleBackground from "./components/triangleBackground/TriangleBackground";

function App() {
    return (
        <ThemeProvider theme={chosenTheme}>
            <>
                <GlobalStyles />
                <TriangleBackground theme={chosenTheme} />
                <CustomCursor theme={chosenTheme} />
                <div>
                    <Main theme={chosenTheme} />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
