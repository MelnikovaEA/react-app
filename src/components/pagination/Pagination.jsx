import StldPagination from "../styled/pagination/StldPagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurPageNum } from "../../redux/slices/mainSlice";

const Pagination = () => {

    const dispatch = useDispatch();

    const pagesQty = useSelector((store) => store.main.pagesQty);
    const curPageNum = useSelector((store) => store.main.curPageNum);

    console.log(pagesQty, curPageNum);

    const renderScale = (pages) => {
        const elements = [];
        for (let i = 1; i <= pages; i++) {
            elements.push(<li
                key={i}
                onClick={() => {dispatch(setCurPageNum(i))}
            }
                className={curPageNum === i ? 'active' : null}>{i}</li>);
        }
        return elements;
    }

    return (
        <StldPagination>
            <span onClick={() => dispatch(setCurPageNum(curPageNum && curPageNum - 1))}>&larr;</span>
            <ul>
                {renderScale(pagesQty)}
            </ul>
            <span onClick={() => dispatch(setCurPageNum(curPageNum<pagesQty ? curPageNum + 1 : curPageNum))}>&rarr;</span>
        </StldPagination>
    );
};

export default Pagination;