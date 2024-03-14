import {Profiler, useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

import onRenderCallback from "./utils/profilerUtils";
import Header from "./components/header/Header";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import {useSelector} from "react-redux";
import {selectMain} from "./redux/slices/mainSlice";

function App() {

    const {status} = useSelector(selectMain);
    const {errorStatus} = useSelector(selectMain);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'error' && errorStatus !== 404) {
            navigate('/error')
        }

        if (errorStatus === 404) {
            navigate('/error404')
        }
    }, [status, errorStatus])

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
