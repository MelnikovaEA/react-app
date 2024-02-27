import {Profiler} from "react";
import {Outlet} from "react-router-dom";

import onRenderCallback from "./utils/profilerUtils";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
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
