import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#36b5b0',
            contrastText: '#fff'
        },
        secondary: {
            main: '#9dd8c8'
        },
        error: {
            main: '#f09595'
        }
    },
    color: {
        greed: '#36b5b0',
        greedLight: '#9dd8c8',
        red: '#ff2424',
        redLight: '#f09595',
        yellowLight: '#fcf5b0'
    },
    fonts: {
        tn: 10,
        sm: 14,
        md: 16,
        lg: 20
    }
});

export default theme;