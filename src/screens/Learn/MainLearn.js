import React, { Component } from 'react';
import LessonList from '../../components/UI/Lesson/List';


class MainLearn extends Component {
    render() {
        const { match } = this.props;
        
        return (
            <div>
                <LessonList match={match.match}/>
            </div>
        )
    }
}

export default MainLearn;