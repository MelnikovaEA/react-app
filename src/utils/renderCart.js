
import CartItem from "../components/cart/CartItem";

export const checkCart = (arr, obj, dispatch) => {
    const index = arr.findIndex(item => item.id === obj.id || item.price === obj.price);
    if (index !== -1) {
        // Если товар уже есть в корзине, обновляем его количество
        const newArr = [...arr];
        newArr[index] = {...newArr[index], qty: newArr[index].qty + 1, totPrice: newArr[index].qty * newArr[index].price };
        return newArr;
    } else {
        // Если товара нет в корзине, добавляем его
        return [...arr, obj];
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