import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import ItemCardSkeleton from "./ItemCardSkeleton";
import {setItems, setPagesQty, setIsLoading} from "../../redux/slices/mainSlice";
import {setQueryData} from "../../redux/slices/filterSlice";
import {fetchData} from "../../utils/fetchData";
import {renderItems} from "../../utils/renderItems";

const ItemsCardsContainer = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const {items, isLoading} = useSelector((store) => store.main);
    const {activeCategory, selectedType, orderType, curPageNum, inputData} = useSelector((store) => store.filter);

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
        dispatch(setIsLoading(true));

        if (!isSearchParams.current) {
            fetchData(url, dispatch, setIsLoading, setItems, setPagesQty);
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
            {isLoading ? skeletons : renderItems(items)}
        </StldCardsContainer>
    );
};

export default ItemsCardsContainer;