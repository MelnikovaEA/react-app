import {v4 as uuidv4} from 'uuid';
import StldItemCardSelectorBlock from "../../styled/cards/card/StldItemCardSelectorBlock";
import StldItemCardDiv from "../../styled/cards/card/StldItemCardDiv";
import StldItemCardImg from "../../styled/cards/card/StldItemCardImg";
import StldItemCardPriceAndButtonDiv from "../../styled/cards/card/StldItemCardPriceAndButtonDiv";
import StldItemCardPriceBlock from "../../styled/cards/card/StldItemCardPriceBlock";
import StldItemCardAddButton from "../../styled/cards/card/StldItemCardAddButton";
import {useState} from "react";


const ItemCard = ({image, name, price, types, extraProps}) => {

    const [itemCount, setItemCount] = useState(1);
    const [selectedItemType, setSelectedItemType] = useState(0);
    const [selectedItemExtraProps, setSelectedItemExtraProps] = useState([]);

    const selectExtraProp = (item) => {
        selectedItemExtraProps.includes(item)
            ? setSelectedItemExtraProps(selectedItemExtraProps.filter(i => i !== item))
            : setSelectedItemExtraProps([...selectedItemExtraProps, item]);
    }

    const onButtonClick = () => {
        setItemCount(itemCount + 1);
    }

    return (
        <StldItemCardDiv>
            <StldItemCardImg src={image} alt="monster"/>
            <h4>{name}</h4>
            <StldItemCardSelectorBlock>
                <ul>
                    {types.map((item, index) => (
                        <li key={uuidv4()}
                            onClick={() => setSelectedItemType(index)}
                            className={selectedItemType === index ? 'active' : null}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {extraProps.map((item) => (
                        <li key={uuidv4()}
                            onClick={() => selectExtraProp(item)}
                            className={selectedItemExtraProps.includes(item) ? 'active' : null}>{item}</li>
                    ))}
                </ul>
            </StldItemCardSelectorBlock>
            <StldItemCardPriceAndButtonDiv>
                <StldItemCardPriceBlock>от {price} ₽</StldItemCardPriceBlock>
                <StldItemCardAddButton onClick={onButtonClick}>
                    <img src="/images/add-icon.svg" alt="img"/>
                    <span>Добавить</span>
                    <i>{itemCount}</i>
                </StldItemCardAddButton>
            </StldItemCardPriceAndButtonDiv>
        </StldItemCardDiv>
    );
};

export default ItemCard;