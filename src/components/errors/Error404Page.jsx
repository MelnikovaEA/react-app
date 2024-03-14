import React from 'react';
import {Link} from "react-router-dom";
import {Image, Wrapper} from "../styled/errors/Error404PageContainer";

const Error404Page = () => {
    return (
        <Wrapper>
            <Image src="/images/404-icon.svg" alt="img"/>
            <p>Страница не найдена</p>
            <Link to='/'>Вернуться на главную</Link>
        </Wrapper>
    );
};

export default Error404Page;