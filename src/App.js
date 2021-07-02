import React, {useEffect, useState} from "react";
import Routes from "./Routes"
import axios from "axios";


const TITLE = 'Side-Site Blog Demo'

function App() {
    const [token, setToken] = useState(null)

    useEffect(() => {
        if (token !== null)
            axios.defaults.headers.common['Authorization'] = token;
    }, [token])

    useEffect(() => {
        document.title = TITLE
    })
    return (
        <>
            <Routes token={token} setToken={setToken}></Routes>
        </>
    );
}

export default App;
