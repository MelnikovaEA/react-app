import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import StldItemCardSelectorBlock from "../../styled/cards/card/StldItemCardSelectorBlock";
import StldItemCardDiv from "../../styled/cards/card/StldItemCardDiv";
import StldItemCardImg from "../../styled/cards/card/StldItemCardImg";
import StldItemCardPriceAndButtonDiv from "../../styled/cards/card/StldItemCardPriceAndButtonDiv";
import StldItemCardPriceBlock from "../../styled/cards/card/StldItemCardPriceBlock";
import StldItemCardAddButton from "../../styled/cards/card/StldItemCardAddButton";
import {setPrice, setTotal} from "../../../redux/slices/cartSlice";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../redux/slices/cartSlice";
import {createCartItemId} from "../../../utils/createCartItemId";

const ItemCard = ({id, image, name, price, types, extraProps}) => {

    const dispatch = useDispatch();

    const prices = {plain: price, magic: 500, clever: 1000, lazy: 99, strange: 350};

    const [addedProps, setAddedProps] = useState({clever: false, lazy: false, strange: false});
    const [extraPropsList, setExtraPropsList] = useState([]);
    const [selectedType, setSelectedType] = useState('plain');
    const [totalItemPrice, setTotalItemPrice] = useState(price);

    const getTotalItemPrice = () => {
        let totalPrice = price + (selectedType === 'magic' ? prices.magic : null);
        for (let key in addedProps) {
            if (addedProps[key]) {
                totalPrice += prices[key];
            }
        }
        setTotalItemPrice(totalPrice);
    }

    useEffect(() => {
        getTotalItemPrice()
    }, [selectedType, addedProps]);

    const onTypeHandleClick = (typeKey) => {
        setSelectedType(typeKey);
    }

    const onPropHandleClick = (propKey, propValue) => {
        selectExtraProp(propValue);
        setAddedProps({...addedProps, [propKey]: !addedProps[propKey]});
    }

    const selectExtraProp = (item) => {
        extraPropsList.includes(item)
            ? setExtraPropsList(extraPropsList.filter(i => i !== item))
            : setExtraPropsList([...extraPropsList, item]);
    }

    const typesItems = (types) => {
        return types.map((obj) => {
            const [key, value] = Object.entries(obj)[0];
            return <li key={uuidv4()}
                       className={selectedType === key ? 'active select' : 'select'}
                       onClick={() => onTypeHandleClick(key)}
            ><span>{value}</span></li>
        })
    }

    const extraPropsItems = (arr) => {
        return arr.map((obj) => {
            const [key, value] = Object.entries(obj)[0];
            return <li key={uuidv4()}
                       className={extraPropsList.includes(value) ? 'active prop' : 'prop'}
                       onClick={() => onPropHandleClick(key, value)}>
                <span>{value}</span>
                <span className='prop-span'>+ {prices[key]} ₽</span>
            </li>
        })
    }

    const onAddButtonClick = () => {
        const hashId = createCartItemId(id, selectedType, addedProps);
        const addedItem = {
            hashId,
            id,
            image,
            name,
            type: selectedType,
            extraProps: extraPropsList,
            price: totalItemPrice,
            qty: 1,
            totPrice: totalItemPrice
        }
        dispatch(addToCart(addedItem));
        dispatch(setPrice());
        dispatch(setTotal());
    }

    return (
        <StldItemCardDiv>
            <StldItemCardImg src={image} alt="monster"/>
            <h4>{name}</h4>
            <StldItemCardSelectorBlock>
                <ul>
                    {typesItems(types)}
                </ul>
                <ul>
                    {extraPropsItems(extraProps)}
                </ul>
            </StldItemCardSelectorBlock>
            <StldItemCardPriceAndButtonDiv>
                <StldItemCardPriceBlock>{totalItemPrice} ₽</StldItemCardPriceBlock>
                <StldItemCardAddButton onClick={() => onAddButtonClick()}>
                    <span>В корзину</span>
                </StldItemCardAddButton>
            </StldItemCardPriceAndButtonDiv>
        </StldItemCardDiv>
    );
};

export default ItemCard;