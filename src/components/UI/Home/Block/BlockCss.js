const styles = theme => ({
    cardBase: {
        color: "rgba(0, 0, 0, 0.87)",
        width: "100%",
        border: 0,
        display: "flex",
        position: "relative",
        fontSize: ".875rem",
        minWidth: 0,
        wordWrap: "break-word",
        background: "#ffffff",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        marginTop: 30,
        borderRadius: 6,
        marginBottom: 30,
        flexDirection: "column",
        padding: 15
    },
    cardBody: {
        // margin: "0 15px"
    },
    boxContainer: {
        textAlign: 'right',
    },
    miniTextGray: {
        color: "#cccccc",
        fontSize: 14
    },
    iconMain: {
        float: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
        minWidth: "2em",
        height: "2em",
        maxHeight: "2em",
        padding: "0 20px",
        color: "white",
        marginTop: -40,
        marginRight: 15,
        borderRadius: 5
    },
    iconMainRed: {
        background: "linear-gradient(60deg, #ef5350, #e53935)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)"
    },
    iconMainGreen: {
        background: "linear-gradient(60deg, #66bb6a, #43a047, #4caf50)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)"
    },
    iconMainViolet: {
        background: "linear-gradient(60deg, #fe4ce3, #bd49ff)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(180, 51, 255,.4)"
    },
    iconMainBlack: {
        background: "linear-gradient(60deg, #0c1445, #471e54)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(77, 32, 90,.4)"
    }
});

export default styles;