import React from 'react';
import {Link} from "react-router-dom";

const Error404Page = () => {
    return (
        <div>
           <p>Страница не найдена</p>
            <Link to='/'>Вернуться на главную</Link>
        </div>
    );
};

export default Error404Page;