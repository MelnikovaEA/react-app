import React, {useEffect} from 'react';
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo,
    CartItemSmallButton,
    CartItemSum
} from "../styled/cart/StldCartItem";
import _ from 'lodash'
import {useDispatch, useSelector} from "react-redux";
import { setPrice, setTotal, removeFromCart, incrementQty, decrementQty} from "../../redux/slices/cartSlice";

const CartItem = ({hashId, image, name, extProps, type, qty, totPrice}) => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.cart.order);

    useEffect(()=>{
        dispatch(setPrice());
        dispatch(setTotal());
    }, [order]);

    const handleDelete = () => {
        dispatch(removeFromCart(hashId));
    }

    const handleAdd = () => {
        dispatch(incrementQty(hashId));
    }

    const handleSubtract = () => {
        dispatch(decrementQty(hashId));
    }

    return (
        <CartItemDiv>
            <CartItemImg src={image} alt="img" />
            <CartItemInfo>
                <h3>{name}</h3>
                <p>{`${type} ${extProps && extProps}`}</p>
            </CartItemInfo>
            <CartItemCount>
                <CartItemSmallButton onClick={handleSubtract}> - </CartItemSmallButton>
                <b>{qty}</b>
                <CartItemSmallButton onClick={handleAdd}> + </CartItemSmallButton>
            </CartItemCount>
            <CartItemSum>
                <b>{totPrice} ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}
                                 onClick={handleDelete}
            > x </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;