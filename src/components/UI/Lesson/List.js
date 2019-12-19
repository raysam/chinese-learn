import React, { Component, Fragment } from "react";
import styles from "./LessonCss";
import { withStyles, Divider } from "@material-ui/core";
import LessonItem from "./Item";
import { Switch, Route, NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import LessionDetail from "./Detail";

class List extends Component {

    render() {
        const { classes, match } = this.props;
        const url = match.path;
        return (
            <Fragment>
                <div className={classes.navList}>
                    <SimpleBar
                        style={{ maxHeight: "calc(100vh)" }}
                        forceVisible="y"
                        autoHide="false"
                    >
                        <div className={classes.listLesson}>
                            <LessonItem
                                key="4"
                                newOne={true}
                                component={NavLink}
                                to={`${url}/abc`}
                                activeClassName="active"
                                new
                            >
                                Bài số 3
                            </LessonItem>
                            <Divider />
                            <LessonItem
                                key="1"
                                component={NavLink}
                                to={`${url}/efg`}
                                activeClassName="active"
                            >
                                Bài số 1
                            </LessonItem>
                            <LessonItem
                                key="2"
                                component={NavLink}
                                to={`${url}/wer`}
                                activeClassName="active"
                            >
                                Bài số 2
                            </LessonItem>
                            <LessonItem
                                key="3"
                                newOne={true}
                                component={NavLink}
                                to={`${url}/abc`}
                                activeClassName="active"
                                new
                            >
                                Bài số 3
                            </LessonItem>
                        </div>
                    </SimpleBar>
                </div>
                <div className={classes.mainContent}>
                    <Switch>
                        <Route path="/learn/:slug" component={LessionDetail} />
                        <Route render={() => <div>Vui lòng chọn 1 bài để bắt đầu học</div>}/>
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(List);
