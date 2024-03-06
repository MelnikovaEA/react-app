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
    const [selectedExtraProps, setSelectedExtraProps] = useState([]);
    const [selectedType, setSelectedType] = useState('plain');
    const [selectedBtn, setSelectedBtn] = useState(null);
    const [hashId, setHashId] = useState('');
    const [totalPrice, setTotalPrice] = useState(price);

    const [addedItem, setAddedItem] = useState({
        hashId: hashId,
        id,
        image,
        name,
        magic: false,
        extraProps: selectedExtraProps,
        price: totalPrice,
        qty: 1,
        totPrice: totalPrice
    });

    const onTypeHandleClick = (typeKey) => {
        setSelectedType(typeKey);
        if (selectedBtn !== typeKey) {
            setAddedItem({...addedItem, magic: !addedItem.magic});
            addedItem.magic
                ? setTotalPrice(totalPrice - prices.magic)
                : setTotalPrice(totalPrice + prices.magic)
        }
        setSelectedBtn(typeKey);
    }

    const onPropHandleClick = (propKey, propValue) => {
        selectExtraProp(propValue);
        setAddedProps({...addedProps, [propKey]: !addedProps[propKey]});
        addedProps[propKey]
            ? setTotalPrice(totalPrice - prices[propKey])
            : setTotalPrice(totalPrice + prices[propKey]);
    }

    useEffect(() => {
        setHashId(createCartItemId(id, selectedType, addedProps));
    }, [selectedType, addedProps]);

    useEffect(() => {
        setAddedItem({
            ...addedItem,
            extraProps: selectedExtraProps,
            price: totalPrice,
            totPrice: totalPrice,
            hashId: hashId
        });
    }, [selectedExtraProps, totalPrice, hashId]);

    const typesItems = (arr) => {
        return arr.map((obj) => {
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
                       className={selectedExtraProps.includes(value) ? 'active prop' : 'prop'}
                       onClick={() => onPropHandleClick(key, value)}
            >
                <span>{value}</span>
                <span className='prop-span'>+ {prices[key]} ₽</span>
            </li>
        })
    }

    const selectExtraProp = (item) => {
        selectedExtraProps.includes(item)
            ? setSelectedExtraProps(selectedExtraProps.filter(i => i !== item))
            : setSelectedExtraProps([...selectedExtraProps, item]);
    }

    const onAddButtonClick = (obj) => {
        dispatch(addToCart(obj));
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
                <StldItemCardPriceBlock>{totalPrice} ₽</StldItemCardPriceBlock>
                <StldItemCardAddButton onClick={() => onAddButtonClick(addedItem)}>
                    <img src="/images/add-icon.svg" alt="img"/>
                    <span>Добавить</span>
                </StldItemCardAddButton>
            </StldItemCardPriceAndButtonDiv>
        </StldItemCardDiv>
    );
};

export default ItemCard;