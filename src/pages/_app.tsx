import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';

import theme from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <style>{'body { margin: 0; }'}</style>
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
export default MyApp;
