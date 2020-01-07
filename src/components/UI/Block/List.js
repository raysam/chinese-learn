import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Translate, Update, Face, LocalLibrary } from "@material-ui/icons";
import BlockItem from "./Item";
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import config from "../../../constansts/config";
import callApi from '../../../api/sheet';
import * as sheetHelper from '../../../api/sheetHelper';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updateDate: ''
        }
    }
    
    componentDidMount() {
        callApi(config.TABLE_UPDATE_DATE).then(resp => {
            let formatDate = new Date(sheetHelper.getUpdateDate(resp));
            this.setState({
                updateDate: `${formatDate.getDate()}/${formatDate.getMonth()+1}/${formatDate.getFullYear()}`
            });
        });
    }
    
    render() {
        var { listLesson, listWord } = this.props;

        let items = [
            {
                title: "Số từ hiện có",
                value: listWord.length,
                color: "red",
                icon: <Translate fontSize="large" />
            },
            {
                title: "Số bài hiện có",
                value: listLesson.length,
                color: "green",
                icon: <LocalLibrary fontSize="large" />
            },
            {
                title: "Lần cập nhật cuối vào lúc",
                value: this.state.updateDate,
                color: "violet",
                icon: <Update fontSize="large" />
            },
            {
                title: "Người dùng",
                value: "0",
                color: "black",
                icon: <Face fontSize="large" />
            }
        ]

        return (
            <Grid container justify="center" spacing={2}>
                {
                    items.map((v, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={i}>
                                <BlockItem
                                    title={v.title}
                                    value={v.value}
                                    color={v.color}
                                    icon={v.icon}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    }
}

const mapState = state => {
    return {
        listLesson: state.allLession,
        listWord: state.allWord
    }
}

const mapDispatch = (dispatch, props) => {
    return {
        onGetLesson: lesson => {
            dispatch(actions.setAllLesson(lesson));
        },
        onGetWord: word => {
            dispatch(actions.setAllWord(word));
        }
    }
}

export default connect(mapState, mapDispatch)(List);