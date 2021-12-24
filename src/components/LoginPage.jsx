import {
    Button,
    Checkbox,
    FormControlLabel,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../hooks/useAuth';
import { switchToLogIn } from '../hooks/useAuthStore';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '80px 0',
    },
    title: {
        fontSize: 26,
        fontWeight: 700,
        color: '#343d63',
        textAlign: 'center',
        wordBreak: 'break-word',
    },
    logo: {
        fontWeight: 900,
        color: '#343d63',
        marginBottom: 30,
    },
    link: {
        textDecoration: 'none',
    },
    logoSubtitle: {
        border: '1px solid #000',
        padding: '3px 5px',
        fontSize: 14,
        fontWeight: 300,
        borderRadius: 8,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        width: '100%',
        margin: 40,
    },
    formInput: {
        marginBottom: 20,
    },
    checkboxFormSection: {
        display: 'flex',
        alignItems: 'center',
    },
    rememberMe: {
        color: '#676c85',
    },
    loginBtn: {
        backgroundColor: '#0ED2AF',
        borderRadius: 30,
        padding: '10px 40px',
        fontWeight: '900',
        fontSize: 16,
        margin: '10px 0',
        '&:hover': {
            backgroundColor: '#2befcc',
        },
    },
});

const LoginPage = () => {
    const classes = useStyles();

    const initialValues = {
        mail: '',
        password: '',
        isChecked: true,
    };

    const [userCredentials, setUserCredentials] = useState(initialValues);

    const { dispatch } = useAuth();

    let history = useHistory();

    return (
        <div className={classes.wrapper}>
            <NavLink exact to='/' as={Link} className={classes.link}>
                <Typography variant='h6' className={classes.logo}>
                    maildroppa{' '}
                    <span className={classes.logoSubtitle}>beta</span>
                </Typography>
            </NavLink>
            <Typography className={classes.title}>
                Log Into Your Account
            </Typography>
            <form
                className={classes.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(switchToLogIn(userCredentials.mail)).then(() =>
                        history.push('/analytics')
                    );
                }}
            >
                <TextField
                    required
                    label='Email'
                    variant='outlined'
                    className={classes.formInput}
                    placeholder='your@email.com'
                    name='mail'
                    value={userCredentials.mail}
                    onChange={(e) => {
                        setUserCredentials((state) => ({
                            ...state,
                            [e.target.name]: e.target.value,
                        }));
                    }}
                />
                <TextField
                    required
                    label='Password'
                    type='password'
                    variant='outlined'
                    className={classes.formInput}
                    placeholder='Your password'
                    name='password'
                    value={userCredentials.password}
                    onChange={(e) => {
                        setUserCredentials((state) => ({
                            ...state,
                            [e.target.name]: e.target.value,
                        }));
                    }}
                />
                <div className={classes.checkboxFormSection}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color='primary'
                                label='Custom color'
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                                name='isChecked'
                                value={userCredentials.isChecked}
                                onChange={(e) => {
                                    setUserCredentials((state) => ({
                                        ...state,
                                        [e.target.name]: e.target.checked,
                                    }));
                                }}
                            />
                        }
                        label={
                            <Typography
                                variant='overline'
                                style={{ color: '#676c85' }}
                            >
                                Remember Me
                            </Typography>
                        }
                    />
                </div>
                <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    className={classes.loginBtn}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
