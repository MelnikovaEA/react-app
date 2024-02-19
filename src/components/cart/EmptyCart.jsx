import React from 'react';
import EmptyCartContainer, {EmptyCardButton, EmptyCartImg} from "../styled/cart/StldEmptyCart";
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
            <EmptyCartContainer>
                <h2>Корзина пустая <icon>🧐</icon></h2>
                <p>
                    Для того, чтобы заказать монстров, вернитесь на главную страницу.
                </p>
                <EmptyCartImg src="/images/cart/empty-cart.svg" alt="Empty cart"/>

                <Link to="/" style={{display: 'flex', justifyContent: 'center'}}>
                    <EmptyCardButton><span>На&nbsp;главную</span></EmptyCardButton>
                </Link>

            </EmptyCartContainer>

    );
};

export default EmptyCart;