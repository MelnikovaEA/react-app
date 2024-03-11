import React, {useEffect} from 'react';
import CartDiv, { CartButtonsDiv, CartHeader, CartIcon, CartOrderDetails, CartTopDiv, CartWrapperDiv } from "../styled/cart/StldCart";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {renderCart} from "../../utils/renderCart";
import {clearCart} from "../../redux/slices/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const dispatch = useDispatch();
    const {order, total, price} = useSelector(store=> store.cart);

    useEffect(()=>{
        renderCart(order);
    }, [order]);

    return (<CartWrapperDiv>
            {order.length > 0 ?
            <CartDiv>
                <CartTopDiv>
                    <CartHeader className="content__title">
                        <CartIcon src="/images/cart/cart.svg" alt="Trash Icon"/>Корзина</CartHeader>
                    <h3 onClick={()=>dispatch(clearCart())}>
                        &#128465; Очистить корзину
                    </h3>
                </CartTopDiv>
                <div className="content__items">
                    {renderCart(order)}
                </div>
                <div className="cart__bottom">
                    <CartOrderDetails>
                        <span> Всего монстров: <b>{total} шт.</b> </span>
                        <span> Сумма заказа: <b>{price} ₽</b> </span>
                    </CartOrderDetails>
                    <CartButtonsDiv>
                        <Link to='/'>
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
                : <EmptyCart />}
        </CartWrapperDiv>
    );
};

export default Cart;