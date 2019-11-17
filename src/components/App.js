import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../commons/Theme";
import Header from "./layout/Header";
import { MainHome } from "./page";

export default class App extends Component {
    render() {
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
}
