import React, {Profiler} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {selectFilter, setCurPageNum} from "../../redux/slices/filterSlice";
import {selectMain} from "../../redux/slices/mainSlice";
import onRenderCallback from "../../utils/profilerUtils";
import {renderPagination} from "../../utils/renderPagination";
import PaginationContainer from "../styled/pagination/PaginationContainer";

const Pagination: React.FC = () => {

    const dispatch = useAppDispatch();
    const pagesQty = useAppSelector(selectMain).pagesQty;
    const curPageNum = useAppSelector(selectFilter).curPageNum;

    return (
        pagesQty && <Profiler id="paginationProfiler" onRender={onRenderCallback}>
            <PaginationContainer>
                <span onClick={() => dispatch(setCurPageNum(curPageNum && curPageNum - 1))}>&larr;</span>
                <ul>{renderPagination(pagesQty, dispatch, curPageNum, setCurPageNum)}</ul>
                <span
                    onClick={() => dispatch(setCurPageNum(curPageNum < pagesQty ? curPageNum + 1 : curPageNum))}>&rarr;</span>
            </PaginationContainer>
        </Profiler>
    );
};

export default Pagination;