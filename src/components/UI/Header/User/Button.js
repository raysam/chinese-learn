import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameE: null
        }
    }

    handleClick = event => {
        this.setState({
            nameE: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            nameE: null
        });
    };

    render() {
        return (
            <div>
                <Tooltip title="Profile" aria-label="add">
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.nameE}
                    keepMounted
                    open={Boolean(this.state.nameE)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}
