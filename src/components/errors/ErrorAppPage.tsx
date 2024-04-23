import React from 'react';
import {useAppSelector} from "../../hooks.ts";
import {selectMain} from "../../redux/slices/mainSlice";

const ErrorAppPage: React.FC = () => {
    const {error} = useAppSelector(selectMain);

    return (
        <div>
            {error}
        </div>
    );
};

export default ErrorAppPage;