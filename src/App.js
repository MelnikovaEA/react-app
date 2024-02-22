import Header from "./components/header/Header";
import {Outlet} from "react-router-dom";
import {useState, createContext} from "react";

export const InputDataContext = createContext();

function App() {

    const [inputData, setInputData] = useState('');

    return (
        <InputDataContext.Provider value={{inputData, setInputData}}>
            <div className="App">
                <Header/>
                <Outlet />
            </div>
        </InputDataContext.Provider>
    );
}

export default App;
