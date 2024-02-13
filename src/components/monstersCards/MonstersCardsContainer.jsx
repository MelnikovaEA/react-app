import React, {useEffect, useState} from 'react';
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
//import monsters from "../../assets/monsters.json";
import {v4 as uuidv4} from "uuid";
import MonsterCardSkeleton from "./MonsterCardSkeleton";

const MonstersCardsContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://65ca191b3b05d29307dfae09.mockapi.io/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            });
    }, []);

    return (
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
    );
};

export default MonstersCardsContainer;