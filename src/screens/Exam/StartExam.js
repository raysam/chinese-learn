import React, { Component, Fragment } from 'react';
import WordList from '../../components/UI/Exam/List';
import CountTime from '../../components/UI/Exam/CountTime';
import ActionButton from '../../components/UI/Exam/ActionButton';

class StartExam extends Component {
    render() {
        return (
            <Fragment>
                <WordList />
                <CountTime />
                <ActionButton />
            </Fragment>
        );
    }
}


export default StartExam;