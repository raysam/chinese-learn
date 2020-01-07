import React, { Component, Fragment } from "react";
import WordItem from "./Item";
import { Grid } from "@material-ui/core";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { Redirect } from "react-router-dom";

class List extends Component {

    render() {
        const { examSettings, examStatus, classes } = this.props;

        if ( !examSettings.allSetting ) {
            return <Redirect to="/exam" />;
        }

        let wordReorder = examSettings.wordFilter.sort(() => Math.random() - 0.5);
        wordReorder.splice(examSettings.settings.numberWords);

        return (
            <Fragment>
                <Grid container spacing={3} alignItems="stretch" className={classes.listContainer}>
                    {
                        wordReorder.map((word, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={i}>
                                    <WordItem
                                        pinyin={word.pinyin}
                                        word={word.word}
                                        mword={word.mword}
                                        mean={word.mean}
                                        status={examStatus}
                                    />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Fragment>
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
        onSetSetting: settings => {
            dispatch(actions.setSetting(settings));
        },
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(List));
