import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchDataAction, selectMain} from "../../redux/slices/mainSlice";
import {selectFilter, setQueryData} from "../../redux/slices/filterSlice";
import {renderItems} from "../../utils/renderItems";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import ItemCardSkeleton from "./card/ItemCardSkeleton";

const ItemsCardsContainer = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const {items, status} = useSelector(selectMain);
    const {activeCategory, selectedType, orderType, curPageNum, inputData} = useSelector(selectFilter);

    const isSearchParams = useRef(false);
    const searchData = inputData ? inputData : '';

    const categoryParam = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam = `_sort=${encodeURIComponent(selectedType)}`;
    const orderParam = `_order=${encodeURIComponent(orderType)}`;
    const searchParam = `name_like=${encodeURIComponent(searchData)}`;

    const url = `http://localhost:3001/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=${curPageNum}&_limit=8`;

    const skeletons = [...new Array(8)].map((_, index) => {
        return <ItemCardSkeleton key={index}/>
    });

    useEffect(() => {
        if (searchParams) {
            const params = Object.fromEntries(searchParams.entries());
            console.log('PARAMS = ', params);
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
        <StldCardsContainer>
            {status === 'loading' ? skeletons : renderItems(items)}
        </StldCardsContainer>
    )
}

export default ItemsCardsContainer;