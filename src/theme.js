import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#5fb51e',
            dark: '#148418',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f4b123',
            dark: '#baaa25',
            contrastText: '#000',
        },
    },
});
export default theme;