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
        marginBottom: 40
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
        "&>*": {
            marginLeft: 20
        }
    },
    listContainer: {
        paddingBottom: 65
    },
    testCard: {
        padding: 15,
        minHeight: 90,
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
    correctWord: {
        fontFamily: theme.fonts.family.sC,
        color: theme.colorSet.limeSoap,
        fontSize: theme.fonts.size.sm
    },
    errorWord: {
        fontFamily: theme.fonts.family.sC,
        color: theme.colorSet.watermelon,
        fontSize: theme.fonts.size.sm
    },
    meaning: {
        fontFamily: "Arial, san-serif",
        fontSize: theme.fonts.size.lg,
        color: theme.colorSet.saturatedSky
    },
    enTest: {
        minHeight: 144,
        '& $meaning': {
            fontSize: `${theme.fonts.size.sm}px !important`
        }
    },
    botLabel: {
        top: 34,
        '&>*': {
            transform: 'rotate(135deg)',
            '&>*': {
                transform: 'rotate(-135deg)'
            }
        }
    },
    rePosMark: {
        top: 37
    },
    infoNote: {
        display: 'flex',
        padding: '6px 16px',
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        borderRadius: 4,
        marginTop: 20,
        letterSpacing: '0.01071em',
        backgroundColor: theme.colorSet.clearChill
    },
    infoIcon: {
        display: 'flex',
        opacity: 0.9,
        padding: '7px 0',
        fontSize: 22,
        marginRight: 12,
    },
    infoMess: {
        display: 'flex',
        padding: '8px 0',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    },
    infoTitle: {
        fontFamily: '"Arial", sans-serif',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.5,
        letterSpacing: 1
    },
});

export default styles;