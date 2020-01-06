import React, { Component, Fragment } from 'react';
import ActionBar from '../../components/UI/Exam/ActionBar';
import WordList from '../../components/UI/Exam/List';

class StartExam extends Component {
    state = {
        examStatus: false
    }
    render() {
        return (
            <Fragment>
                <WordList examStatus={this.state.examStatus}  />
                <ActionBar examStatus={this.state.examStatus} />
            </Fragment>
        );
    }
}


export default StartExam;