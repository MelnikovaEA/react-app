
import CartItem from "../components/cart/CartItem";

const checkExtraProps = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every(value => arr2.some(item => item === value));
}

export const checkCart = (arr, obj, dispatch) => {
    const index = arr.findIndex(item => item.id === obj.id && item.magic === obj.magic
        && checkExtraProps(item.extraProps, obj.extraProps));
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
        // return [...arr, obj];
    }

}

export const renderCart = (items) =>{
    console.log('товар')
     return items.map(item=> {
        let extProps = item.extraProps ? item.extraProps.join(', ') : '';
        let type = item.magic ? 'волшебный' : 'обычный';
        return <CartItem {...item} extProps={extProps} type={type}/>
    })
}