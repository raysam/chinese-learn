import React, { Component } from 'react';
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
        const { listWord, listLesson, classes, match } = this.props;
        let lesson = sheetHelper.getLessonBySlug(listLesson, match.params.slug);
        
        const words = (lesson) ? sheetHelper.getWordsByParentId(listWord, [lesson.id]) : [];

        console.log(words)
        const wordUI = (!words) ? "" : words.map((word, index) => {
            return (
                <Grid item xs={3} key={index}>
                    <WordItem id={word.id} pinyin={word.pinyin} mean={word.mean} note={word.note} word={word.word} mword={word.mword} />
                </Grid>
            )
        });

        return (
            <div className={classes.abc}>
                <Grid container spacing={2}>
                    {wordUI}
                </Grid>
            </div>
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