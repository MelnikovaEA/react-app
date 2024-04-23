import {AppDispatch} from "../redux/store.ts";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export const renderPagination = (pages: number, dispatch: AppDispatch, curPageNum: number, setCurPageNum: ActionCreatorWithPayload<number>) => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
        elements.push(<li
            key={i}
            onClick={() => {
                dispatch(setCurPageNum(i))
            }
            }
            className={curPageNum === i ? 'active' : undefined}>{i}</li>);
    }
    return elements;
}