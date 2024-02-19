import React from 'react';
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo, CartItemSmallButton, CartItemSum
} from "../styled/cart/StldCartItem";

const CartItem = () => {
    return (
        <CartItemDiv>
                <CartItemImg
                    src="/images/cart/cart.svg"
                    alt="Monster"
                />
            <CartItemInfo>
                <h3>Sunny</h3>
                <p>волшебный, хитрый</p>
            </CartItemInfo>
            <CartItemCount>
                <CartItemSmallButton>
                  -
                </CartItemSmallButton>
                <b>2</b>
                <CartItemSmallButton>
                    +
                </CartItemSmallButton>
            </CartItemCount>
            <CartItemSum>
                <b>770 ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}>
                x
            </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;