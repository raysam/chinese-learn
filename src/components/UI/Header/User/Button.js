import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

export default () => {
    const [nameE, setNameE] = React.useState(null);

    const handleClick = event => {
        setNameE(event.currentTarget);
    };

    const handleClose = () => {
        setNameE(null);
    };

    return (
        <div>
            <Tooltip title="Profile" aria-label="add">
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Tooltip>
            <Menu
                id="simple-menu"
                anchorEl={nameE}
                keepMounted
                open={Boolean(nameE)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
