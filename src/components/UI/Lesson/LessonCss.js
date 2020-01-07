const styles = theme => ({
    navList: {
        width: 400,
        position: 'fixed',
        top: 65,
        left: 0,
        borderRight: "1px solid #dbdbdb",
        backgroundColor: "#effbfb",
        boxShadow: '5px 0px 10px 0px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        height: "calc( 100vh - 65px )",
        "&>div": {
            maxHeight: 'calc(100vh - 65px)'
        },
        [theme.breakpoints.down('lg')]: {
            width: 300
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            position: 'static',
            height: 250,
            boxShadow: '5px 0px 10px 0px rgba(0,0,0,0.2)',
            marginBottom: 20,
            "&>div": {
                maxHeight: 250
            }
        }
    },
    listLesson: {
        padding: "10px 0"
    },
    mainContent: {
        paddingLeft: 400,
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 300
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0
        }
    },
    chipRoot: {
        width: "100%",
        padding: 10
    },
    chipMain: {
        width: "100%",
        justifyContent: "end",
        transition: "all 0.5s linear",
        backgroundColor: theme.color.greedLight,
        color: "#fff",
        border: "1px solid transparent",
        "&:hover": {
            backgroundColor: theme.color.greedSalk
        },
        "&.active": {
            backgroundColor: theme.color.greed,
            borderColor: theme.color.greedDark
        },
        "& > .MuiAvatar-colorDefault": {
            color: '#fff',
            backgroundColor: theme.color.greedDark
        },
        "&.new > .MuiAvatar-colorDefault": {
            color: "#fff",
            backgroundColor: "#f84949"
        }
    },
});

export default styles;