import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: "#06bce5",
            main: '#36b5b0',
            dark: '#347f7c',
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
        greedLow: '#9dd8c8',
        greedLight: '#06bce5',
        greedDark: '#347f7c',
        greedSalk: '#48d9f9',
        red: '#ff2424',
        redLight: '#f09595',
        yellowLight: '#fcf5b0'
    },
    fonts: {
        size: {
            tn: 10,
            ltn: 12,
            sm: 14,
            md: 16,
            lg: 20
        },
        family: {
            sC: "'Noto Sans SC', sans-serif",
            tC: "'Noto Sans TC', sans-serif"
        }
    }
});

export default theme;