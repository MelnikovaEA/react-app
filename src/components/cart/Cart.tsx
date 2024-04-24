import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks.ts";
import {clearCart, selectCart} from "../../redux/slices/cartSlice";
import {renderCart} from "../../utils/renderCart";
import CartDiv, {
    CartButtonsDiv,
    CartHeader,
    CartIcon,
    CartOrderDetails,
    CartTopDiv,
    CartWrapperDiv
} from "../styled/cart/CartContainer";
import EmptyCart from "./EmptyCart";

const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const {order, total, price} = useAppSelector(selectCart);

    useEffect(() => {
        renderCart(order);
    }, [order]);

    return (<CartWrapperDiv>
            {order.length > 0 ?
                <CartDiv>
                    <CartTopDiv>
                        <CartHeader>
                            <CartIcon src="/images/cart/cart.svg" alt="icon"/>Корзина</CartHeader>
                        <h3 onClick={() => dispatch(clearCart())}>
                            &#128465; Очистить корзину
                        </h3>
                    </CartTopDiv>
                    <div>
                        {renderCart(order)}
                    </div>
                    <div>
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
                : <EmptyCart/>}
        </CartWrapperDiv>
    );
}

export default Cart;