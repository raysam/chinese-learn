import React from "react";
import Container from "@material-ui/core/Container";
import BlockList from "../../components/UI/Home/Block/List";
import NewCharList from "../../components/UI/Home/NewChar/List";
import styles from "./MainCss";
import { withStyles } from "@material-ui/core";

export default withStyles(styles)(class extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth="false" className={classes.root}>
                <BlockList />
                <NewCharList />
            </Container>
        );
    }
});
