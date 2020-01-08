import React, { Component, Fragment } from "react";
import WordItem from "./Item";
import WordItemOnline from "./ItemOnline";
import { Grid } from "@material-ui/core";
import styles from "./ExamCss";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class List extends Component {

    render() {
        const { examSettings, classes } = this.props;

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
                                    {
                                        (examSettings.settings.examOnline) ?
                                        (<WordItemOnline pinyin={word.pinyin} word={word.word} mword={word.mword} mean={word.mean} />) :
                                        (<WordItem pinyin={word.pinyin} word={word.word} mword={word.mword} mean={word.mean} />)
                                    }
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
    };
};

export default connect(mapState, null)(withStyles(styles)(List));
