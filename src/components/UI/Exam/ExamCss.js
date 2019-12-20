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
        marginBottom: 20
    },
    btnArea: {
        textAlign: 'center',
        '&>*': {
            marginRight: 20
        }
    },
    labelSetting: {
        display: 'block',
        width: '100%'
    }
});

export default styles;