import React, { Component, Fragment } from "react";
import Alert from "../../commons/Alert/LabelAlert";
import {
    Step,
    Stepper,
    StepLabel,
    Typography,
    Button,
    StepConnector,
    FormGroup,
    FormControlLabel,
    Slider,
    Switch,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    Checkbox,
    Grid
} from "@material-ui/core";
import {
    Bookmark as BookmarkIcon,
    BookmarkBorder as BookmarkBorderIcon,
    FiberNew as FiberNewIcon,
    FiberNewOutlined as FiberNewOutlinedIcon
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import config from "../../../constansts/config";
import callApi from "../../../api/sheet";
import * as sheetHelper from "../../../api/sheetHelper";
import { Redirect } from "react-router-dom";
import * as helper from "../../../utility";

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
        wordFilter: [],
        maxLengthWord: 0,
        settings: {
            numberWords: 0,
            examTime: "30",
            examOnline: false
        },
        redirect: false,
        activeStep: 0
    };

    componentDidMount() {
        callApi(config.TABLE_LESSONS).then(resp => {
            this.props.onSetLesson(sheetHelper.getAllLessons(resp));
            callApi(config.TABLE_WORDS).then(wordresp => {
                this.props.onSetWord(sheetHelper.getAllWords(wordresp));
            });
        });
        this.props.onSetSetting({
            allSetting: false,
            lessonIdList: [],
            wordFilter: [],
            settings: {
                numberWords: 0,
                examTime: "0",
                examOnline: false
            }
        });
    }

    handleNext = () => {
        const { activeStep } = this.state;
        if (activeStep === 0) {
            if (
                this.state.lessonIdList === undefined ||
                this.state.lessonIdList.length === 0
            ) {
                return;
            }
            let words = sheetHelper.getWordsByParentId(
                this.props.listWord,
                this.state.lessonIdList
            );
            this.setState({
                wordFilter: words,
                maxLengthWord: words.length
            });
        }
        if (activeStep === 1) {
            if (this.state.settings.numberWords === 0) {
                return;
            }
        }
        this.setState({
            activeStep: activeStep + 1
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;

        if (activeStep === 1) {
            this.setState({
                lessonIdList: [],
                wordFilter: [],
                maxLengthWord: 0
            })
        }

        this.setState({
            activeStep: activeStep - 1
        });
    };

    handleReset = () => {
        this.setState({
            lessonIdList: [],
            wordFilter: [],
            maxLengthWord: 0,
            settings: {
                numberWords: 0,
                examTime: "30",
                examOnline: false
            },
            redirect: false,
            activeStep: 0
        });
    };

    handleFinish = () => {
        this.props.onSetSetting({
            allSetting: true,
            lessonIdList: this.state.lessonIdList,
            wordFilter: this.state.wordFilter,
            settings: this.state.settings
        });
        this.setState({
            redirect: true
        });
    };

    handleChange = e => {
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

    handleRadioChange = event => {
        let value = event.target.value;
        this.setState(prevState => ({
            settings: {
                numberWords: prevState.settings.numberWords,
                examTime: value,
                examOnline: prevState.settings.examOnline
            }
        }));
    };

    handleSwitchChange = e => {
        this.setState(prevState => ({
            settings: {
                numberWords: prevState.settings.numberWords,
                examTime: prevState.settings.examTime,
                examOnline: !prevState.settings.examOnline
            }
        }));
    };

    setupNumberWord = (e, v) => {
        let value = v;
        this.setState(prevState => ({
            settings: {
                numberWords: value,
                examTime: prevState.settings.examTime,
                examOnline: prevState.settings.examOnline
            }
        }));
    };

    getStepContent = (step, listLabel, classes) => {
        switch (step) {
            case 0:
                return (
                    <Fragment>
                        <Typography
                            component="h3"
                            variant="h5"
                            className={classes.titleStep}
                        >
                            {listLabel[step]}
                        </Typography>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel
                                component="legend"
                                focused={false}
                                className={classes.labelSet}
                            >
                                Danh sách các bài kiểm tra:
                            </FormLabel>
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
                                                    onChange={this.handleChange}
                                                />
                                            }
                                            label={`Bài ${lesson.id}: ${lesson.name}`}
                                        />
                                    );
                                })}
                            </FormGroup>
                        </FormControl>
                    </Fragment>
                );
            case 1:
                return (
                    <Fragment>
                        <Typography
                            component="h3"
                            variant="h5"
                            className={classes.titleStep}
                        >
                            {listLabel[step]}
                        </Typography>
                        <FormControl
                            component="fieldset"
                            fullWidth
                            className={classes.setMargin}
                        >
                            <FormLabel
                                component="legend"
                                focused={false}
                                className={classes.labelSet}
                            >
                                Số lượng từ cần kiểm tra:
                            </FormLabel>
                            <FormGroup>
                                <Slider
                                    defaultValue={0}
                                    aria-labelledby="discrete-slider-small-steps"
                                    step={1}
                                    marks={[
                                        { value: 0, label: "0" },
                                        {
                                            value: this.state.maxLengthWord,
                                            label: `${this.state.maxLengthWord}`
                                        }
                                    ]}
                                    min={0}
                                    max={this.state.maxLengthWord}
                                    valueLabelDisplay="on"
                                    onChange={this.setupNumberWord}
                                    classes={{
                                        valueLabel: classes.botLabel,
                                        markLabel: classes.rePosMark
                                    }}
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl
                            component="fieldset"
                            fullWidth
                            className={classes.setMargin}
                        >
                            <FormLabel
                                component="legend"
                                focused={false}
                                className={classes.labelSet}
                            >
                                Thời gian kiểm tra:
                            </FormLabel>
                            <RadioGroup
                                aria-label="speedtime"
                                name="speedtime"
                                value={this.state.settings.examTime}
                                onChange={this.handleRadioChange}
                            >
                                <FormControlLabel
                                    value="30"
                                    control={<Radio color="primary" />}
                                    label="Chậm (30 giây / câu)"
                                />
                                <FormControlLabel
                                    value="15"
                                    control={<Radio color="primary" />}
                                    label="Bình Thường (15 giây / câu)"
                                />
                                <FormControlLabel
                                    value="10"
                                    control={<Radio color="primary" />}
                                    label="Nhanh (10 giây / câu)"
                                />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel
                                component="legend"
                                focused={false}
                                className={classes.labelSet}
                            >
                                Kiểm tra Online
                            </FormLabel>
                            <FormGroup>
                                <Grid
                                    component="label"
                                    container
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Grid item>Tắt</Grid>
                                    <Grid item>
                                        <Switch
                                            checked={
                                                this.state.settings.examOnline
                                            }
                                            onChange={this.handleSwitchChange}
                                            color="primary"
                                            value="true"
                                        />
                                    </Grid>
                                    <Grid item>Bật</Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Fragment>
                );
            default:
                return <div>div</div>;
        }
    };

    render() {
        const { classes } = this.props;
        const listStep = ["Chọn bài cần kiểm tra", "Cấu hình kiểm tra"];

        if (this.state.redirect) {
            return <Redirect to="/exam/start" />;
        }

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
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    className={classes.titleStep}
                                >
                                    Cấu hình bạn chọn là :
                                </Typography>
                                <Typography className={classes.setMargin}>
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
                                <Typography className={classes.setMargin}>
                                    Tổng số từ có trong bài kiểm tra sẽ là :
                                    {` ${this.state.settings.numberWords}`}
                                </Typography>
                                <Typography className={classes.setMargin}>
                                    Tổng thời gian làm bài sẽ là :
                                    {` ${this.state.settings.numberWords} x ${
                                        this.state.settings.examTime
                                    } = ${this.state.settings.numberWords *
                                        this.state.settings
                                            .examTime} giây = ${helper.calcTime(
                                        this.state.settings.numberWords *
                                            this.state.settings.examTime
                                    )}`}
                                </Typography>
                                <Typography>
                                    Tính năng kiểm tra Online :{" "}
                                    {this.state.settings.examOnline
                                        ? "Bật"
                                        : "Tắt"}
                                </Typography>
                                <Alert mainType="info" title="Chú ý" className={classes.marT}>
                                    Bài kiểm tra là dựa trên ý thức cá nhân, bạn
                                    hoàn toàn có thể tra từ điển, dùng google
                                    dịch, hoặc các công cụ khác. Bạn càng nghiêm
                                    túc thì kết quả phản ánh ra càng chính xác
                                    với trình độ thực tế của bạn
                                </Alert>
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
                                    listStep,
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
        onSetSetting: settings => {
            dispatch(actions.setSetting(settings));
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(Settings));
