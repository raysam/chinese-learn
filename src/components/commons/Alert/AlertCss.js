const styles = theme => ({
    infoNote: {
        display: 'flex',
        padding: '6px 16px',
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        borderRadius: 5,
        marginTop: 20,
        letterSpacing: '0.01071em',
        backgroundColor: theme.alertColor.default,
        '& > $infoIcon > svg': {
            color: theme.iconColor.default
        },
        '& > $infoTitle + $infoMess': {
            color: '#000000'
        },
        '&.error': {
            backgroundColor: theme.alertColor.lightRed,
            '& > $infoIcon > svg': {
                color: theme.iconColor.red
            },
            '& > $infoTitle + $infoMess': {
                color: '#601a15'
            },
        },
        '&.warning': {
            backgroundColor: theme.alertColor.lightYellow,
            '& > $infoIcon > svg': {
                color: theme.iconColor.yellow
            },
            '& > $infoTitle + $infoMess': {
                color: '#663c00'
            },
        },
        '&.info': {
            backgroundColor: theme.alertColor.lightBlue,
            '& > $infoIcon > svg': {
                color: theme.iconColor.blue
            },
            '& > $infoTitle + $infoMess': {
                color: '#0d3e63'
            },
        },
        '&.success': {
            backgroundColor: theme.alertColor.lightGreen,
            '& > $infoIcon > svg': {
                color: theme.iconColor.green
            },
            '& > $infoTitle + $infoMess': {
                color: '#1f4721'
            },
        },
    },
    infoIcon: {
        display: 'flex',
        opacity: 0.9,
        padding: '7px 0',
        fontSize: 22,
        marginRight: 12
    },
    infoMess: {
        display: 'flex',
        padding: '8px 0',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > p': {
            margin: 0
        }
    },
    infoTitle: {
        fontFamily: '"Arial", sans-serif',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.5,
        letterSpacing: 1,
        marginBottom: 10
    }
});

export default styles;