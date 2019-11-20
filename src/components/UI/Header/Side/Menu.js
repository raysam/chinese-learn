import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core";
import styles from "./MenuCss";

class Menu extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Menu);
