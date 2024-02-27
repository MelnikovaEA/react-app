import StldSortArea, {StldSortLabel, StldSortPopUp} from "../styled/sort/StldSortArea";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import { setSelectedType, setOrderType, setVisible } from "../../redux/slices/sortSlice";
import { setCurPageNum } from "../../redux/slices/mainSlice";

const variables = [
    {name: 'популярности', sortProp: 'rating'},
    {name: 'цене', sortProp: 'price'},
    {name: 'алфавиту', sortProp: 'name'},
];

const Sort = () => {

    const dispatch = useDispatch();

    const visible = useSelector((store) => store.sort.visible);
    const selectedType = useSelector((store) => store.sort.selectedType);
    const curPageNum = useSelector((store) => store.main.curPageNum);


    const onVariableClick = (obj) => {
        dispatch(setSelectedType(obj));
        dispatch(setCurPageNum(curPageNum));
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