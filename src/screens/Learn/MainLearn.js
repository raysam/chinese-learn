import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import LessonList from '../../components/UI/Lesson/List';
import LessionDetail from "../../components/UI/Lesson/Detail";
import styles from "../../components/UI/Lesson/LessonCss";


class MainLearn extends Component {
    render() {
        const { match, classes } = this.props;
        
        return (
            <div>
                <LessonList match={match.match}/>
                <div className={classes.mainContent}>
                    <Switch>
                        <Route path="/learn/:slug" component={LessionDetail} />
                        <Route render={() => <div>Vui lòng chọn 1 bài để bắt đầu học</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MainLearn);