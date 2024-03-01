import React from 'react';
import CartDiv, {
    CartButtonsDiv,
    CartHeader,
    CartIcon,
    CartOrderDetails,
    CartTopDiv,
    CartWrapperDiv
} from "../styled/cart/StldCart";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import {renderCart} from "../../utils/renderCart";
import {useSelector} from "react-redux";

const Cart = () => {

    const order = useSelector(store=> store.cart.order);

    return (<CartWrapperDiv>
            <CartDiv>
                <CartTopDiv>
                    <CartHeader className="content__title">
                        <CartIcon src="/images/cart/cart.svg" alt="Trash Icon"/>Корзина</CartHeader>
                    <h3>
                        <img src="/images/cart/cart.svg" alt="Trash Icon" style={{width: '20px', height: '20px'}}/>
                        Очистить корзину
                    </h3>
                </CartTopDiv>
                <div className="content__items">
                    {renderCart(order)}
                </div>
                <div className="cart__bottom">
                    <CartOrderDetails>
                        <span> Всего монстров: <b>3 шт.</b> </span>
                        <span> Сумма заказа: <b>900 ₽</b> </span>
                    </CartOrderDetails>
                    <CartButtonsDiv>
                        <Link to={'/'}>
                            <button>
                                <span>Вернуться назад</span>
                            </button>
                        </Link>
                        <button>
                            <span>Оплатить сейчас</span>
                        </button>
                    </CartButtonsDiv>
                </div>
            </CartDiv>
        </CartWrapperDiv>
    );
};

export default Cart;