import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../commons/Theme";
import MainHome from "./Home/Main";
import Header from "../components/UI/Header/Header";

export default () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header />

                <MainHome />
            </ThemeProvider>
        </React.Fragment>
    );
}
