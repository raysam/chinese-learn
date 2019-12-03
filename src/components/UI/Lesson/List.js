import React, { Component } from 'react';
import LessonItem from "./Item";

class List extends Component {
    render() {
        return (
            <div>
                <LessonItem key="1"/>
                <LessonItem key="2"/>
                <LessonItem key="3"/>
            </div>
        );
    }
}

export default List;