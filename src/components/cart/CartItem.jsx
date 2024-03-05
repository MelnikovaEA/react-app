import React from 'react';
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo,
    CartItemSmallButton,
    CartItemSum
} from "../styled/cart/StldCartItem";
import _ from 'lodash'
import {useDispatch, useSelector} from "react-redux";
import {setOrder} from "../../redux/slices/cartSlice";

const CartItem = ({image, name, extProps, type, qty, totPrice}) => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.cart.order)

    const onClearBtnHandleClick = (arr) => {
        const newArr = arr.filter(item => item.name !== name && item.extProps !== extProps
            && item.totPrice !== totPrice);
        console.log('УДАЛИТЬ ТОВАР', newArr);
        dispatch(setOrder(newArr));
    }//ВОТ ТУТ ЗАКОНЧИЛА

    const onAddBtnHandleClick = (arr) => {

    }

    const onDeleteBtnHandleClick = (arr) => {

    }

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
            <CartItemSmallButton className={'delete'}
                                 onClick={() => onClearBtnHandleClick(order)}
            >
                x
            </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;