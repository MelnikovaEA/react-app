import React, {useContext } from 'react';
import StldSortArea, {StldSortLabel, StldSortPopUp} from "../styled/sort/StldSortArea";
import {v4 as uuidv4} from "uuid";
import { setSelectedType, setOrderType, setVisible } from "../../redux/slices/sortSlice";
import {useDispatch, useSelector} from "react-redux";
import {CurPageNumContext} from "../../App";

const variables = [
    {name: 'популярности', sortProp: 'rating'},
    {name: 'цене', sortProp: 'price'},
    {name: 'алфавиту', sortProp: 'name'},
];

const Sort = () => {

    const { curPageNum, setCurPageNum } = useContext(CurPageNumContext);

    const visible = useSelector((store) => store.sort.visible);
    const selectedType = useSelector((store) => store.sort.selectedType);
    const dispatch = useDispatch();

    const onVariableClick = (obj) => {
        dispatch(setSelectedType(obj));
        setCurPageNum(curPageNum);
        dispatch(setVisible(false));
    }

    return (
        <StldSortArea>
            <StldSortLabel>
                <img src="/images/sort_icon.svg" alt="icon" style={{marginRight: "5px"}}/>
                <b>Сортировка по:</b>
                <span onClick={() => dispatch(setVisible(!visible))}>{selectedType.name}</span>
                <span onClick={() => dispatch(setOrderType('asc'))}> ↑</span>
                <span onClick={() => dispatch(setOrderType('desc'))}> ↓</span>
            </StldSortLabel>
            {visible && (
                <StldSortPopUp>
                    <ul>
                        {variables.map((obj) => {
                            return <li onClick={() => onVariableClick(obj)}
                                       className={obj.name === selectedType.name ? 'active' : null}
                                       key={uuidv4()}
                            > {obj.name}</li>})
                        }
                    </ul>
                </StldSortPopUp>)}
        </StldSortArea>
    );
}

export default Sort;