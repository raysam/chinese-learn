import React from "react";
import styles from "./HeaderCss";
import { withStyles, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import UserButton from "../User/Button";
import SideMenu from "../Side/Menu";
import { connect } from 'react-redux';
import * as actions from '../../../actions';


class Header extends React.Component {
    
    componentDidMount() {
        
    }

    render() {
        const { classes, location } = this.props;
        const titleList = [
            {
                pathname: /\//,
                label: "Trang chủ"
            },
            {
                pathname: /\/exam/,
                label: "Kiểm tra"
            },
            {
                pathname: /\/learn(\/.*)*/,
                label: "Học Tập"
            }
        ];

        let titlePage = "Trang Chủ";

        titleList.forEach(title => {
            if (title.pathname.test(location.pathname)) {
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

const mapState = state => {
    return {
        listLesson: state.allLession,
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onSetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        }
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Header));
