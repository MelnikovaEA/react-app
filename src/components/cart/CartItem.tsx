import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPrice, setTotal, removeFromCart, incrementQty, decrementQty, selectCart} from "../../redux/slices/cartSlice";
import CartItemDiv, {
    CartItemCount,
    CartItemImg,
    CartItemInfo,
    CartItemSmallButton,
    CartItemSum
} from "../styled/cart/CartItemContainer";
import {ItemOfCart} from "../../appTypes/appTypes";

const CartItem: React.FC<ItemOfCart> = ({hashId, image, name, extProps, type, qty, totPrice}) => {

    const dispatch = useDispatch();
    const { order } = useSelector(selectCart);

    useEffect(() => {
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
            <CartItemImg src={image} alt="img" id='item-0'/>
            <CartItemInfo id='item-1'>
                <h3>{name}</h3>
                <div>
                    <span>{type}</span>
                    <span>{extProps && extProps}</span>
                </div>
            </CartItemInfo>
            <CartItemCount id='item-2'>
                <CartItemSmallButton onClick={handleSubtract}> - </CartItemSmallButton>
                <b>{qty}</b>
                <CartItemSmallButton onClick={handleAdd}> + </CartItemSmallButton>
            </CartItemCount>
            <CartItemSum id='item-3'>
                <b>{totPrice} ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}
                                 onClick={handleDelete}
                                 id='item-4'
            >x</CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;