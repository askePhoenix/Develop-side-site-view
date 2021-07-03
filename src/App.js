import React, {useEffect, useState} from "react";
import Routes from "./Routes"
import axios from "axios";
import {CookiesProvider, useCookies} from 'react-cookie'


const TITLE = 'Side-Site Blog Demo'

function App() {
    const [token, setToken] = useState(null);
    const [cookies] = useCookies(['token']);


    useEffect(() => {
        console.log("useEffect App 1");
        document.title = TITLE
    })

    useEffect(() => {
        if (token !== null) {
            console.log("useEffect App 2");
        }
    }, [token])


    useEffect(() => {
        if (cookies.token !== undefined) {
            console.log("useEffect App 3");
            setToken(cookies.token);
        }
    }, []);

    return (
        <CookiesProvider>
            <Routes token={token} setToken={setToken}></Routes>
        </CookiesProvider>
    );
}

export default App;
