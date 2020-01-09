import React, { Component } from 'react';
import styles from './ExamCss';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from "react-redux";
import Timer from './Timer';

class CountTime extends Component {
    
    render() {
        const { classes, examSettings } = this.props;

        let seconds = examSettings.settings.numberWords*examSettings.settings.examTime;

        return (
            <div className={classes.timeCount}>
                <Typography component="span" className={classes.timer}>
                    <span className={classes.timeLbl}>Thời gian làm bài:</span>
                    <Timer second={seconds} statis={this.examStatus} />
                </Typography>
            </div>
        );
    }
}

const mapState = state => {
    return {
        examSettings: state.examSettings,
    };
};

export default connect(mapState, null)(withStyles(styles)(CountTime));