import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import type { NextPage } from 'next';
import Head from 'next/head';

import AppBar from '../components/header/AppBar';
import NavBar from '../components/header/NavBar';

const useStyles = makeStyles<Theme>((theme) => ({
    appContainer: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '60px 1fr 60px',
        gridTemplateAreas: `
          "navBar"
          "content"
          "appBar"
      `,
        [theme.breakpoints.up('md')]: {
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
    },
    appBar: {
        gridArea: 'appBar',
        display: 'grid',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Home: NextPage = () => {
    const styles = useStyles();
    return (
        <>
            <Head>
                <title>my-jh-ca</title>
                <meta name='description' content='command center' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.appContainer}>
                <NavBar className={styles.navBar} />
                <div className={styles.content} />
                <AppBar className={styles.appBar} />
            </main>
            <footer></footer>
        </>
    );
};

export default Home;
