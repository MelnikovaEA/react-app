import StldSortArea, {StldSortLabel, StldSortPopUp} from "../styled/sort/StldSortArea";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedType, setOrderType, setVisible, setCurPageNum} from "../../redux/slices/filterSlice";

const variables = {rating: 'популярности', price: 'цене', name: 'алфавиту'};

const Sort = () => {

    const dispatch = useDispatch();

    const {visible, curPageNum} = useSelector((store) => store.filter);
    const selectedType = useSelector((store)=> store.filter.selectedType)

    const onVariableClick = (data) => {
        dispatch(setSelectedType(data));
        dispatch(setCurPageNum(curPageNum));
        dispatch(setVisible(false));
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
        <StldSortArea>
            <StldSortLabel>
                <img src="/images/sort_icon.svg" alt="icon" style={{marginRight: "5px"}}/>
                <b>Сортировка по:</b>
                <span onClick={() => dispatch(setVisible(!visible))}>{variables[selectedType]}</span>
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