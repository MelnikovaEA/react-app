import React from 'react';
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo, CartItemSmallButton, CartItemSum
} from "../styled/cart/StldCartItem";

const CartItem = ({image, name, extProps, type, qty, totPrice}) => {



    // const onClearBtnHandleClick = (arr, obj) => {
    //
    // }
    //
    // const onAddBtnHandleClick = (arr) => {
    //
    // }
    //
    // const onDeleteBtnHandleClick = (arr) => {
    //
    // }


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
                <b>{totPrice} ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}>
                x
            </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;