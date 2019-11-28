import React from "react";
import BlockList from "../../components/UI/Home/Block/List";
import NewCharList from "../../components/UI/Home/NewChar/List";

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BlockList />
                <NewCharList />
            </React.Fragment>
        );
    }
};
