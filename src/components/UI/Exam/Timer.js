import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as helper from '../../../utility';

class Timer extends Component {
    state = {
        time: '0:0',
        second: this.props.second
    }

    timer = 0;

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        let timeLeftVar = helper.calcTime(this.state.second);
        this.setState({
            time: timeLeftVar
        });
    }

    countDown = () => {
        let seconds = this.state.second - 1;
        this.setState({
            time: helper.calcTime(this.state.second),
            second: seconds
        });

        if (seconds < 0) {
            this.props.onSetStatus();
            clearInterval(this.timer);
        }
    }

    render() {
        if (!this.props.examStatus) {
            if (this.timer === 0 && this.state.second > 0) {
                this.timer = setInterval(this.countDown, 1000);
            }
        } else {
            clearInterval(this.timer);
        }
        return (
            <Fragment>
                {this.state.time}
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        examStatus: state.examStatus
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetStatus: () => {
            dispatch(actions.setExamStatus());
        },
        onSetStatusFalse: () => {
            dispatch(actions.setExamStatusFalse());
        }
    };
};

export default connect(mapState, mapDispatch)(Timer);