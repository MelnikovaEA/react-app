import React from 'react';
import styled from "styled-components";
import MemoizedCategories from "./Categories.js";
import MemoizedSort from "../sort/Sort";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`

const CategoriesSortContainer: React.FC = () => {
    return (
        <Wrapper>
            <MemoizedCategories />
            <MemoizedSort />
        </Wrapper>
    );
};

export default CategoriesSortContainer;