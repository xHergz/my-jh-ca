import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';

import theme from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <style>{'body { margin: 0; background-color: #EAEAEA; }'}</style>
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
export default MyApp;
