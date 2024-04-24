import React from 'react';
import {ItemTypes} from "../../../appTypes/appTypes.ts";

export type TypeSelectorItemCardProps = {
    objKey: ItemTypes,
    value: string,
    selectedType: string,
    onTypeHandleClick: (k: ItemTypes) => void
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