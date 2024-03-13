import React from 'react';
import {v4 as uuidv4} from "uuid";

const TypeSelectorItemCard = ({objKey, value, selectedType, onTypeHandleClick}) => {
    return (
        <li key={uuidv4()}
            className={selectedType === objKey ? 'active select' : 'select'}
            onClick={() => onTypeHandleClick(objKey)}>
            <span>{value}</span>
        </li>
    );
};

export default TypeSelectorItemCard;