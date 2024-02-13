import Header from "./components/header/Header";
import MonstersCardsContainer from "./components/monstersCards/MonstersCardsContainer";
import CategoriesSortContainer from "./components/categories/CategoriesSortContainer";
import {useEffect, useState} from "react";

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
            <CategoriesSortContainer />
            <MonstersCardsContainer />
        </div>
    );
}

export default App;
