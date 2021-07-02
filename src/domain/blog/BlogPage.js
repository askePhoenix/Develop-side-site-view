import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from "../../component/header/Header";
import Copyright from "../../component/copyrignt/Copyright";
import axios from "axios";


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

export default function BlogPage(props) {
    useEffect(() => {
        if (props.token !== null)
            axios.defaults.headers.common['Authorization'] = props.token;
    }, [props.token])

    const classes = useStyles();

    return (
        <Container component="main">
            <Header title="Blog" sections={sections} token={props.token}> </Header>
            <CssBaseline/>
            <div className={classes.paper}>
                컨텐츠
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}