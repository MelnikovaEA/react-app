import styled from "styled-components";
import {darken} from "polished";

const CategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 320px) and (max-width: 480px){
    justify-content: center;
    padding-inline-start: 0;
  }
`

export const CategoriesLi = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  list-style-type: none;
  height: fit-content;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 8px 20px;
    font-size: 12px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    padding: 10px 25px;
    font-size: 14px;
  }

  &.active {
    background-color: ${darken(0.5, '#f9f9f9')}
  }

  &:hover {
    background-color: ${darken(0.2, '#f9f9f9')};
  }
`

export default CategoriesUl;