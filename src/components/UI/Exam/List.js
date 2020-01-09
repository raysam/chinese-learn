import React, { Component, Fragment } from "react";
import WordItem from "./Item";
import WordItemOnline from "./ItemOnline";
import Alert from "../../commons/Alert/LabelAlert";
import { Grid } from "@material-ui/core";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { Redirect } from "react-router-dom";

class List extends Component {
    state = {
        redirectS: false,
        wordReorder: [],
        correctWord: []
    };

    componentDidMount = () => {
        this.props.onSetStatusFalse();
        this.props.onSetUncheck();
        if (!this.props.examSettings.allSetting) {
            this.setState({
                redirectS: true
            })
        }
        let tempWord = this.props.examSettings.wordFilter.sort(
            () => Math.random() - 0.5
        );
        tempWord.splice(this.props.examSettings.settings.numberWords);
        this.setState({
            wordReorder: tempWord
        })
    };

    onCheckWord = evalue => {
        if (evalue) {
            this.setState(prevState => ({
                correctWord: [...prevState.correctWord, evalue]
            }));
        }
    };

    render() {
        const { examSettings, examCheck, classes } = this.props;

        if (this.state.redirectS) {
            return <Redirect to="/exam" />;
        }

        let lstR = "error";
        if (examCheck) {
            let scores = (100 / examSettings.settings.numberWords) * this.state.correctWord.length;
            console.log(scores);
            lstR = (scores === 100) ? "success" : ((scores <= 90 && scores >= 70) ? "info" : ((scores < 70 && scores >= 50) ? "warning" : "error"))
        }

        return (
            <Fragment>
                {examCheck ? (
                    <Alert mainType={lstR} className={classes.resultScores}>
                        {(100 / examSettings.settings.numberWords) * this.state.correctWord.length} điểm
                    </Alert>
                ) : ""}
                <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    className={classes.listContainer}
                >
                    {this.state.wordReorder.map((word, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                {examSettings.settings.examOnline ? (
                                    <WordItemOnline
                                        wordId={word.id}
                                        pinyin={word.pinyin}
                                        word={word.word}
                                        mword={word.mword}
                                        mean={word.mean}
                                        onCheckWord={this.onCheckWord}
                                    />
                                ) : (
                                    <WordItem
                                        pinyin={word.pinyin}
                                        word={word.word}
                                        mword={word.mword}
                                        mean={word.mean}
                                    />
                                )}
                            </Grid>
                        );
                    })}
                </Grid>
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        examSettings: state.examSettings,
        examCheck: state.examCheck
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetStatusFalse: () => {
            dispatch(actions.setExamStatusFalse());
        },
        onSetUncheck: () => {
            dispatch(actions.setExamUncheck())
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(List));
