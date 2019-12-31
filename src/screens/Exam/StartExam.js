import React, { Component, Fragment } from 'react';
import ActionBar from '../../components/UI/Exam/ActionBar';
import WordList from '../../components/UI/Exam/List';

class StartExam extends Component {
    render() {
        return (
            <Fragment>
                <WordList />
                <ActionBar />
            </Fragment>
        );
    }
}


export default StartExam;