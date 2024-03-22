import React from 'react';
import {useSelector} from "react-redux";
import {selectMain} from "../../redux/slices/mainSlice";

const ErrorAppPage: React.FC = () => {
    const {message} = useSelector(selectMain);

    return (
        <div>
            {message}
        </div>
    );
};

export default ErrorAppPage;