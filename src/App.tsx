import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles<Theme>((theme) => ({
    appContainer: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '60px 1fr 0fr',
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
        gridArea: 'navBar',
        backgroundColor: '#000'
    },
    content: {
        gridArea: 'content'
    },
    appBar: {
        gridArea: 'appBar',
        backgroundColor: 'red'
    }
}));

function App() {
    const styles = useStyles();
    return (
        <div className={styles.appContainer}>
            <div className={styles.navBar} />
            <div className={styles.content} />
            <div className={styles.appBar} />
        </div>
    );
}

export default App;