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
import {setOrder, setPrice, setTotal} from "../../redux/slices/cartSlice";

const CartItem = ({hashId, image, name, extProps, type, qty, totPrice}) => {

    const dispatch = useDispatch();
    const order = useSelector(store => store.cart.order);

    useEffect(()=>{
        dispatch(setPrice());
        dispatch(setTotal());
    }, [order]);

    const handleDelete = (arr) => {
        const newArr = arr.filter(item => item.hashId !== hashId);
        dispatch(setOrder(newArr));
    }

    const handleAdd = (arr) => {
        const index = arr.findIndex(item => item.hashId === hashId);
        const newObj = {...arr[index], qty: arr[index].qty + 1, totPrice: arr[index].totPrice + arr[index].price};
        const newArr = [...arr.slice(0, index), newObj, ...arr.slice(index + 1)];
        dispatch(setOrder(newArr));
    }

    const handleSubtract = (arr) => {
        const index = arr.findIndex(item => item.hashId === hashId);
        if (arr[index].qty > 1) {
            const newObj = {...arr[index], qty: arr[index].qty - 1, totPrice: arr[index].totPrice - arr[index].price};
            const newArr = [...arr.slice(0, index), newObj, ...arr.slice(index + 1)];
            dispatch(setOrder(newArr));
        }
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
                <CartItemSmallButton onClick={() => handleSubtract(order)}>
                    -
                </CartItemSmallButton>
                <b>{qty}</b>
                <CartItemSmallButton onClick={() => handleAdd(order)}>
                    +
                </CartItemSmallButton>
            </CartItemCount>
            <CartItemSum>
                <b>{totPrice} ₽</b>
            </CartItemSum>
            <CartItemSmallButton className={'delete'}
                                 onClick={() => handleDelete(order)}
            >
                x
            </CartItemSmallButton>
        </CartItemDiv>
    );
};

export default CartItem;