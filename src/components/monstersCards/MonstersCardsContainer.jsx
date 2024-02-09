import React from 'react';
import StldCardsContainer from "../styled/cards/StldCardsContainer";
import MonsterCard from "./MonsterCard";
import monsters from "../../assets/monsters.json";
import {v4 as uuidv4} from "uuid";

const MonstersCardsContainer = () => {
    console.log(monsters)
    return (
        <StldCardsContainer>
            {monsters.map(monster => (
                    <MonsterCard key={uuidv4()}
                                 name={monster.name}
                                 image={monster.image}
                                 price={monster.price}
                                 types={monster.types}
                                 extraProps={monster.extraProps}
                        //это можно написать короче через spread, но я не буду
                        // {...monster}
                    />
                )
            )}
        </StldCardsContainer>
    );
};

export default MonstersCardsContainer;