import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
import {v4 as uuidv4} from "uuid";
import MonsterCardSkeleton from "./MonsterCardSkeleton";
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import {InputDataContext} from "../../App";
import Pagination from "../pagination/Pagination";

const MonstersCardsContainer = () => {

    const {inputData, curPageNum, setCurPageNum} = useContext(InputDataContext);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const [curPageNum, setCurPageNum] = useState(1);
    const [pagesQty, setPagesQty] = useState(2);


    const [activeCategory, setActiveCategory] = useState("");
    const [selectedType, setSelectedType] = useState({name: 'популярности', sortProp: "rating"});
    const [orderType, setOrderType] = useState("asc");
    const searchData = inputData ? inputData : '';

    const categoryParam = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam = `_sort=${encodeURIComponent(selectedType.sortProp)}`;
    const orderParam = `_order=${encodeURIComponent(orderType)}`;
    const searchParam = `name_like=${encodeURIComponent(searchData)}`;

    const url = `http://localhost:3001/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=${curPageNum}&_limit=8`;

    useEffect(() => {
        console.log(items);
        setIsLoading(true);
        //запрос для мокапи, не работает поиск через search
        //`https://65ca191b3b05d29307dfae09.mockapi.io/items?category=${activeCategory || ''}&sortBy=${selectedType.sortProp}&order=${orderType}&search=${searchData}`
        fetch(url)
            .then(response => {
                // Получаем заголовок X-Total-Count
                const totalCount = response.headers.get('X-Total-Count');
                setPagesQty(Math.ceil(totalCount / 8)); // Предполагается, что на каждой странице 8 элементов
                return response.json();
            })
            .then(data => {
                console.log(data);
                setItems(data);
                setIsLoading(false);
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
            <CategoriesSortContainer activeCategory={activeCategory}
                                     onClickAtCategory={(i) => {
                                         setActiveCategory(i);
                                         setCurPageNum(1);
                                     }}
                                     selectedType={selectedType}
                                     setSelectedType={(i) => {
                                         setSelectedType(i);
                                         setCurPageNum(curPageNum);
                                     }}
                                     setOrderType={(type) => setOrderType(type)}
            />
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
            <Pagination pagesQty={ pagesQty }
                        curPageNum={ curPageNum }
                        setCurPageNum={setCurPageNum}
            />
        </>
    );
};

export default MonstersCardsContainer;