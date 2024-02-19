import React, {useState} from 'react';
import {darken} from "polished";
import styled from "styled-components";

const CategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const CategoriesLi = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  list-style-type: none;
  height: fit-content;

  &.active {
    background-color: ${darken(0.5, '#f9f9f9')}
  }

  &:hover {
    background-color: ${darken(0.2, '#f9f9f9')};
  }
`

const Categories = () => {
    const categories = ['Все', 'Огнедышащие', 'Зеленые', `С\xa0рожками`, 'Хитрые', 'В\xa0горошек']
    const [activeItem, setActiveItem] = useState(0);

    const onItemClick = (index) => {
        setActiveItem(index)
    }

    return (
        <CategoriesUl>
            {categories.map((item, index) => (
                <CategoriesLi key={index + 1}
                              onClick={() => onItemClick(index)}
                              className={activeItem === index && 'active'}
                >{item}</CategoriesLi>))}
        </CategoriesUl>
    );
};

export default Categories;