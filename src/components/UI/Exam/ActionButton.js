import React, { Component, Fragment } from 'react';
import styles from './ExamCss';
import { withStyles, Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Fab, Tooltip, ClickAwayListener } from '@material-ui/core';
import { Pets as PetsIcon, Send as SendIcon, Add as AddIcon, DoneAll as DoneAllIcon } from '@material-ui/icons';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { Link } from 'react-router-dom';

const SendButton = withStyles(theme => ({
    root: {
      color: '#fff',
      backgroundColor: theme.colorSet.ufoGreen,
      '&:hover': {
        backgroundColor: theme.colorSet.ufoGreenLight
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: theme.colorSet.ufoGreenDark,
        borderColor: theme.colorSet.ufoGreenDark
      }
    }
}))(Fab);

const CheckButton = withStyles(theme => ({
    root: {
      color: '#fff',
      backgroundColor: theme.colorSet.tomato,
      '&:hover': {
        backgroundColor: theme.colorSet.coral
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: theme.colorSet.coral,
        borderColor: theme.colorSet.coral
      }
    }
}))(Fab);

class ActionButton extends Component {

    state = {
        open: false,
        openCheck: false,
        actionOpen: false
    }
    
    endExam = () => {
        this.props.onSetStatus();
    }

    checkEndExam = () => {
        this.props.onCheckExam();
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

    handleCheckOpen = () => {
        this.setState({
            openCheck: true
        })
      };
    
    handleCheckClose = () => {
        this.setState({
            openCheck: false
        })
    };

    handleActionToggle = () => {
        this.setState(prevState => ({
            actionOpen: !prevState.actionOpen
        }))
    }

    handleActionFalse = () => {
        this.setState({actionOpen: false});
    }
    
    render() {
        const { classes, examStatus, examSettings, examCheck } = this.props;

        return (
            <div className={classes.actionBtn}>
                <ClickAwayListener onClickAway={this.handleActionFalse}>
                    <Tooltip title="Thao Tác" placement="left">
                        <Fab size="small" color="primary" aria-label="Action" onClick={this.handleActionToggle}>
                            <PetsIcon fontSize="small"/>
                        </Fab>
                    </Tooltip>
                </ClickAwayListener>
                <div className={classes.miniPanel+((this.state.actionOpen) ? " active": '')}>
                    {
                        (!examStatus) ?
                        (
                            <Fragment>
                                <Tooltip title="Nộp Bài" placement="left">
                                    <SendButton size="small" aria-label="Nộp Bài" onClick={this.handleClickOpen}>
                                        <SendIcon fontSize="small" />
                                    </SendButton>
                                </Tooltip>
                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="end-title"
                                    aria-describedby="end-description"
                                >
                                    <DialogTitle id="end-title">{"Bạn muốn nộp bài không ?"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="end-description">
                                            Sau khi nộp bài thì không thể làm tiếp bài. bạn có chắc chắn nộp bài không ?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="default">
                                            Hủy
                                        </Button>
                                        <Button onClick={this.endExam} color="primary" autoFocus>
                                            Nộp
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Fragment>
                        ) :
                        (
                            <Fragment>
                                {
                                    (examSettings.settings.examOnline && !examCheck) ?
                                    (<Fragment>
                                        <Tooltip title="Chấm điểm" placement="left">
                                            <CheckButton size="small" aria-label="Chấm điểm" onClick={this.handleCheckOpen}>
                                                <DoneAllIcon fontSize="small" />
                                            </CheckButton>
                                        </Tooltip>
                                        <Dialog
                                            open={this.state.openCheck}
                                            onClose={this.handleCheckClose}
                                            aria-labelledby="check-title"
                                            aria-describedby="check-description"
                                        >
                                            <DialogTitle id="check-title">{"Quy tác chấm điểm như sau:"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="check-description">
                                                    Điểm cho 1 câu = tổng số câu / 100.<br/>
                                                    100 điểm là cao nhất, 0 điểm là thấp nhất.<br/>
                                                    Do cấu hình là bạn tự chọn nên việc chia điểm sẽ có số lẻ.<br/>
                                                    Cho nên điểm số cũng sẽ ko được làm tròn lên hay hay làm tròn xuống.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={this.handleCheckClose} color="default">
                                                    Hủy bỏ
                                                </Button>
                                                <Button onClick={this.checkEndExam} color="primary" autoFocus>
                                                    Xác nhận
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Fragment>) : ''
                                }
                                
                                <Tooltip title="Làm bài mới" placement="left">
                                    <SendButton component={Link} to="/exam" size="small" aria-label="Làm bài mới">
                                        <AddIcon fontSize="small" />
                                    </SendButton>
                                </Tooltip>
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
        examStatus: state.examStatus,
        examCheck: state.examCheck
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        },
        onCheckExam: () => {
            dispatch(actions.setExamChecked());
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(ActionButton));