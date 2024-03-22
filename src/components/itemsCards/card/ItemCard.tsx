import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setPrice, setTotal} from "../../../redux/slices/cartSlice";
import {addToCart} from "../../../redux/slices/cartSlice";
import {createCartItemId} from "../../../utils/createCartItemId";
import ItemCardSelectorBlock from "../../styled/cards/card/ItemCardSelectorBlock";
import ItemCardDiv, {
    ItemCardImg,
    ItemCardPriceBlock,
    ItemCardPriceAndButtonDiv,
    ItemName,
} from "../../styled/cards/card/ItemCardDiv";
import CardAddButton from "../../styled/cards/card/ItemCardAddButton";
import TypeSelectorItemCard from "./TypeSelectorItemCard";
import PropSelectorItemCard from "./PropSelectorItemCard";
import {v4 as uuidv4} from "uuid";
import {
    ItemType,
    ItemExtraProp,
    ItemOfCart,
    Prices
} from "../../../appTypes/appTypes";

type ItemCardProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    types: ItemType[];
    extraProps: ItemExtraProp[];
};

export type Types = 'plain' | 'magic';
type AddedPropsKeys = 'clever' | 'lazy' | 'strange';

type ExtraPropsType = string[];

const ItemCard: React.FC<ItemCardProps> = ({id, image, name, price, types, extraProps}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const prices: Prices  = {
        plain: price,
        magic: 500,
        clever: 1000,
        lazy: 99,
        strange: 350,
    };

    const [addedProps, setAddedProps] = useState({
        clever: false,
        lazy: false,
        strange: false,
    } );
    const [extraPropsList, setExtraPropsList] = useState<ExtraPropsType>([]);
    const [selectedType, setSelectedType] = useState<Types>("plain");
    const [totalItemPrice, setTotalItemPrice] = useState(price);

    // вычисляет общую сумму товара со всеми выбранными свойствами
    const getTotalItemPrice = () => {
        let totalPrice: number = price + (selectedType === "magic" ? prices.magic : null);
        for (const key in addedProps) {
            if (addedProps[key as AddedPropsKeys]) {
                totalPrice += prices[key as keyof Prices];
            }
        }
        setTotalItemPrice(totalPrice);
    };

    useEffect(() => {
        getTotalItemPrice();
    }, [selectedType, addedProps]);

    const onTypeHandleClick = (typeKey: Types) => {
        setSelectedType(typeKey);
    };

    const onPropHandleClick = (propKey: string, propValue: string) => {
        selectExtraProp(propValue);
        setAddedProps({...addedProps, [propKey]: !addedProps[propKey as AddedPropsKeys]});
    };

    const selectExtraProp = (item: string) => {
        extraPropsList.includes(item)
            ? setExtraPropsList(extraPropsList.filter((i) => i !== item))
            : setExtraPropsList([...extraPropsList, item]);
    };

    const renderSelectors = (items: ItemType[], Component: React.FC, additionalProps: any) => {
        return items.map((obj) => {
            const [objKey, value] = Object.entries(obj)[0];
            return (
                <Component
                    key={uuidv4()}
                    objKey={objKey}
                    value={value}
                    {...additionalProps}
                />
            );
        });
    };

    const showDetailsPage = () => {
        navigate(`/${id}`);
    };

    const onAddButtonClick = () => {
        const hashId = createCartItemId(id, selectedType, addedProps);
        const addedItem: ItemOfCart = {
            hashId,
            id,
            image,
            name,
            type: selectedType,
            extProps: extraPropsList,
            price: totalItemPrice,
            qty: 1,
            totPrice: totalItemPrice,
        };
        dispatch(addToCart(addedItem));
        dispatch(setPrice());
        dispatch(setTotal());
    };

    return (
        <ItemCardDiv>
            <ItemCardImg
                src={image}
                alt="monster"
                onClick={() => showDetailsPage()}
            />
            <ItemName onClick={() => showDetailsPage()}>{name}</ItemName>
            <ItemCardSelectorBlock>
                <ul>
                    {renderSelectors(types, TypeSelectorItemCard, {
                        selectedType,
                        onTypeHandleClick,
                    })}
                </ul>
                <ul>
                    {renderSelectors(extraProps, PropSelectorItemCard, {
                        prices,
                        extraPropsList,
                        onPropHandleClick,
                    })}
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
};

export default ItemCard;
