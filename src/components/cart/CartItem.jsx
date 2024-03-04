import React from 'react';
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo, CartItemSmallButton, CartItemSum
} from "../styled/cart/StldCartItem";

const CartItem = ({image, name, extProps, type, qty, price}) => {
    console.log(image, name, extProps, type, qty, price)
    return (
        <CartItemDiv>
                <CartItemImg
                    src={image}
                    alt="img"
                />
            <CartItemInfo>
                <h3>{name}</h3>
                <p>{`${type}, ${extProps && extProps}`}</p>
            </CartItemInfo>
            <CartItemCount>
                <CartItemSmallButton>
                  -
                </CartItemSmallButton>
                <b>{qty}</b>
                <CartItemSmallButton>
                    +
                </CartItemSmallButton>
            </CartItemCount>
            <CartItemSum>
                <b>{price} ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}>
                x
            </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;