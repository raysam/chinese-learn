import React, { Component } from 'react';
import styles from "./LessonCss";
import { withStyles } from "@material-ui/core";

class Detail extends Component {
    render() {
        const { classes, match } = this.props;
        // console.log(match);
        // console.log(this.props.def);
        return (
            <div className={classes.abc}>
                {
                    match.params.slug ?
                    match.params.slug :
                    this.props.def
                }
            </div>
        );
    }
}

export default withStyles(styles)(Detail);