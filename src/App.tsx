import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from './components/header/AppBar';
import NavBar from './components/header/NavBar';

const useStyles = makeStyles<Theme>((theme) => ({
    appContainer: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '60px 1fr 0px',
        gridTemplateAreas:`
            "navBar"
            "content"
            "appBar"
        `,
        [theme.breakpoints.down('md')]: {
            gridTemplateRows: '60px 1fr 60px',
            gridTemplateAreas:`
            "navBar"
            "content"
            "appBar"
        `,
        }
    },
    navBar: {
        gridArea: 'navBar'
    },
    content: {
        gridArea: 'content'
    },
    appBar: {
        gridArea: 'appBar',
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'grid'
        },
    }
}));

function App() {
    const styles = useStyles();
    return (
        <div className={styles.appContainer}>
            <NavBar className={styles.navBar} />
            <div className={styles.content} />
            <AppBar className={styles.appBar} />
        </div>
    );
}

export default App;