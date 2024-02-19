import Header from "./components/header/Header";
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

function App() {

    // const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    //
    // useEffect(()=>{
    //     fetch('https://65ca191b3b05d29307dfae09.mockapi.io/items')
    //         .then(response=>response.json())
    //         .then(data=> setItems(data));
    // }, []);

    return (
        <div className="App">
            <Header/>
            <>
                <Outlet/>
            </>
        </div>
    );
}

export default App;
