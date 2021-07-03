import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../../component/copyrignt/Copyright";
import axios from "axios";
import {useCookies} from "react-cookie";

const login_url = "/api/users/api-token-auth/";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const GetAuthLogin = (id, pw, setter, setCookie) => {

    console.log("id : " + id);
    console.log("pw : " + pw);
    axios.post(login_url, {
        "username": id,
        "password": pw
    }).then((response) => {
        setter(response.data.token);
        setCookie('token', response.data.token, {path:'/',
            expires:new Date().setMinutes(new Date().getMinutes(), +30)})

    }).catch((e) => {
        console.log("error");
        console.log(e)
    })
}

export default function LoginPage(props) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [cookies, setCookie] = useCookies(['token'])

    useEffect(() => {
        if (props.token !== null)
            console.log("useEffect LoginPage 2");
            axios.defaults.headers.common['Authorization'] = props.token;
    }, [props.token])

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="ID"
                        name="id"
                        autoComplete="text"
                        autoFocus
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setPw(e.target.value);
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                        onClick={() => {
                            GetAuthLogin(id, pw, props.setToken, setCookie);
                        }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}