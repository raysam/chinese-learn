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
import TranslateIcon from "@material-ui/icons/Translate";

export default withStyles(styles)(
    class List extends Component {
        render() {
            const { classes } = this.props;
            return (
                <Fragment>
                    <Paper>
                        <Box className={classes.headTitle}>
                            <Box className={classes.titleWrap}>
                                <Box className={classes.iconMain}>
                                    <TranslateIcon />
                                </Box>
                                <Box
                                    component="span"
                                    className={classes.miniTitle}
                                >
                                    SubTitle
                                </Box>
                                <Typography variant="h3" component="h3">
                                    Main Title
                                </Typography>
                            </Box>
                        </Box>
                        <Table className={classes.tableParent}>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell>
                                        Dessert (100g serving)
                                    </TableCell>
                                    <TableCell align="center">
                                        Calories
                                    </TableCell>
                                    <TableCell align="center">
                                        Fat&nbsp;(g)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Cột Thứ 1
                                    </TableCell>
                                    <TableCell align="center">
                                        Cột Thứ 2
                                    </TableCell>
                                    <TableCell align="center">
                                        Cột Thứ 3
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Cột Thứ 1
                                    </TableCell>
                                    <TableCell align="center">
                                        Cột Thứ 2
                                    </TableCell>
                                    <TableCell align="center">
                                        Cột Thứ 3
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Fragment>
            );
        }
    }
);
