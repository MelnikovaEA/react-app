import React, {useEffect, useState} from 'react';
import { useContext } from "react";
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
//import monsters from "../../assets/db.json";
import {v4 as uuidv4} from "uuid";
import MonsterCardSkeleton from "./MonsterCardSkeleton";
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import {InputDataContext} from "../../App";

const MonstersCardsContainer = () => {

    const { inputData } = useContext(InputDataContext);
    console.log(inputData)

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState("");
    const [selectedType, setSelectedType] = useState( {name: 'популярности', sortProp: "rating"});
    const [orderType, setOrderType] = useState("asc");
    const searchData = inputData ? inputData : '';

    const categoryParam = activeCategory ? `category=${encodeURIComponent(activeCategory)}` : '';
    const sortParam = `_sort=${encodeURIComponent(selectedType.sortProp)}`;
    const orderParam = `_order=${encodeURIComponent(orderType)}`;
    const searchParam = `name_like=${encodeURIComponent(searchData)}`;

    const url = `http://localhost:3001/monsters?${categoryParam}&${sortParam}&${orderParam}&${searchParam}&_page=1&_limit=8`;

    useEffect(() => {
        console.log(items);
        setIsLoading(true);
        //запрос для мокапи, не работает поиск через search
        //`https://65ca191b3b05d29307dfae09.mockapi.io/items?category=${activeCategory || ''}&sortBy=${selectedType.sortProp}&order=${orderType}&search=${searchData}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
                setIsLoading(false);
            });
        window.scroll(0, 0);
    }, [activeCategory, selectedType, orderType, searchData]);

    const skeletons = [...new Array(8)].map((_, index) => {
        return <MonsterCardSkeleton key={index}/>
    });

    //чтобы при поиске через окошко search фильтровать статичный массив(а не с бэкенда), после items перед
    // map можно добавить свою фильтрацию: .filter((obj)=>obj.name.toLowerCase().includes(inputData.toLowerCase()))
    const receivedItems = items.map((monster) => (
        <MonsterCard key={uuidv4()}
                     name={monster.name}
                     image={monster.image}
                     price={monster.price}
                     types={monster.types}
                     extraProps={monster.extraProps}
            //это можно написать короче через spread, но я не буду
            // {...monster}
        />)
    );

    return (
        <>
            <CategoriesSortContainer activeCategory={activeCategory}
                                     onClickAtCategory={(i)=>setActiveCategory(i)}
                                     selectedType={selectedType}
                                     setSelectedType={(i)=> setSelectedType(i)}
                                     setOrderType={(type)=>setOrderType(type)}
            />
            <StldCardsContainer>
                {isLoading ? skeletons : receivedItems }
            </StldCardsContainer>
        </>
    );
};

export default MonstersCardsContainer;