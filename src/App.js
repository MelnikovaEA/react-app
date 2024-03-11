import {Profiler} from "react";
import {Outlet} from "react-router-dom";

import onRenderCallback from "./utils/profilerUtils";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import {useSelector} from "react-redux";
import ErrorAppPage from "./components/errors/ErrorAppPage";
import Error404Page from "./components/errors/Error404Page";

function App() {
    const status = useSelector((store)=> store.main.status);
    const error = useSelector((store)=> store.main.errorStatus);

    if (status === 'error' && error !==404) {
       return  <ErrorAppPage />
    }

    if(error === 404){
        return  <Error404Page />
    }

    return (
        <ErrorBoundary>
            <div className="App">
                <Header/>
                <Profiler id="myProfiler" onRender={onRenderCallback}>
                    <Outlet/>
                </Profiler>
            </div>
        </ErrorBoundary>
    );
}

export default App;
