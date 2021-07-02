import React, {useEffect} from "react";
import Routes from "./Routes"


const TITLE = 'Side-Site Blog Demo'

function App() {
    useEffect(()=>{
        document.title = TITLE
    })
    return (
        <>
            <Routes></Routes>
        </>
    );
}

export default App;
