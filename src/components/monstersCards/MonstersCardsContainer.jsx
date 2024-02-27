import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
import MonsterCardSkeleton from "./MonsterCardSkeleton";
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import Pagination from "../pagination/Pagination";
import { setItems, setCurPageNum, setPagesQty, setIsLoading } from "../../redux/slices/mainSlice";

const MonstersCardsContainer = () => {

    const dispatch = useDispatch();

    const { items, pagesQty, curPageNum, isLoading }= useSelector((store) => store.main);
    const activeCategory = useSelector((store) => store.category.activeCategory);
    const selectedType = useSelector((store) => store.sort.selectedType);
    const orderType = useSelector((store) => store.sort.orderType);
    const inputData = useSelector((store) => store.search.inputData);

    const searchData = inputData ? inputData : '';

    const categoryParam = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam = `_sort=${encodeURIComponent(selectedType.sortProp)}`;
    const orderParam = `_order=${encodeURIComponent(orderType)}`;
    const searchParam = `name_like=${encodeURIComponent(searchData)}`;

    const url = `http://localhost:3001/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=${curPageNum}&_limit=8`;

    useEffect(() => {
        console.log(items);
        dispatch(setIsLoading(true));

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
        //window.scroll(0, 0);
    }, [activeCategory, selectedType, orderType, searchData, curPageNum]);

    const skeletons = [...new Array(8)].map((_, index) => {
        return <MonsterCardSkeleton key={index}/>
    });

    //чтобы при поиске через окошко search фильтровать статичный массив(а не с бэкенда), после items перед
    // map можно добавить свою фильтрацию: .filter((obj)=>obj.name.toLowerCase().includes(inputData.toLowerCase()))

    return (
        <>
            <CategoriesSortContainer />
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