import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./ListCss";
import { withStyles } from "@material-ui/styles";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    Box,
    Typography,
    TableHead
} from "@material-ui/core";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import * as sheetHelper from '../../../api/sheetHelper';
class List extends Component {
    render() {
        const { listWord, classes } = this.props;

        let wrapWord = sheetHelper.getTopWord(listWord, 20).map((word, index) => {
            return (
                <TableRow key={index}>
                    <TableCell className={classes.colGen}>
                        {index+1}
                    </TableCell>
                    <TableCell scope="row" className={classes.colGen}>
                        {word.word}
                    </TableCell>
                    <TableCell className={classes.colGen}>
                        <Box component="span" className={classes.spanTC}>
                            {word.mword}
                        </Box>
                    </TableCell>
                    <TableCell className={classes.colGen}>{word.pinyin}</TableCell>
                    <TableCell className={classes.colGen}>{word.mean}</TableCell>
                </TableRow>
            );
        });

        return (
            <Fragment>
                <Paper className={classes.rootPaper}>
                    <Box className={classes.headTitle}>
                        <Box className={classes.titleWrap}>
                            <Box className={classes.iconMain}>
                                <FiberNewIcon fontSize="large" />
                            </Box>
                            <Box component="span" className={classes.miniTitle}>
                                Trong hệ thống
                            </Box>
                            <Typography variant="h5" component="h5">
                                Từ mới
                            </Typography>
                        </Box>
                    </Box>
                    <div className={classes.scrollMobile} >
                        <Table className={classes.tableParent}>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell className={classes.colWidth10}>
                                        STT
                                    </TableCell>
                                    <TableCell className={classes.colWidth17}>
                                        Giản thể
                                    </TableCell>
                                    <TableCell className={classes.colWidth17}>
                                        Phồn thể
                                    </TableCell>
                                    <TableCell className={classes.colWidth17}>
                                        Phiên âm
                                    </TableCell>
                                    <TableCell className={classes.colWidth40}>
                                        Ý nghĩa
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    wrapWord
                                }
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </Fragment>
        );
    }
}

const mapState = state => {
    return {
        listWord: state.allWord
    };
};

const mapDispatch = (dispatch, props) => {
    return {
        onSetWord: word => {
            dispatch(actions.setAllWord(word));
        }
    };
};

export default connect(mapState, mapDispatch)(withStyles(styles)(List));
