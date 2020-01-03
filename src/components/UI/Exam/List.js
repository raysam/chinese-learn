import React, { Component, Fragment } from "react";
import WordItem from "./Item";
import { Grid } from "@material-ui/core";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import config from "../../../constansts/config";
import callApi from "../../../api/sheet";
import * as sheetHelper from "../../../api/sheetHelper";
import { Redirect } from "react-router-dom";

class List extends Component {

    componentDidMount() {
        callApi(config.TABLE_WORDS).then(wordresp => {
            this.props.onSetWord(sheetHelper.getAllWords(wordresp));
        });
    }

    render() {
        const { examSettings, examStatus } = this.props;

        if ( !examSettings.allSetting ) {
            return <Redirect to="/exam" />;
        }

        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <WordItem
                            pinyin="lǎoshī"
                            word="老师"
                            mword="老師"
                            mean="thầy, cô"
                            note="note"
                            status={examStatus}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <WordItem
                            pinyin="lǎoshī"
                            word="老师"
                            mword="老師"
                            mean="thầy, cô"
                            note="note"
                            status={examStatus}
                        />
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        listWord: state.allWord,
        examSettings: state.examSettings,
        examStatus: state.examStatus
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetWord: word => {
            dispatch(actions.setAllWord(word));
        },
        onSetSetting: settings => {
            dispatch(actions.setSetting(settings));
        },
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(List));
