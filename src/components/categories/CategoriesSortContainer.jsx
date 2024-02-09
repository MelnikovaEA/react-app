import React from 'react';
import styled from "styled-components";
import Categories from "./Categories";
import Sort from "../sort/Sort";

const Wrapper = styled.div`
display: flex;
  justify-content: space-between;
`

const CategoriesSortContainer = () => {
    return (
        <Wrapper>
            <Categories />
            <Sort />
        </Wrapper>
    );
};

export default CategoriesSortContainer;