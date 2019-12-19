import React, { Component } from 'react';
import styles from "./LessonCss";
import { withStyles, Grid } from "@material-ui/core";
import WordItem from "../Word/Item";

class Detail extends Component {
    render() {
        // const { classes, match } = this.props;
        const { classes } = this.props;
        
        const listWord = [
            {id: 1, pinyin: "abc", word: "你好", mean: "cais gif dos ratas laf daif vaf chinhs xacs", note: "abc gif gif dos caafn phari thaajt laf daif moiws ddc"},
            {id: 2, pinyin: "abc1", word: "你好2", mean: "cais gif dos ratas laf daif vaf chinhs xacs", note: "abc gif gif dos caafn phari thaajt laf daif moiws ddc"},
            {id: 3, pinyin: "abc2", word: "你好3", mean: "cais gif dos ratas laf daif ", note: "abc gif gif dos caa"},
            {id: 4, pinyin: "abc3", word: "你好4", mean: "cais gif dos ratas laf daif vaf chinhs xacs", note: "abc gif gif dos caafn phari thaajt laf daif moiws ddc"},
            {id: 5, pinyin: "abc4", word: "你好5", mean: "cais gif dodaif vaf chinhs xacs", note: "abc gif gif dos caafn phari thaajt laf daif moiws ddcabc gif gif dos caafn phari thaajt laf daif moiws ddcabc gif gif dos caafn phari thaajt laf daif moiws ddc"},
            {id: 6, pinyin: "abc5", word: "你好6", mean: "cais gif dos raif vaf chin", note: "abc gif gifaafn phari thaajt laf daif moiws ddci thaajt laf i thaajt laf i thaajt laf "},
            {id: 7, pinyin: "abc6", word: "你好7", mean: "cais gif dos rat", note: "abc gif gif dos caafn phari thaajt laf daiws ddc"},
            {id: 8, pinyin: "abc7", word: "你好8", mean: "cos ratas laf daif vaf chinhs xacs", note: "abc gif dos caafn phari thaajt laf daif moiws ddcos"},
            {id: 9, pinyin: "abc8", word: "你好9", mean: "cis gif dos raf daif vaf chinhs s", note: "abc gif gif dos caafn aajt laf daif moiws ddct laf daift laf daift laf daif"},
        ];

        const listWordUI = listWord.map((word, index) => {
            return (
                <Grid item xs={3} key={index}>
                    <WordItem id={word.id} pinyin={word.pinyin} mean={word.mean} note={word.note} >{word.word}</WordItem>
                </Grid>
            )
        });

        return (
            <div className={classes.abc}>
                <Grid container spacing={2}>
                    {listWordUI}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Detail);