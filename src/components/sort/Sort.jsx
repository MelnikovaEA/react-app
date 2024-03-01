import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import StldSortArea, {StldSortLabel, StldSortPopUp} from "../styled/sort/StldSortArea";
import {setSelectedType, setOrderType,  setCurPageNum} from "../../redux/slices/filterSlice";

const variables = {rating: 'популярности', price: 'цене', name: 'алфавиту'};

const Sort = () => {

    const dispatch = useDispatch();
    const sortRef = useRef(null);

    const { curPageNum, selectedType } = useSelector((store) => store.filter);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
                if (!event.composedPath().includes(sortRef.current)) {
                    setVisible(false);
                }
        }

        document.body.addEventListener('click', handleOutsideClick);

        return () => document.body.removeEventListener('click', handleOutsideClick)
    }, []);

    const onVariableClick = (data) => {
        dispatch(setSelectedType(data));
        dispatch(setCurPageNum(curPageNum));
        setVisible(false);
    }

    const renderTypes = (obj) => {
        let items = [];
        for (let key in obj) {
            items.push(
                <li onClick={() => onVariableClick(key)}
                    className={key === selectedType ? 'active' : null}
                    key={uuidv4()}>
                    {obj[key]}
                </li>
            );
        }
        return items;
    }

    return (
        <StldSortArea ref={sortRef}>
            <StldSortLabel>
                <img src="/images/sort_icon.svg" alt="icon" style={{marginRight: "5px"}}/>
                <b>Сортировка по:</b>
                <span onClick={() => setVisible(!visible)}>{variables[selectedType]}</span>
                <span onClick={() => dispatch(setOrderType('asc'))}> ↑</span>
                <span onClick={() => dispatch(setOrderType('desc'))}> ↓</span>
            </StldSortLabel>
            {visible && (
                <StldSortPopUp>
                    <ul>
                        {renderTypes(variables)}
                    </ul>
                </StldSortPopUp>)}
        </StldSortArea>
    );
}

export default Sort;