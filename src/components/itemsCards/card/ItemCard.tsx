import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setPrice, setTotal} from "../../../redux/slices/cartSlice";
import {addToCart} from "../../../redux/slices/cartSlice";
import {createCartItemId} from "../../../utils/createCartItemId";
import ItemCardSelectorBlock from "../../styled/cards/card/ItemCardSelectorBlock";
import ItemCardDiv, {
    ItemCardImg,
    ItemCardPriceBlock,
    ItemCardPriceAndButtonDiv,
    ItemName
} from "../../styled/cards/card/ItemCardDiv";
import CardAddButton from "../../styled/cards/card/ItemCardAddButton";
import {useNavigate} from "react-router-dom";
import TypeSelectorItemCard from "./TypeSelectorItemCard";
import PropSelectorItemCard from "./PropSelectorItemCard";
import {v4 as uuidv4} from "uuid";

const ItemCard = ({id, image, name, price, types, extraProps}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const prices = {plain: price, magic: 500, clever: 1000, lazy: 99, strange: 350};

    const [addedProps, setAddedProps] = useState({clever: false, lazy: false, strange: false});
    const [extraPropsList, setExtraPropsList] = useState([]);
    const [selectedType, setSelectedType] = useState('plain');
    const [totalItemPrice, setTotalItemPrice] = useState(price);

    // вычисляет общую сумму товара со всеми выбранными свойствами
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

    const renderSelectors = (items, Component, additionalProps) => {
        return items.map((obj) => {
            const [objKey, value] = Object.entries(obj)[0];
            return <Component key={uuidv4()} objKey={objKey} value={value} {...additionalProps} />;
        });
    };

    const showDetailsPage = () => {
        navigate(`/${id}`)
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
        <ItemCardDiv>
            <ItemCardImg src={image} alt="monster" onClick={() => showDetailsPage()}/>
            <ItemName onClick={() => showDetailsPage()}>{name}</ItemName>
            <ItemCardSelectorBlock>
                <ul>
                    {renderSelectors(types, TypeSelectorItemCard, {selectedType, onTypeHandleClick})}
                </ul>
                <ul>
                    {renderSelectors(extraProps, PropSelectorItemCard, {prices, extraPropsList, onPropHandleClick})}
                </ul>
            </ItemCardSelectorBlock>
            <ItemCardPriceAndButtonDiv>
                <ItemCardPriceBlock>{totalItemPrice} ₽</ItemCardPriceBlock>
                <CardAddButton onClick={() => onAddButtonClick()}>
                    <span>В корзину</span>
                </CardAddButton>
            </ItemCardPriceAndButtonDiv>
        </ItemCardDiv>
    );
}

export default ItemCard;