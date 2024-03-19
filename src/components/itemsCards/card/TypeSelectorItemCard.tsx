import React from 'react';

const TypeSelectorItemCard = ({objKey, value, selectedType, onTypeHandleClick}) => {
    return (
        <li className={selectedType === objKey ? 'active select' : 'select'}
            onClick={() => onTypeHandleClick(objKey)}>
            <span>{value}</span>
        </li>
    );
};

export default TypeSelectorItemCard;