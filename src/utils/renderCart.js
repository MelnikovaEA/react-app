import CartItem from "../components/cart/CartItem";
import {v4 as uuidv4} from 'uuid';

export const renderCart = (items) =>{
     return items.map(item=> {
        let extProps = item.extraProps ? item.extraProps.map(prop => '\u2606\u00A0' + prop).join(' ') : '';
        let type = item.magic ? '\u2606\u00A0волшебный' : '\u2606\u00A0обычный';
        return <CartItem key={uuidv4()}
                         {...item} extProps={extProps} type={type}/>
    })
}
