import React, { Component, Fragment } from 'react';
// import { Switch, Route } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
// import LplusList from '../../components/UI/LessonPlus/List';
import styles from "../../components/UI/Lesson/LessonCss";

class Main extends Component {
    render() {
        const { match, classes } = this.props;

        return (
            <Fragment>
                {/* <LplusList match={match.match} /> */}
                <div className={classes.mainContent}></div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Main);