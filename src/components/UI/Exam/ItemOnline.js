import React, { Component, Fragment } from 'react';
import styles from "./ExamCss";
import { 
    withStyles, 
    Card, 
    CardContent, 
    Typography, 
    Divider,
    TextField 
} from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class ItemOnline extends Component {
    state = {
        value: "",
        mark: false
    }

    handleChange = e => {
        if (this.props.word === e.target.value || this.props.mword === e.target.value) {
            this.setState({
                value: e.target.value,
                mark: true
            })
        } else {
            this.setState({
                value: e.target.value,
                mark: false
            })
        }
    }

    componentDidUpdate() {
        console.log(this.propsexamCheck);
        // if (examCheck.examCheck) {
        //     if (this.state.mark) {
        //         this.props.onCountWord();
        //     }
        // }
    }

    render() {
        const { classes, examStatus } = this.props;

        return (
            <Card className={classes.testCard + ((examStatus) ? ' '+classes.enTest : '')}>
                <CardContent className={classes.cardContent}>
                    {
                        (examStatus) ?
                        (<Fragment>
                            <Typography className={classes.pinyin} component="label">
                                {this.props.pinyin}
                            </Typography>
                            <Typography className={classes.mainWord} component="h3" variant="h5">
                                {this.props.word} {(this.props.mword) ? (<span className={classes.mWord}>- {this.props.mword}</span>) : '' }
                            </Typography>
                            <Divider className={classes.dvWord} />
                            <Typography className={(this.state.mark) ? classes.correctWord : classes.errorWord} component="p">
                                Bạn trả lời: {(this.state.value === "") ? "để trống" : this.state.value}
                            </Typography>
                            <Divider className={classes.dvWord} />
                        </Fragment>) :
                        (<Fragment>
                            <TextField label="Đáp án" fullWidth onChange={this.handleChange} />
                            <Divider className={classes.dvWord} />
                        </Fragment>)
                    }
                    <Typography className={classes.meaning} componen="p">
                        Ý Nghĩa : {this.props.mean}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const mapState = state => {
    return {
        examStatus: state.examStatus,
        examCheck: state.examCheck
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onCountWord: () => {
            dispatch(actions.setExamScores());
        },
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(ItemOnline));