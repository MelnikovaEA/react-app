import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
import MonsterCardSkeleton from "./MonsterCardSkeleton";
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import Pagination from "../pagination/Pagination";
import {setItems, setPagesQty, setIsLoading} from "../../redux/slices/mainSlice";
import {setCurPageNum, setQueryData } from "../../redux/slices/filterSlice";

const MonstersCardsContainer = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const {items, pagesQty, isLoading} = useSelector((store) => store.main);
    const {activeCategory, selectedType, orderType, curPageNum, inputData} = useSelector((store) => store.filter);

    const isSearchParams = useRef(false);
    const searchData = inputData ? inputData : '';

    const categoryParam = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam = `_sort=${encodeURIComponent(selectedType)}`;
    const orderParam = `_order=${encodeURIComponent(orderType)}`;
    const searchParam = `name_like=${encodeURIComponent(searchData)}`;

    const url = `http://localhost:3001/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=${curPageNum}&_limit=8`;

    const getBackendData = () => {
        axios.get(url)
            .then(response => {
                // Получаем заголовок X-Total-Count
                const totalCount = response.headers['x-total-count'];
                dispatch(setPagesQty(Math.ceil(totalCount / 8))); // Предполагается, что на каждой странице 8 элементов
                return response.data;
            })
            .then(data => {
                dispatch(setItems(data));
                dispatch(setIsLoading(false));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error.message);
                dispatch(setIsLoading(false));
            });
    }

    useEffect(()=>{
        if(searchParams){
            const params = Object.fromEntries(searchParams.entries());
            console.log('PARAMS = ', params);
            dispatch(setQueryData({...params}));
            isSearchParams.current = true;
        }
    }, [])

    useEffect(() => {
        dispatch(setIsLoading(true));

        if(!isSearchParams.current){
            getBackendData();
        }

        isSearchParams.current = false;
        //window.scroll(0, 0);
    }, [activeCategory, selectedType, orderType, searchData, curPageNum]);

    useEffect(() => {

        const queryParams = {
            ...(selectedType !== 'rating' && { sort: selectedType }),
            ...(activeCategory && { category: activeCategory }),
            ...(searchData && { search: searchData })
        };

        setSearchParams(queryParams);

    }, [activeCategory, selectedType, searchData]);

    const skeletons = [...new Array(8)].map((_, index) => {
        return <MonsterCardSkeleton key={index}/>
    });

    //чтобы при поиске через окошко search фильтровать статичный массив(а не с бэкенда), после items перед
    // map можно добавить свою фильтрацию: .filter((obj)=>obj.name.toLowerCase().includes(inputData.toLowerCase()))

    return (
        <>
            <CategoriesSortContainer/>
            <StldCardsContainer>
                {isLoading ? skeletons : items.map((monster) => (
                    <MonsterCard key={uuidv4()}
                                 name={monster.name}
                                 image={monster.image}
                                 price={monster.price}
                                 types={monster.types}
                                 extraProps={monster.extraProps}
                        //это можно написать короче через spread, но я не буду
                        // {...monster}
                    />)
                )}
            </StldCardsContainer>
            <Pagination pagesQty={pagesQty}
                        curPageNum={curPageNum}
                        setCurPageNum={setCurPageNum}
            />
        </>
    );
};

export default MonstersCardsContainer;