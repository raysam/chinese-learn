import React, { Component } from 'react';
import styles from "./WordCss";
import { withStyles, Card, CardContent, Typography, Divider } from "@material-ui/core";

class Item extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.mainCard}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.pinyin} component="label">
                        nǐhǎo
                    </Typography>
                    <Typography className={classes.mainWord} component="h3" variant="h5">
                        你好
                    </Typography>
                    <Divider className={classes.dvWord} />
                    <Typography className={classes.meaning} componen="p">
                        Ý Nghĩa : abc xyz gì gì đó
                    </Typography>
                    <Divider className={classes.dvWord} />
                    <Typography className={classes.note+" "+classes.meaning} componen="p">
                        Chú thích thêm : abc xyz gì gì đó
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Item);