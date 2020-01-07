const styles = theme => ({
    mainCard: {
        padding: 15,
        height: "100%"
    },
    mainWord: {
        fontFamily: theme.fonts.family.sC,
        color: theme.colorSet.orange
    },
    mWord: {
        fontFamily: theme.fonts.family.tC,
        color: theme.colorSet.ufoGreen
    },
    pinyin: {
        fontFamily: "Tahoma, serif",
        fontSize: theme.fonts.size.sm,
        color: theme.colorSet.skyBlue,
        lineHeight: 1
    },
    cardContent: {
        padding: "0 !important",
    },
    dvWord: {
        margin: "10px 0"
    },
    meaning: {
        fontFamily: "Arial, san-serif",
        fontSize: theme.fonts.size.ltn,
        color: theme.colorSet.saturatedSky
    },
    note: {
        color: theme.colorSet.watermelon,
        margin: 0
    },
});

export default styles;