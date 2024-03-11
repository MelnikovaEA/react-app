import React from 'react';
import {useSelector} from "react-redux";

const ErrorAppPage = () => {
    const message = useSelector((store)=> store.main.error)
    return (
        <div>
            {message}
        </div>
    );
};

export default ErrorAppPage;