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

class List extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Paper className={classes.rootPaper}>
                    <Box className={classes.headTitle}>
                        <Box className={classes.titleWrap}>
                            <Box className={classes.iconMain}>
                                <FiberNewIcon fontSize="large" />
                            </Box>
                            <Box component="span" className={classes.miniTitle}>
                                SubTitle
                            </Box>
                            <Typography variant="h5" component="h5">
                                Từ mới
                            </Typography>
                        </Box>
                    </Box>
                    <Table className={classes.tableParent}>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell className={classes.colWidth17}>
                                    Giản thể
                                </TableCell>
                                <TableCell className={classes.colWidth17}>
                                    Phồn thể
                                </TableCell>
                                <TableCell className={classes.colWidth17}>
                                    Phiên âm
                                </TableCell>
                                <TableCell className={classes.colWidth17}>
                                    Loại từ
                                </TableCell>
                                <TableCell className={classes.colWidth40}>
                                    Ý nghĩa
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    scope="row"
                                    className={classes.colGen}
                                >
                                    你好
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    <Box
                                        component="span"
                                        className={classes.spanTC}
                                    >
                                        你好
                                    </Box>
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    nǐhǎo
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    động từ
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    xin chào
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    scope="row"
                                    className={classes.colGen}
                                >
                                    您
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    <Box
                                        component="span"
                                        className={classes.spanTC}
                                    >
                                        您
                                    </Box>
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    nín
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    danh từ
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    quỳ ngài, quý cô ( kính ngữ )
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    scope="row"
                                    className={classes.colGen}
                                >
                                    老师
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    <Box
                                        component="span"
                                        className={classes.spanTC}
                                    >
                                        老師
                                    </Box>
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    lǎoshī
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    danh từ
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    thầy, cô
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell
                                    scope="row"
                                    className={classes.colGen}
                                >
                                    谢谢
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    <Box
                                        component="span"
                                        className={classes.spanTC}
                                    >
                                        謝謝
                                    </Box>
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    xièxiè
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    động từ
                                </TableCell>
                                <TableCell className={classes.colGen}>
                                    cám ơn
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(List);
