import React, { Component, Fragment } from 'react';
import styles from "./ExamCss";
import { 
    withStyles, 
    Card, 
    CardContent, 
    Typography, 
    Divider 
} from "@material-ui/core";

class Item extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.testCard}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.meaning} componen="p">
                        Ý Nghĩa : {this.props.mean}
                    </Typography>
                    {
                        (this.props.status) ?
                        (<Fragment>
                            <Divider className={classes.dvWord} />
                            <Typography className={classes.pinyin} component="label">
                                {this.props.pinyin}
                            </Typography>
                            <Typography className={classes.mainWord} component="h3" variant="h5">
                                {this.props.word} - {(this.props.mword) ? (<span className={classes.mWord}> - {this.props.mword}</span>) : '' }
                            </Typography>
                        </Fragment>)
                        : ''
                    }
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Item);