import React, { Component, Fragment } from 'react';
import styles from './ExamCss';
import { withStyles, Typography, Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as actions from "../../../actions";

class ActionBar extends Component {
    
    endExam = () => {
        this.props.onSetStatus();
    }
    
    render() {
        const { classes, examStatus } = this.props;

        return (
            <div className={classes.actionBar}>
                <Typography component="span" className={classes.timer}>Thời gian kiểm tra: 42:29</Typography>
                <div className={classes.rightSide}>
                    {/* <Button variant="contained" color="primary">
                        Tạm dừng
                    </Button> */}
                    {
                        (!examStatus) ?
                        (<Fragment><Button variant="contained" color="primary" onClick={this.endExam}>Nộp Bài</Button></Fragment>) :
                        ''
                    }
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return {
        examStatus: state.examStatus
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(ActionBar));