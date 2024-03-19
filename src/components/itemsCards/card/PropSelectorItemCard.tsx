import React from 'react';

const PropSelectorItemCard = ({objKey, value, prices, extraPropsList, onPropHandleClick}) => {
    return (
        <li className={extraPropsList.includes(value) ? 'active prop' : 'prop'}
            onClick={() => onPropHandleClick(objKey, value)}>
            <span>{value}</span>
            <span className='prop-span'>+ {prices[objKey]} ₽</span>
        </li>
    );
};

export default PropSelectorItemCard;