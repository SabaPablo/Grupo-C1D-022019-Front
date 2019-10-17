import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5D6D8B',
            main: '#2D4571',
            dark: '#0B2657',
            contrastText: '#9B9FA5',
        },
        secondary: {
            light: '#52827D',
            main: '#236A62',
            dark: '#003933',
            contrastText: '#000000',
        },
    },
});
export default theme;