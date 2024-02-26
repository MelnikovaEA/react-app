import {useState, createContext, Profiler} from "react";
import {Outlet} from "react-router-dom";

import onRenderCallback from "./utils/profilerUtils";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/ErrorBoundary";

export const InputDataContext = createContext({});
export const CurPageNumContext = createContext({});
export const LocalInputDataContext = createContext({});

function App() {

    const [inputData, setInputData] = useState('');
    const [localInputData, setLocalInputData] = useState('')
    const [curPageNum, setCurPageNum] = useState(1);

    return (
        <ErrorBoundary>
            <InputDataContext.Provider value={{inputData, setInputData}}>
                <LocalInputDataContext.Provider value={{localInputData, setLocalInputData}}>
                    <CurPageNumContext.Provider value={{curPageNum, setCurPageNum}}>
                        <div className="App">
                            <Header/>
                            <Profiler id="myProfiler" onRender={onRenderCallback}>
                                <Outlet/>
                            </Profiler>
                        </div>
                    </CurPageNumContext.Provider>
                </LocalInputDataContext.Provider>
            </InputDataContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
