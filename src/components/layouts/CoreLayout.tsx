import React from 'react';
import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import type { NextPage } from 'next';
import Head from 'next/head';

import AppBar from '../header/AppBar';
import NavBar from '../header/NavBar';
import { useDefaultProps } from '../../utils/hooks';

export type ContentLayout = 'singleColumn';

export type CoreLayoutProps = React.PropsWithChildren<{
    title: string;
    contentLayout?: ContentLayout;
}>;

const useStyles = makeStyles<Theme>((theme) => ({
    appContainer: {
        //minHeight: '100vh',
        //maxHeight: '100vh',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '60px 1fr 60px',
        gridTemplateAreas: `
          "navBar"
          "content"
          "appBar"
      `,
        [theme.breakpoints.up('md')]: {
            height: 'unset',
            gridTemplateRows: '60px 1fr 0px',
            gridTemplateAreas: `
              "navBar"
              "content"
              "appBar"
          `,
        },
    },
    navBar: {
        gridArea: 'navBar',
        backgroundColor: theme.palette.background.default,
    },
    content: {
        gridArea: 'content',
        maxHeight: 'calc(100vh - 60px - 60px)',
        overflow: 'auto',
    },
    appBar: {
        gridArea: 'appBar',
        display: 'grid',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    singleColumnLayout: {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        maxWidth: '100%',
        [theme.breakpoints.up('md')]: {
            padding: '32px 0',
            margin: ' 0 auto',
            minWidth: '900px',
            maxWidth: '1200px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '1200px',
            maxWidth: '1800px',
        },
    },
}));

const CoreLayout: NextPage<CoreLayoutProps> = (props: CoreLayoutProps) => {
    props = useDefaultProps(props, { contentLayout: 'singleColumn' });
    const styles = useStyles();
    const contentClasses = clsx({
        [styles.content]: true,
        [styles.singleColumnLayout]: props.contentLayout === 'singleColumn',
    });

    return (
        <>
            <Head>
                <title>{props.title} - my-jh-ca</title>
                <meta name='description' content='command center' />
                <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.appContainer}>
                <NavBar className={styles.navBar} />
                <div className={contentClasses}>
                    <Typography variant='h3'>{props.title}</Typography>
                    {props.children}
                </div>
                <AppBar className={styles.appBar} />
            </main>
        </>
    );
};

export default CoreLayout;
