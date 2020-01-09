import React, { Component, Fragment } from 'react';
import styles from "./ExamCss";
import { 
    withStyles, 
    Card, 
    CardContent, 
    Typography, 
    Divider 
} from "@material-ui/core";
import { connect } from "react-redux";

class Item extends Component {
    render() {
        const { classes, examStatus } = this.props;

        return (
            <Card className={classes.testCard  + ((examStatus) ? ' '+classes.enTest: '')}>
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
                        </Fragment>)
                        : ''
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
        examStatus: state.examStatus
    };
};

export default connect(mapState, null)(withStyles(styles)(Item));