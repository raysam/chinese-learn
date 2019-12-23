import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import theme from '../commons/Theme';
import Header from '../components/UI/Header/Header';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './AppCss';
import routes from "./routes";
import { connect } from 'react-redux';
import * as actions from '../actions';
import config from '../constansts/config';
import callApi from '../api/sheet';
import * as sheetHelper from '../api/sheetHelper';

const WHeader = withRouter(Header);

class App extends React.Component {

    componentDidMount() {
        callApi(config.TABLE_LESSONS).then(resp => {
            this.props.onGetLesson(sheetHelper.getAllLessons(resp));
        });
        callApi(config.TABLE_WORDS).then(resp => {
            this.props.onGetWord(sheetHelper.getAllWords(resp));
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <BrowserRouter>
                <React.Fragment>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <WHeader />
                        <Container maxWidth={false} className={classes.root}>
                            <Switch>{this.showMainScreen(routes)}</Switch>
                        </Container>
                    </ThemeProvider>
                </React.Fragment>
            </BrowserRouter>
        );
    }

    showMainScreen = routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return result;
    };
}

const mapState = state => {
    return {
        listLesson: state.allLession,
        listWord: state.allWord
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onGetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        },
        onGetWord: word => {
            dispatch(actions.setAllWord(word));
        }
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(App));
