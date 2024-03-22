import React from 'react';
import styled from "styled-components";
import Categories from "./Categories.js";
import Sort from "../sort/Sort";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`

const CategoriesSortContainer: React.FC = () => {
    return (
        <Wrapper>
            <Categories />
            <Sort />
        </Wrapper>
    );
};

export default CategoriesSortContainer;