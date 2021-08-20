import { createTheme } from '@material-ui/core';
import { createBreakpoints } from '@material-ui/system';

/*
Default MUI Breakpoints:
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 960px
    lg, large: 1280px
    xl, extra-large: 1920px
*/

const breakpoints = createBreakpoints({});

const theme = createTheme({
    palette: {
        success: {
            //main: '#00C590',
            //main: '#5e977a',
            //main: '#54b2a9',
            main: '#009688',
            //main: '#35a79c',
        },
        error: {
            main: '#96000e',
        },
        background: {
            default: '#2A1541',
        },
    },
    typography: {
        h3: {
            [breakpoints.down('md')]: {
                fontSize: '1.5rem',
            },
        },
    },
    breakpoints: breakpoints,
});

export default theme;
