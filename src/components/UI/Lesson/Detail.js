import React, { Component } from 'react';
import styles from "./LessonCss";
import { withStyles, Grid } from "@material-ui/core";
import WordItem from "../Word/Item";

class Detail extends Component {
    render() {
        const { classes, match } = this.props;
        return (
            <div className={classes.abc}>
                <Grid container justify="center" spacing="2">
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                    <Grid item xs={3}>
                        <WordItem>{match.params.slug}</WordItem>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}

export default withStyles(styles)(Detail);