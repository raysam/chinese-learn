import React, { Component, Fragment } from 'react';
import styles from "./WordCss";
import { withStyles, Card, CardContent, Typography, Divider } from "@material-ui/core";

class Item extends Component {

    handleVoice = e => {
        console.log(e.target.dataset.src);
        let audio = new Audio(e.target.dataset.src);
        audio.play();
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.mainCard}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.pinyin} component="label">
                        {this.props.pinyin}
                    </Typography>
                    <Typography className={classes.mainWord} component="h3" variant="h5">
                        {this.props.word} - {(this.props.mword) ? (<span className={classes.mWord}> - {this.props.mword}</span>) : '' }
                    </Typography>
                    <Divider className={classes.dvWord} />
                    <Typography className={classes.meaning} componen="p">
                        Ý Nghĩa : {this.props.mean}
                    </Typography>
                    {
                        (this.props.note) ?
                        (<Fragment><Divider className={classes.dvWord} /><Typography className={classes.note+" "+classes.meaning} componen="p">
                            Chú thích thêm : {this.props.note}
                        </Typography></Fragment>)
                        : ''
                    }
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Item);