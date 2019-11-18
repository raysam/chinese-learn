import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#36b5b0',
            contrastText: 'white'
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
        redLight: '#f09595',
        yellowLight: '#fcf5b0'
    }
});

export default theme;