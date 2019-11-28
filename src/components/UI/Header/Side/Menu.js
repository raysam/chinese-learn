import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import { withStyles, Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./MenuCss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Link } from "react-router-dom";

export default withStyles(styles)(
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
                                    <ListItem
                                        component={Link}
                                        to="/"
                                        button
                                        onClick={this.toggleDrawer(false)}
                                    >
                                        <ListItemIcon>
                                            <HomeIcon
                                                className={
                                                    classes.menuItemColor
                                                }
                                            />
                                        </ListItemIcon>
                                        <ListItemText>Home</ListItemText>
                                    </ListItem>
                                    <ListItem
                                        component={Link}
                                        to="/exam"
                                        button
                                        onClick={this.toggleDrawer(false)}
                                    >
                                        <ListItemIcon>
                                            <SpellcheckIcon
                                                className={
                                                    classes.menuItemColor
                                                }
                                            />
                                        </ListItemIcon>
                                        <ListItemText>Kiểm Tra</ListItemText>
                                    </ListItem>
                                </List>
                            </SimpleBar>
                        </div>
                    </Drawer>
                </React.Fragment>
            );
        }
    }
);
