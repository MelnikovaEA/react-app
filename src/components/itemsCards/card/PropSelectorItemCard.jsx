import React from 'react';
import {v4 as uuidv4} from "uuid";

const PropSelectorItemCard = ({objKey, value, prices, extraPropsList, onPropHandleClick}) => {
    return (
        <li key={uuidv4()}
            className={extraPropsList.includes(value) ? 'active prop' : 'prop'}
            onClick={() => onPropHandleClick(objKey, value)}>
            <span>{value}</span>
            <span className='prop-span'>+ {prices[objKey]} ₽</span>
        </li>
    );
};

export default PropSelectorItemCard;