import React from 'react';
import {Prices} from "../../../appTypes/appTypes.ts";

type PropSelectorItemCardProps = {
    objKey: string, 
    value: string,
    prices: Prices,
    extraPropsList: string[],
    onPropHandleClick: (k: string, v: string) => void
}

const PropSelectorItemCard: React.FC<PropSelectorItemCardProps> = ({objKey, value, prices, extraPropsList, onPropHandleClick}) => {
    return (
        <li className={extraPropsList.includes(value) ? 'active prop' : 'prop'}
            onClick={() => onPropHandleClick(objKey, value)}>
            <span>{value}</span>
            <span className='prop-span'>+ {prices[objKey as keyof Prices]}  ₽</span>
        </li>
    );
};

export default PropSelectorItemCard;