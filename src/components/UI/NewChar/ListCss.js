const styles = theme => ({
    rootPaper: {
        marginTop: 20
    },
    headTitle: {
        padding: 15
    },
    titleWrap: {
        position: 'relative',
        "& h5": {
            textTransform: 'uppercase'
        }
    },
    iconMain: {
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        padding: 25,
        background: "linear-gradient(45deg, #56dfdf, #021cba)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px #5269ff",
        borderRadius: 6,
        marginRight: 20,
        marginTop: -35,
        color: "#ffffff"
    },
    miniTitle: {
        color: "#a8a8a8"
    },
    tableParent: {
        minWidth: 900
    },
    tableHead: {
        backgroundColor: theme.palette.common.black,
        "& tr": {
            "& th": {
                color: "white !important",
                fontSize: 18,
                fontWeight: "bold",
            }
        }
    },
    colGen: {
        fontFamily: theme.fonts.family.sC
    },
    spanTC: {
        fontFamily: theme.fonts.family.tC
    },
    colWidth40: { width: "42.5%" },
    colWidth17: { width: "17.5%" },
    colWidth10: { width: "5%" },
    scrollMobile: {
        width: '100%',
        overflowX: 'auto'
    }
});

export default styles;
