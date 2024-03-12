import {Profiler} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCurPageNum} from "../../redux/slices/filterSlice";
import {selectMain} from "../../redux/slices/mainSlice";
import onRenderCallback from "../../utils/profilerUtils";
import {renderPagination} from "../../utils/renderPagination";
import StldPagination from "../styled/pagination/StldPagination";

const Pagination = () => {

    const dispatch = useDispatch();
    const pagesQty = useSelector(selectMain).pagesQty;
    const curPageNum = useSelector(selectFilter).curPageNum;

    console.log(pagesQty, curPageNum);

    return (
        pagesQty && <Profiler id="paginationProfiler" onRender={onRenderCallback}>
            <StldPagination>
                <span onClick={() => dispatch(setCurPageNum(curPageNum && curPageNum - 1))}>&larr;</span>
                <ul>{renderPagination(pagesQty, dispatch, curPageNum, setCurPageNum)}</ul>
                <span
                    onClick={() => dispatch(setCurPageNum(curPageNum < pagesQty ? curPageNum + 1 : curPageNum))}>&rarr;</span>
            </StldPagination>
        </Profiler>
    );
};

export default Pagination;