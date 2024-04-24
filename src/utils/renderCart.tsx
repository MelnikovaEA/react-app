import CartItem from "../components/cart/CartItem.js";
import {v4 as uuidv4} from 'uuid';
import {ItemOfCart} from "../appTypes/appTypes.ts";

export const renderCart = (items: ItemOfCart[]) =>{
     return items.map(item=> {
        const extProps= Array.isArray(item.extProps) ? item.extProps.map(prop => '\u2606\u00A0' + prop).join(' ') : '';
        const type = item.type === 'magic' ? '\u2606\u00A0волшебный' : '\u2606\u00A0обычный';
        return <CartItem key={uuidv4()}
                         {...item}
                         extProps={extProps}
                         type={type}/>
    })
}
