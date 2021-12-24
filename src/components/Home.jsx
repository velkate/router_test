import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    text: {
        textAlign: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 700,
        color: '#343d63',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.text}>
            <Typography className={classes.title}>HOME PAGE</Typography>
            <Typography variant='caption'>coming soon</Typography>
        </div>
    );
};

export default Home;
