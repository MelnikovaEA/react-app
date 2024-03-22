import React from 'react';
import {Types} from "./ItemCard.tsx";

type TypeSelectorItemCardProps = {
    objKey: Types,
    value: string,
    selectedType: string,
    onTypeHandleClick: (k: Types) => void
}

const TypeSelectorItemCard: React.FC<TypeSelectorItemCardProps> = ({objKey, value, selectedType, onTypeHandleClick}) => {
    return (
        <li className={selectedType === objKey ? 'active select' : 'select'}
            onClick={() => onTypeHandleClick(objKey)}>
            <span>{value}</span>
        </li>
    );
};

export default TypeSelectorItemCard;