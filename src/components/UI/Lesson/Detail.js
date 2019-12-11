import React, { Component } from 'react';
import styles from "./LessonCss";
import { withStyles } from "@material-ui/core";
import WordItem from "../Word/Item";

class Detail extends Component {
    render() {
        const { classes, match } = this.props;
        return (
            <div className={classes.abc}>
                {
                    // match.params.slug ?
                    // match.params.slug :
                    // this.props.def
                }
                <WordItem  />
            </div>
        );
    }
}

export default withStyles(styles)(Detail);