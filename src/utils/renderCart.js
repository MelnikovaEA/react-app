import CartItem from "../components/cart/CartItem";
import {v4 as uuidv4} from 'uuid';

export const checkCart = (arr, obj, dispatch) => {

    const index = arr.findIndex(item => item.hashId === obj.hashId);
    if (index !== -1) {
        // Если товар уже есть в корзине, обновляем его количество
        const newArr = [...arr];
        newArr[index] = {...newArr[index], qty: newArr[index].qty + 1, totPrice: newArr[index].totPrice + obj.totPrice };
        console.log('Новый товар обновился: ', obj, 'Новый заказ: ', newArr)
        return newArr;
    } else {
        const newArr = [...arr, obj];
        // Если товара нет в корзине, добавляем его
        console.log('Новый товар добавлен: ', obj, 'Новый заказ: ', newArr)
        return newArr;
    }
}

export const renderCart = (items) =>{
     return items.map(item=> {
        let extProps = item.extraProps ? item.extraProps.join(', ') : '';
        let type = item.magic ? 'волшебный' : 'обычный';
        return <CartItem key={uuidv4()}
                         {...item} extProps={extProps} type={type}/>
    })
}


export const createCartItemId = (id, magic, obj) => {
    const clever = obj.clever ? '_clever' : '';
    const lazy = obj.lazy ? '_lazy' : '';
    const strange = obj.strange ? '_strange' : '';
    console.log('СВОЙТВА: ', clever, lazy, strange)
    return `${id}_${magic}${clever}${lazy}${strange}_${uuidv4()}`;
}