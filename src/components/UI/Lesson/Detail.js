import React, { Component, Fragment } from 'react';
import styles from "./LessonCss";
import { withStyles, Grid } from "@material-ui/core";
import WordItem from "../Word/Item";
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// import config from "../../../constansts/config";
// import callApi from '../../../api/sheet';
import * as sheetHelper from '../../../api/sheetHelper';


class Detail extends Component {

    render() {
        const { listWord, listLesson, match } = this.props;
        let lesson = sheetHelper.getLessonBySlug(listLesson, match.params.slug);
        
        const words = (lesson) ? sheetHelper.getWordsByParentId(listWord, [lesson.id]) : [];

        const wordUI = (!words) ? "" : words.map((word, index) => {
            return (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
                    <WordItem id={word.id} pinyin={word.pinyin} mean={word.mean} note={word.note} word={word.word} mword={word.mword} />
                </Grid>
            )
        });

        return (
            <Fragment>
                <Grid container spacing={2} alignItems="stretch">
                    {wordUI}
                </Grid>
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        listLesson: state.allLession,
        listWord: state.allWord
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onGetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        },
        onGetWord: word => {
            dispatch(actions.setAllWord(word));
        }
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Detail));