import React, { Component } from 'react';
import LessonList from '../../components/UI/Lesson/List';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';


class MainLearn extends Component {
    render() {
        const { defaultLesson, match } = this.props;
        this.props.onSetLesson('abc');
        
        return (
            <div>
                {
                    (defaultLesson) ?
                    <Redirect to={`/learn/${defaultLesson}`} /> : null
                }
                <LessonList match={match.match}/>
            </div>
        )
    }
}

const mapState = state => {
    return {
        defaultLesson: state.setDefaultLession
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onSetLesson: lesson => {
            dispatch(actions.setDefaultLesson(lesson));
        }
    }
}

export default connect(mapState, mapDispatch)(MainLearn);