import StldPagination from "../styled/pagination/StldPagination";
import {useDispatch, useSelector} from "react-redux";
import {Profiler} from "react";
import {setCurPageNum} from "../../redux/slices/filterSlice";
import onRenderCallback from "../../utils/profilerUtils";
import {renderPagination} from "../../utils/renderPagination";

const Pagination = () => {

    const dispatch = useDispatch();
    const pagesQty = useSelector((store) => store.main.pagesQty);
    const curPageNum = useSelector((store) => store.filter.curPageNum);

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