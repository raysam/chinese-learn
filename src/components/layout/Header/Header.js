import React, { Component } from 'react';
import styles from './style';
import { withStyles, Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title}>
                        <Link href="#" >
                            <img className={classes.imgSmall} src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="Logo"/>    
                        </Link>
                    </div>
                    {/* <Typography variant="h6" >
                        News
                        
                    </Typography> */}
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);