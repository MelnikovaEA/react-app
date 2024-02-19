import React, {useEffect, useState} from 'react';
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
//import monsters from "../../assets/monsters.json";
import {v4 as uuidv4} from "uuid";
import MonsterCardSkeleton from "./MonsterCardSkeleton";
import CategoriesSortContainer from "../categories/CategoriesSortContainer";

const MonstersCardsContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState(0);
    const [selectedType, setSelectedType] = useState( {name: 'популярности', sortProp: 'rating'});
    const [orderType, setOrderType] = useState("asc");

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://65ca191b3b05d29307dfae09.mockapi.io/items?category=${activeCategory || ''}&sortBy=${selectedType.sortProp}&order=${orderType}`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            });
        window.scroll(0, 0);
    }, [activeCategory, selectedType, orderType]);

    return (
        <>
            <CategoriesSortContainer activeCategory={activeCategory}
                                     onClickAtCategory={(i)=>setActiveCategory(i)}
                                     selectedType={selectedType}
                                     setSelectedType={(i)=> setSelectedType(i)}
                                     setOrderType={(type)=>setOrderType(type)}
            />
            <StldCardsContainer>
                {isLoading
                    ? [...new Array(8)].map((_, index) => {
                        return <MonsterCardSkeleton key={index}/>
                    })
                    : items.map(monster => (
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
        </>
    );
};

export default MonstersCardsContainer;