import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {
    Menu as MenuIcon, 
    Home as HomeIcon, 
    Spellcheck as SpellcheckIcon, 
    LocalLibrary as LocalLibraryIcon, 
    ContactMail as ContactMailIcon
} from "@material-ui/icons";
import { withStyles, Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./MenuCss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };
    }

    toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        this.setState({ openMenu: open });
    };

    render() {
        const { classes } = this.props;

        const Menus = [
            {
                path: "/",
                label: "Trang chủ",
                icon: <HomeIcon className={classes.menuItemColorBlue} />,
                color: classes.menuItemColorBlue
            },
            {
                path: "/learn",
                label: "Học Tập",
                icon: <LocalLibraryIcon className={classes.menuItemColorOrange} />,
                color: classes.menuItemColorOrange
            },
            {
                path: "/exam",
                label: "Kiểm Tra",
                icon: <SpellcheckIcon className={classes.menuItemColorTomato} />,
                color: classes.menuItemColorTomato
            },
            {
                path: "/lienhe",
                label: "Liên Hệ",
                icon: <ContactMailIcon className={classes.menuItemColorGolden} />,
                color: classes.menuItemColorGolden
            }
        ];

        return (
            <React.Fragment>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={this.state.openMenu}
                    onClose={this.toggleDrawer(false)}
                >
                    <div className={classes.navContainer}>
                        <SimpleBar
                            style={{ maxHeight: "calc(100vh)" }}
                            forceVisible="y"
                            autoHide="false"
                        >
                            <List>
                                {Menus.map((menu, index) => {
                                    return (
                                        <ListItem
                                            component={Link}
                                            to={menu.path}
                                            button
                                            key={index}
                                            onClick={this.toggleDrawer(false)}
                                            className={menu.color}
                                        >
                                            <ListItemIcon>
                                                {menu.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {menu.label}
                                            </ListItemText>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </SimpleBar>
                    </div>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Menu);
