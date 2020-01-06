import React, { Component, Fragment } from 'react';
import styles from './ExamCss';
import { withStyles, Typography, Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from '@material-ui/core';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { Link } from 'react-router-dom';
import Timer from './Timer';

class ActionBar extends Component {

    state = {
        open: false
    }

    componentDidMount = () => {
        this.props.onSetStatusFalse();
    }
    
    endExam = () => {
        this.props.onSetStatus();
    }
    
    handleClickOpen = () => {
        this.setState({
            open: true
        })
      };
    
    handleClose = () => {
        this.setState({
            open: false
        })
    };
    
    render() {
        const { classes, examSettings, examStatus } = this.props;

        let seconds = examSettings.settings.numberWords*examSettings.settings.examTime;

        return (
            <div className={classes.actionBar}>
                <Typography component="span" className={classes.timer}>Thời gian kiểm tra: <Timer second={seconds} statis={this.examStatus} /></Typography>
                <div className={classes.rightSide}>
                    {/* <Button variant="contained" color="primary">
                        Tạm dừng
                    </Button> */}
                    {
                        (!examStatus) ?
                        (
                            <Fragment>
                                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Nộp Bài</Button>
                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Bác có chắc là muốn nộp bài không ?"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Sau khi nộp bài thì không thể làm tiếp bài. bạn có xác nhận
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="default">
                                            Hủy bỏ
                                        </Button>
                                        <Button onClick={this.endExam} color="primary" autoFocus>
                                            Xác nhận
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Fragment>
                        ) :
                        (
                            <Fragment>
                                <Button component={Link} to="/exam" variant="contained" color="primary" >Làm bài mới</Button>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return {
        examSettings: state.examSettings,
        examStatus: state.examStatus
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        },
        onSetStatusFalse: () => {
            dispatch(actions.setExamStatusFalse());
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(ActionBar));