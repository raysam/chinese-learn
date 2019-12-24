import React, { Component, Fragment } from "react";
import styles from "./LessonCss";
import { withStyles, Divider } from "@material-ui/core";
import LessonItem from "./Item";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import config from "../../../constansts/config";
import callApi from '../../../api/sheet';
import * as sheetHelper from '../../../api/sheetHelper';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
            lastLesson: {}
        }
    }

    componentDidMount() {
        callApi(config.TABLE_LESSONS).then(resp => {
            this.props.onGetLesson(sheetHelper.getAllLessons(resp));
            this.setState({
                lessons: this.props.listLesson.map((lesson, index) => {
                    return (<LessonItem
                        key={index}
                        component={NavLink}
                        to={`${this.props.match.path}/${lesson.slug}`}
                        activeClassName="active"
                        newOne={ this.props.listLesson.length === index+1 }
                    >
                        Bài số {lesson.id}: {lesson.name}
                    </LessonItem>)
                }),
                lastLesson: this.props.listLesson[this.props.listLesson.length-1]
            })
        });
    }

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
                                newOne={true}
                                component={NavLink}
                                to={`${url}/${this.state.lastLesson.slug}`}
                                activeClassName="active"
                            >
                                Bài số {this.state.lastLesson.id}: {this.state.lastLesson.name}
                            </LessonItem>
                            <Divider />
                            {this.state.lessons}
                        </div>
                    </SimpleBar>
                </div>
            </Fragment>
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
        onGetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        },
    }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(List));
