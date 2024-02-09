import Header from "./components/header/Header";
import MonstersCardsContainer from "./components/monstersCards/MonstersCardsContainer";
import CategoriesSortContainer from "./components/categories/CategoriesSortContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <CategoriesSortContainer />
            <MonstersCardsContainer />
        </div>
    );
}

export default App;
