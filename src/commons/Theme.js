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
            lg: 20,
            xlg: 25,
            xxlg: 30,
            hlg: 40
        },
        family: {
            sC: "'Noto Sans SC', sans-serif",
            tC: "'Noto Sans TC', sans-serif"
        }
    },
    colorSet: {
        goldenSand: '#eccc68',
        orange: '#ffa502',
        coral: '#ff7f50',
        tomato: '#ff6348',
        limeSoap: '#7bed9f',
        ufoGreen: '#2ed573',
        skyBlue: '#70a1ff',
        clearChill: '#1e90ff',
        saturatedSky: '#5352ed',
        brightGreek: '#3742fa',
        watermelon: '#ff4757',
        wildWatermelon: '#ff6b81',
        peace: '#a4b0be',
        grisaille: '#57606f',
        prestigeBlue: '#2f3542',
        cityLight: '#dfe4ea',
        twinkleBlue: '#ced6e0',
        antiFlashWhite: '#f1f2f6'
    }
});

export default theme;