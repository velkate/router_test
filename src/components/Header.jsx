import React from 'react';
import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography,
    Link,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { switchToLogOut } from '../hooks/useAuthStore';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        justifyContent: 'center',
        backgroundColor: '#2b3254',
        minHeight: 84,
    },
    logo: {
        flexGrow: 1,
        fontWeight: 900,
    },
    logoSubtitle: {
        border: '1px solid #fff',
        padding: '3px 5px',
        fontSize: 14,
        fontWeight: 300,
        borderRadius: 8,
    },
    loginBtn: {
        backgroundColor: '#0ED2AF',
        borderRadius: 30,
        padding: '10px 40px',
        fontWeight: '900',
        fontSize: 16,
        '&:hover': {
            backgroundColor: '#2befcc',
        },
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    listItem: {
        margin: '0 30px',
    },
    toolbarHeaderWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerRightSide: {
        display: 'flex',
        alignItems: 'center',
    },
});

const Header = () => {
    const classes = useStyles();

    let { auth, dispatch } = useAuth();
    let history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbarHeaderWrapper}>
                    <div className={classes.headerLeftSide}>
                        <NavLink
                            exact
                            to='/'
                            as={Link}
                            className={classes.link}
                        >
                            <Typography variant='h6' className={classes.logo}>
                                maildroppa{' '}
                                <span className={classes.logoSubtitle}>
                                    beta
                                </span>
                            </Typography>
                        </NavLink>
                    </div>
                    <div className={classes.headerRightSide}>
                        {auth.token ? (
                            <NavLink
                                to='/analytics'
                                as={Link}
                                className={classes.link}
                            >
                                <Typography
                                    variant='h6'
                                    className={classes.listItem}
                                >
                                    Analytics
                                </Typography>
                            </NavLink>
                        ) : null}
                        <NavLink to='/login' as={Link} className={classes.link}>
                            {!auth.token ? (
                                <Button
                                    color='inherit'
                                    className={classes.loginBtn}
                                >
                                    Log In
                                </Button>
                            ) : (
                                <Button
                                    color='inherit'
                                    className={classes.loginBtn}
                                    onClick={() => {
                                        dispatch(switchToLogOut());
                                        history.push('/');
                                    }}
                                >
                                    Log Out
                                </Button>
                            )}
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
