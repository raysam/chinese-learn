import React, { Component } from "react";
import { Grid, Link } from "@material-ui/core";
import { Translate, Update, Face, Facebook } from "@material-ui/icons";
import BlockItem from "./Item";

export default class List extends Component {
    render() {
        return (
            <Grid container justify="center" spacing="2">
                <Grid item xs={3}>
                    <BlockItem
                        readmore={true}
                        title="Số từ có trong server"
                        value="13"
                        color="red"
                        icon={<Translate fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Lần cập nhật cuối vào lúc"
                        value="12/12/2019"
                        color="green"
                        icon={<Update fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Người dùng"
                        value="1"
                        color="violet"
                        icon={<Face fontSize="large" />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BlockItem
                        title="Bob"
                        value={<Link href="https://www.facebook.com/luu.dat.tham" target="_blank">luu.dat.tham</Link>}
                        color="black"
                        icon={<Facebook fontSize="large" />}
                    />
                </Grid>
            </Grid>
        );
    }
}
