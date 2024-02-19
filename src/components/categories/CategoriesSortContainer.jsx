import React from 'react';
import styled from "styled-components";
import Categories from "./Categories";
import Sort from "../sort/Sort";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`

const CategoriesSortContainer = ({activeCategory, onClickAtCategory, selectedType, setSelectedType,
                                     orderType, setOrderType}) => {
    return (
        <Wrapper>
            <Categories activeCategory={activeCategory} onClickAtCategory={onClickAtCategory}/>
            <Sort selectedType={selectedType} setSelectedType={setSelectedType}
                  setOrderType={setOrderType}
            />
        </Wrapper>
    );
};

export default CategoriesSortContainer;