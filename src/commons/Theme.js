import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: "#b2fcff",
            main: '#06bce5',
            dark: '#1e90ff',
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
        blue: '#3e64ff',
        lightBlue: '#5edfff',
        skyBlue: '#b2fcff',
        whiteBlue: '#ecfcff'
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
        ufoGreenLight: '#59de90',
        ufoGreen: '#2ed573',
        ufoGreenDark: '#24b761',
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
    },
    alertColor: {
        default: '#e6e6e6',
        lightGreen: '#edf7ed',
        lightBlue: '#e8f4fd',
        lightYellow: '#fff4e5',
        lightRed: '#fff4e5'
    },
    iconColor: {
        default: '#000000',
        green: '#4caf50',
        blue: '#2196f3',
        yellow: '#ff9800',
        red: '#f44336'
    }
});

export default theme;