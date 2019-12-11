const styles = theme => ({
    mainCard: {
        padding: 15
    },
    mainWord: {
        fontFamily: theme.fonts.family.sC
    },
    pinyin: {
        fontFamily: "Tahoma, serif",
        fontSize: theme.fonts.size.sm,
        color: "#bdb2b2",
        lineHeight: 1
    },
    cardContent: {
        padding: "0 !important"
    },
    dvWord: {
        margin: "10px 0"
    },
    meaning: {
        fontFamily: "Arial, san-serif",
        fontSize: theme.fonts.size.ltn,
    },
    note: {
        color: theme.color.red,
        margin: 0
    }
});

export default styles;