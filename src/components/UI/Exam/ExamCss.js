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
    marT: {
        marginTop: 20
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
    timeCount: {
        width: 'auto',
        maxHeight: 60,
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: theme.color.whiteBlue,
        borderTop: '1px solid #a3a3a3',
        padding: '10px 20px',
        boxShadow: '0px 0px 10px 0px rgb(0,0,0,0.5)',
        borderTopRightRadius: 10
    },
    timeLbl: {
        display: 'block',
        fontSize: theme.fonts.size.tn
    },
    timer: {
        display: 'inline-block',
        fontSize: theme.fonts.size.sm
    },
    actionBtn: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: '10px 15px',
        '&>*': {
            position: 'relative',
            zIndex: 2
        }
    },
    miniPanel: {
        position: 'absolute !important',
        zIndex: 1,
        bottom: 60,
        right: 17,
        width: 'auto',
        transform: 'scaleY(0)',
        transformOrigin: 'bottom',
        opacity: 0,
        transition: 'all 0.1s linear',
        '&.active': {
            opacity: 1,
            transform: 'scaleY(1)',
        },
        '& > *': {
            display: 'flex !important',
            marginBottom: 10
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
        position: 'relative'
    },
    checkT: {
        position: 'absolute',
        top: 0,
        right: 0
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
    resultScores: {
        marginBottom: 20
    }
});

export default styles;