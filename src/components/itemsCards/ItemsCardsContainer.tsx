import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {useSearchParams} from "react-router-dom";
import {fetchDataAction, selectMain} from "../../redux/slices/mainSlice";
import {selectFilter, setQueryData} from "../../redux/slices/filterSlice";
import {renderItems} from "../../utils/renderItems";
import CardsContainer from "../styled/cards/CardsContainer.tsx";
import ItemCardSkeleton from "./card/ItemCardSkeleton.js";

const ItemsCardsContainer: React.FC = () => {

    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const {items, status} = useAppSelector(selectMain);
    const {activeCategory, selectedType, orderType, curPageNum, inputData} = useAppSelector(selectFilter);

    const isSearchParams = useRef(false);
    const searchData = inputData ? inputData : '';

    const categoryParam: string = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam: string = `_sort=${encodeURIComponent(selectedType)}`;
    const orderParam: string = `_order=${encodeURIComponent(orderType)}`;
    const searchParam: string = `name_like=${encodeURIComponent(searchData)}`;

    const url: string = `https://json-server-vercel-omega-three.vercel.app/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=${curPageNum}&_limit=8`;

    const skeletons: React.JSX.Element[] = [...new Array(8)].map((_, index) => {
        return <ItemCardSkeleton key={index}/>
    });

    useEffect(() => {
        if (searchParams) {
            const params = Object.fromEntries(searchParams.entries());
            dispatch(setQueryData({...params}));
            isSearchParams.current = true;
        }
    }, []);

    useEffect(() => {

        if (!isSearchParams.current) {
            dispatch(fetchDataAction(url));
        }

        isSearchParams.current = false;
        //window.scroll(0, 0);
    }, [activeCategory, selectedType, orderType, searchData, curPageNum]);

    useEffect(() => {
        const queryParams = {
            ...(selectedType !== 'rating' && {sort: selectedType}),
            ...(activeCategory && {category: activeCategory}),
            ...(searchData && {search: searchData})
        };

        setSearchParams(queryParams);

    }, [activeCategory, selectedType, searchData]);

    return (
        <CardsContainer>
            {status === 'loading' ? skeletons : renderItems(items)}
        </CardsContainer>
    )
}

export default ItemsCardsContainer;