import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Translate, Update, Face, LocalLibrary } from "@material-ui/icons";
import BlockItem from "./Item";

export default class List extends Component {
    render() {
        return (
            <Grid container justify="center" spacing="2">
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
                        value="2"
                        color="green"
                        icon={<LocalLibrary fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Lần cập nhật cuối vào lúc"
                        value="12/12/2019"
                        color="violet"
                        icon={<Update fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Người dùng"
                        value="2"
                        color="black"
                        icon={<Face fontSize="large" />}
                    />
                </Grid>
            </Grid>
        );
    }
}
