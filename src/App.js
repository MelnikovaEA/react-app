import {useState, createContext, Profiler} from "react";
import {Outlet} from "react-router-dom";

import onRenderCallback from "./utils/profilerUtils";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/ErrorBoundary";

export const InputDataContext = createContext({});
export const CurPageNumContext = createContext({});

function App() {

    const [inputData, setInputData] = useState('');
    const [curPageNum, setCurPageNum] = useState(1);

    return (
        <ErrorBoundary>
            <InputDataContext.Provider value={{inputData, setInputData}}>
                <CurPageNumContext.Provider value={{curPageNum, setCurPageNum}}>
                        <div className="App">
                            <Header/>
                            <Profiler id="myProfiler" onRender={onRenderCallback}>
                                <Outlet/>
                            </Profiler>
                        </div>
                </CurPageNumContext.Provider>
            </InputDataContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
