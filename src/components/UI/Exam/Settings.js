import React, { Component, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {
    Typography,
    Button,
    StepConnector,
    FormGroup,
    FormControlLabel,
    Slider,
    Switch
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FiberNewOutlinedIcon from "@material-ui/icons/FiberNewOutlined";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import config from "../../../constansts/config";
import callApi from "../../../api/sheet";
import * as sheetHelper from "../../../api/sheetHelper";

const LineConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)"
    },
    active: {
        "& $line": {
            borderColor: "#20b5c5"
        }
    },
    completed: {
        "& $line": {
            borderColor: "#20b5c5"
        }
    },
    line: {
        borderColor: "#eaeaf0",
        borderTopWidth: 2,
        borderRadius: 1
    }
})(StepConnector);

const RedCheckbox = withStyles({
    root: {
        color: red[400],
        "&$checked": {
            color: red[600]
        }
    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);

class Settings extends Component {
    state = {
        lessonIdList: [],
        maxLengthWord: 0,
        settings: {
            numberWords: 0,
            examOnline: false
        },
        activeStep: 0
    };

    componentDidMount() {
        callApi(config.TABLE_LESSONS).then(resp => {
            this.props.onSetLesson(sheetHelper.getAllLessons(resp));
            callApi(config.TABLE_WORDS).then(wordresp => {
                this.props.onSetWord(sheetHelper.getAllWords(wordresp));
            });
        });
    }

    handleNext = () => {
        const { activeStep } = this.state;
        if (activeStep === 0) {
            let words = sheetHelper.getWordsByParentId(
                this.props.listWord,
                this.state.lessonIdList
            );
            this.setState({
                maxLengthWord: words.length
            });
        }
        this.setState({
            activeStep: activeStep + 1
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1
        });
    };

    handleReset = () => {
        this.setState({
            lessonIdList: [],
            maxLengthWord: 0,
            settings: {
                numberWords: 0,
                examOnline: false
            },
            activeStep: 0
        });
    };

    handleFinish = () => {
        alert('dc roi')
    }

    handeChange = e => {
        const { value, checked } = e.target;

        if (checked) {
            this.setState(prevState => ({
                lessonIdList: [...prevState.lessonIdList, value]
            }));
        } else {
            this.setState(prevState => ({
                lessonIdList: prevState.lessonIdList.filter(
                    item => item !== value
                )
            }));
        }
    };

    setupNumberWord = (e, v) => {
        this.setState({
            settings: {
                numberWords: v
            }
        });
    };

    getStepContent = (step, classes) => {
        switch (step) {
            case 0:
                return (
                    <form>
                        <FormGroup row>
                            {this.props.listLesson.map((lesson, i) => {
                                return (
                                    <FormControlLabel
                                        key={i}
                                        control={
                                            <RedCheckbox
                                                icon={
                                                    this.props.listLesson
                                                        .length ===
                                                    i + 1 ? (
                                                        <FiberNewOutlinedIcon />
                                                    ) : (
                                                        <BookmarkBorderIcon />
                                                    )
                                                }
                                                checkedIcon={
                                                    this.props.listLesson
                                                        .length ===
                                                    i + 1 ? (
                                                        <FiberNewIcon />
                                                    ) : (
                                                        <BookmarkIcon />
                                                    )
                                                }
                                                value={lesson.id}
                                                name="bai"
                                                onChange={this.handeChange}
                                            />
                                        }
                                        label={`Bài ${lesson.id}: ${lesson.name}`}
                                    />
                                );
                            })}
                        </FormGroup>
                    </form>
                );
            case 1:
                return (
                    <Fragment>
                        <FormGroup row>
                            <Typography
                                component="label"
                                className={classes.labelSetting}
                            >
                                Số lượng từ cần kiểm tra:
                            </Typography>
                            <Slider
                                defaultValue={0}
                                aria-labelledby="discrete-slider-small-steps"
                                step={1}
                                marks
                                min={0}
                                max={this.state.maxLengthWord}
                                valueLabelDisplay="on"
                                onChange={this.setupNumberWord}
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Typography
                                component="label"
                                className={classes.labelSetting}
                            >
                                Kiểm tra Online
                            </Typography>
                            <Switch
                                value="true"
                                inputProps={{
                                    "aria-label": "primary checkbox"
                                }}
                                disabled
                            />
                        </FormGroup>
                    </Fragment>
                );
            default:
                return <div>div</div>;
        }
    };

    render() {
        const { classes } = this.props;
        const listStep = ["Chọn bài cần kiểm tra", "Cấu hình kiểm tra"];
        return (
            <Fragment>
                <Stepper
                    activeStep={this.state.activeStep}
                    alternativeLabel
                    className={classes.noBgStep}
                    connector={<LineConnector />}
                >
                    {listStep.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.stepContent}>
                    {this.state.activeStep === listStep.length ? (
                        <Fragment>
                            <div className={classes.selectLesson}>
                                <Typography component="h4" variant="h4">
                                    Cấu hình bạn chọn là :
                                </Typography>
                                <Typography>
                                    Bài cần kiểm tra: <br />
                                    {this.state.lessonIdList
                                        .sort()
                                        .map((id, i) => (
                                            <Fragment key={i}>
                                                <label>Bài {id} </label>
                                                <br />
                                            </Fragment>
                                        ))}
                                </Typography>
                                <Typography>
                                    Tổng số từ có trong bài kiểm tra sẽ là :{" "}
                                    {this.state.settings.numberWords}
                                </Typography>
                                <Typography>
                                    Tính năng kiểm tra Online :{" "}
                                    {this.state.settings.examOnline
                                        ? "Bật"
                                        : "Tắt"}
                                </Typography>
                            </div>
                            <div className={classes.btnArea}>
                                <div className={classes.btnBackArea}>
                                    <Button onClick={this.handleReset}>
                                        Làm lại
                                    </Button>
                                </div>
                                <div className={classes.btnNextArea}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleFinish}
                                        >
                                        Bắt đầu
                                    </Button>
                                </div>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className={classes.selectLesson}>
                                {this.getStepContent(
                                    this.state.activeStep,
                                    classes
                                )}
                            </div>
                            <div className={classes.btnArea}>
                                <div className={classes.btnBackArea}>
                                    <Button
                                        disabled={this.state.activeStep === 0}
                                        onClick={this.handleBack}
                                    >
                                        Trở về
                                    </Button>
                                </div>
                                <div className={classes.btnNextArea}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                    >
                                        Tiếp theo
                                    </Button>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        listLesson: state.allLession,
        listWord: state.allWord,
        examSettings: state.examSettings
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        },
        onSetWord: word => {
            dispatch(actions.setAllWord(word));
        },
        onSetSettingStep1: lessonIdList => {
            dispatch(actions.setSettingStep1(lessonIdList));
        },
        onSetSettingStep2: settings => {
            dispatch(actions.setSettingStep2(settings));
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(Settings));
