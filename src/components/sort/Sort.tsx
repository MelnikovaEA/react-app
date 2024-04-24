import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setSelectedType, setOrderType, setCurPageNum, selectFilter} from "../../redux/slices/filterSlice";
import {v4 as uuidv4} from "uuid";
import SortArea, {SortLabel, SortPopUp} from "../styled/sort/SortArea";

export type VariablesKeys = 'rating' | 'price' | 'name';
const variables: { [K in VariablesKeys]: string } = {rating: 'популярности', price: 'цене', name: 'алфавиту'};

const Sort: React.FC = () => {

    const dispatch = useAppDispatch();
    const sortRef = useRef<HTMLDivElement>(null);

    const { curPageNum, selectedType } = useAppSelector(selectFilter);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
                if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                    setVisible(false);
                }
        }

        document.body.addEventListener('click', handleOutsideClick);

        return () => document.body.removeEventListener('click', handleOutsideClick)
    }, []);

    const onVariableClick = (data: VariablesKeys) => {
        dispatch(setSelectedType(data));
        dispatch(setCurPageNum(curPageNum));
        setVisible(false);
    }

    const renderTypes = (obj: { [K in VariablesKeys]: string } ) => {
        const items = [];
        for (const key in obj) {
            items.push(
                <li onClick={() => onVariableClick(key as VariablesKeys)}
                    className={key === selectedType ? 'active' : undefined}
                    key={uuidv4()}>
                    {obj[key as VariablesKeys]}
                </li>
            );
        }
        return items;
    }

    return (
        <SortArea ref={sortRef}>
            <SortLabel>
                <img src="/images/sort_icon.svg" alt="icon" style={{marginRight: "5px"}}/>
                <b>Сортировка по:</b>
                <span onClick={() => setVisible(!visible)}>{variables[selectedType as VariablesKeys]}</span>
                <span onClick={() => dispatch(setOrderType('asc'))}> ↑</span>
                <span onClick={() => dispatch(setOrderType('desc'))}> ↓</span>
            </SortLabel>
            {visible && (
                <SortPopUp>
                    <ul>
                        {renderTypes(variables)}
                    </ul>
                </SortPopUp>)}
        </SortArea>
    );
}

const MemoizedSort = React.memo(Sort)
export default MemoizedSort;