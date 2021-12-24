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

const AnalyticsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.text}>
            <Typography className={classes.title}>Analytics pase</Typography>
            <Typography variant='caption'>Hi Markus!</Typography>
        </div>
    );
};

export default AnalyticsPage;
