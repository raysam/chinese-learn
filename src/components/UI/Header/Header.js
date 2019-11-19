import React from "react";
import styles from "./HeaderCss";
import { withStyles, Link } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import UserButton from "./User/Button";
import SideMenu from "./Side/Menu";

export default withStyles(styles)((props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <SideMenu />
                    <div className={classes.title}>
                        <Link href="#">
                            <img
                                className={classes.imgSmall}
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/logo.svg"
                                }
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    {/* <Button color="inherit">Login</Button> */}
                    <UserButton />
                </Toolbar>
            </AppBar>
        </div>
    );
});