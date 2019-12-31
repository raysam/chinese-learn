const styles = theme => ({
    noBgStep: {
        backgroundColor: "transparent !important",
    },
    stepContent: {
        backgroundColor: "#ededed",
        borderRadius: 10,
        padding: 20
    },
    selectLesson: {
        paddingBottom: 15,
        borderBottom: "1px solid #ababab"
    },
    setMargin: {
        marginBottom: 20
    },
    labelSet: {
        marginBottom: 10
    },
    titleStep: {
        marginBottom: 20
    },
    btnArea: {
        display: 'flex',
        marginTop: 20
    },
    btnBackArea: {
        width: "50%"
    },
    btnNextArea: {
        width: "50%",
        textAlign: 'right'
    },
    actionBar: {
        width: '100%',
        maxHeight: 70,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fafafa',
        borderTop: '1px solid #a3a3a3',
        padding: '10px 20px',
        boxShadow: '0px -2px 10px 0px rgb(0,0,0,0.5)'
    },
    timer: {
        display: 'inline-block',
        lineHeight: '36px',
        fontSize: 20
    },
    rightSide: {
        float: 'right',
    },
    testCard: {
        padding: 15
    },
    cardContent: {
        padding: "0 !important",
    },
    pinyin: {
        fontFamily: "Tahoma, serif",
        fontSize: theme.fonts.size.sm,
        color: theme.colorSet.skyBlue,
        lineHeight: 1
    },
    mainWord: {
        fontFamily: theme.fonts.family.sC,
        color: theme.colorSet.orange
    },
    mWord: {
        fontFamily: theme.fonts.family.tC,
        color: theme.colorSet.ufoGreen
    },
    dvWord: {
        margin: "10px 0"
    },
    meaning: {
        fontFamily: "Arial, san-serif",
        fontSize: theme.fonts.size.lg,
        color: theme.colorSet.saturatedSky
    }
});

export default styles;