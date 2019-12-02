import React from "react";
import styles from "./HeaderCss";
import { withStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import UserButton from "../User/Button";
import SideMenu from "../Side/Menu";

class Header extends React.Component {
    render() {
        const { classes, location } = this.props;
        const titleList = [
            {
                pathname: "/",
                label: "Trang chủ"
            },
            {
                pathname: "/exam",
                label: "Kiểm tra"
            },
            {
                pathname: "/learn",
                label: "Học Tập"
            }
        ];

        let titlePage = "Trang Chủ";

        titleList.map( (title, index) => {
            if (title.pathname === location.pathname) {
                titlePage = title.label;
            }
        });

        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <SideMenu />
                        <Typography variant="h6" className={classes.title}>
                            {titlePage}
                        </Typography>
                        {/* <UserButton /> */}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
