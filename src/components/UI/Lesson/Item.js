import React, { Component } from "react";
import styles from "./LessonCss";
import { withStyles } from "@material-ui/styles";
import { Chip, Avatar } from "@material-ui/core";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FolderIcon from "@material-ui/icons/Folder";

class Item extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.chipRoot}>
                <Chip
                    clickable
                    avatar={
                        this.props.newOne ? (
                            <Avatar>
                                <FiberNewIcon fontSize="small" />
                            </Avatar>
                        ) : (
                            <Avatar>
                                <FolderIcon fontSize="small" />
                            </Avatar>
                        )
                    }
                    component={
                        this.props.component ? this.props.component : false
                    }
                    to={this.props.to ? this.props.to : false}
                    activeClassName={this.props.activeClassName ? this.props.activeClassName : false}
                    className={classes.chipMain + " " + this.props.new}
                    label={this.props.children}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Item);
