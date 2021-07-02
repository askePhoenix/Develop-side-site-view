import React from 'react';
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
import Header from "../../component/header/Header";
import Copyright from "../../component/copyrignt/Copyright";


const sections = [
    {title: 'Python', url: '#'},
    {title: 'Javascript', url: '#'},
    {title: 'C lang', url: '#'},
    {title: 'Go lang', url: '#'},
    {title: 'Java', url: '#'},
    {title: 'Swift', url: '#'},
    {title: 'C++', url: '#'},
    {title: 'React', url: '#'},
    {title: 'Android', url: '#'},
    {title: '추가', url: '#'},
];

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

export default function BlogPage() {
    const classes = useStyles();

    return (
        <Container component="main">
            <Header title="Blog" sections={sections}></Header>
            <CssBaseline/>
            <div className={classes.paper}>


            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}