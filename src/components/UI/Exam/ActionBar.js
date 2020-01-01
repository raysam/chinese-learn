import React, { Component } from 'react';
import styles from './ExamCss';
import { withStyles, Typography, Button } from '@material-ui/core';

class ActionBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.actionBar}>
                <Typography component="span" className={classes.timer}>Thời gian kiểm tra: 42:29</Typography>
                <div className={classes.rightSide}>
                    <Button variant="contained" color="primary">
                        Tạm dừng
                    </Button>
                    <Button variant="contained" color="primary">
                        Nộp Bài
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ActionBar);