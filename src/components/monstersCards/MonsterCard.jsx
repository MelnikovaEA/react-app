import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import StldMonsterCardSelectorBlock from "../styled/cards/card/StldMonsterCardSelectorBlock";
import StldMonsterCardDiv from "../styled/cards/card/StldMonsterCardDiv";
import StldMonsterCardImg from "../styled/cards/card/StldMonsterCardImg";
import StldMonsterCardPriceAndButtonDiv from "../styled/cards/card/StldMonsterCardPriceAndButtonDiv";
import StldMonsterCardPriceBlock from "../styled/cards/card/StldMonsterCardPriceBlock";
import StldMonsterCardAddButton from "../styled/cards/card/StldMonsterCardAddButton";


const MonsterCard = ({image, name, price, types, extraProps }) => {
    const [monsterCount, setMonsterCount] = useState(0);

    const [selectedType, setSelectedType] = useState(0);
    const [extraProp, setExtraProp] = useState([]);

    const selectType = (index) => {
        setSelectedType(index)
    }

    const selectExtraProp = (index) => {
        setExtraProp(extraProp => extraProp.includes(index) ? extraProp.filter(i => i !== index) : [...extraProp, index])
    }

    const onButtonClick = () => {
        setMonsterCount(monsterCount+1)
    }

    return (
    <StldMonsterCardDiv>
        <StldMonsterCardImg src={image} alt="monster" />
        <h4>{name}</h4>
        <StldMonsterCardSelectorBlock>
            <ul>
                {types.map((item, index)=>(
                    <li key={uuidv4()}
                    onClick={()=>selectType(index)}
                    className={selectedType === index ? 'active' : null }>{item}</li>
                ))}
            </ul>
            <ul>
                {extraProps.map((item, index)=>(
                    <li key={uuidv4()}
                    onClick={()=>selectExtraProp(index)}
                    className={extraProp.includes(index) ? 'active' : null}>{item}</li>
                ))}
            </ul>
        </StldMonsterCardSelectorBlock>
        <StldMonsterCardPriceAndButtonDiv>
            <StldMonsterCardPriceBlock>от {price} ₽</StldMonsterCardPriceBlock>
            <StldMonsterCardAddButton onClick={onButtonClick}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                </svg>
                <span>Добавить</span>
                <i>{monsterCount}</i>
            </StldMonsterCardAddButton>
        </StldMonsterCardPriceAndButtonDiv>
    </StldMonsterCardDiv>
    );
};

export default MonsterCard;