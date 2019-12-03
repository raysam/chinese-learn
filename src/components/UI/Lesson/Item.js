import React, { Component, Fragment } from "react";
import styles from "./LessonCss";
import { withStyles } from "@material-ui/styles";

class Item extends Component {

    handleClick = () => {
        console.log("click to load");
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.chipRoot}>
                    <span className={classes.avatarRadius}>123</span>
                    <label className={classes.chiplabel}>Bài số 1</label>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Item);
