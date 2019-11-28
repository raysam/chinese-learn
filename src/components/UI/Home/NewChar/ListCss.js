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
        fontFamily: "'Noto Sans SC', sans-serif"
    },
    spanTC: {
        fontFamily: "'Noto Sans TC', sans-serif"
    },
    colWidth40: { width: "30%" },
    colWidth17: { width: "17.5%" },
});

export default styles;
