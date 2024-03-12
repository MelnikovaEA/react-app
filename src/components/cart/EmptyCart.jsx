import React from 'react';
import {Link} from "react-router-dom";
import EmptyCartContainer, {EmptyCardButton, EmptyCartImg} from "../styled/cart/StldEmptyCart";

const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <h2>В корзине ничего нет</h2>
            <p>
                Чтобы заказать монстров, вернитесь на главную страницу.
            </p>
            <EmptyCartImg src="/images/cart/empty-cart.svg" alt="Empty cart"/>

            <Link to='/' style={{display: 'flex', justifyContent: 'center'}}>
                <EmptyCardButton><span>На&nbsp;главную</span></EmptyCardButton>
            </Link>
        </EmptyCartContainer>
    );
}

export default EmptyCart;