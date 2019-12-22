import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Translate, Update, Face, LocalLibrary } from "@material-ui/icons";
import BlockItem from "./Item";
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as apiFunction from '../../../api/readSheet';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updateDate: ''
        }
    }
    
    
    async componentDidMount() {
        this.props.onGetLesson(await apiFunction.getAllLessons());
        let updateDate = await apiFunction.getUpdateDate();
        let formatDate = new Date(updateDate);
        this.setState({
            updateDate: `${formatDate.getDate()}/${formatDate.getMonth()+1}/${formatDate.getFullYear()}`
        })
    }
    
    render() {
        var { listLesson } = this.props;
        

        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={3}>
                    <BlockItem
                        readmore={true}
                        title="Số từ hiện có"
                        value="13"
                        color="red"
                        icon={<Translate fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Số bài hiện có"
                        value={listLesson.length}
                        color="green"
                        icon={<LocalLibrary fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Lần cập nhật cuối vào lúc"
                        value={this.state.updateDate}
                        color="violet"
                        icon={<Update fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Người dùng"
                        value="0"
                        color="black"
                        icon={<Face fontSize="large" />}
                    />
                </Grid>
            </Grid>
        );
    }
}

const mapState = state => {
    return {
        listLesson: state.allLession
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onGetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        }
    }
}

export default connect(mapState, mapDispatch)(List);