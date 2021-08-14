import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import theme from './constants/theme';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
