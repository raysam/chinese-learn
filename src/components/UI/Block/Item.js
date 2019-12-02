import React, { Component } from "react";
import styles from "./BlockCss";
import { withStyles, Box, Typography } from "@material-ui/core";

class Item extends Component {
    render() {
        const { classes } = this.props;
        let countClass = null;
        switch (this.props.color) {
            case "red":
                countClass = classes.iconMainRed;
                break;
            case "green":
                countClass = classes.iconMainGreen;
                break;
            case "violet":
                countClass = classes.iconMainViolet;
                break;
            case "black":
                countClass = classes.iconMainBlack;
                break;
            default:
                countClass = classes.iconMainBlack;
                break;
        }
        return (
            <div className={classes.cardBase}>
                <div className={classes.cardBody}>
                    <Box component="div" className={classes.boxContainer}>
                        <Box
                            component="div"
                            className={classes.iconMain + " " + countClass}
                        >
                            {this.props.icon}
                        </Box>
                        <Box component="span" className={classes.miniTextGray}>
                            {this.props.title}
                        </Box>
                        <Typography variant="h4" component="h4">
                            {this.props.value}
                        </Typography>
                    </Box>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Item);
