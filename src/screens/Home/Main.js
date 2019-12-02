import React from "react";
import BlockList from "../../components/UI/Block/List";
import NewCharList from "../../components/UI/NewChar/List";

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BlockList />
                <NewCharList />
            </React.Fragment>
        );
    }
};

export default Main;