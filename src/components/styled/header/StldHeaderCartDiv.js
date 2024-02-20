import styled from "styled-components";

const StldHeaderCartDiv = styled.div`
  display: flex;
  margin: 10px 10px 10px 30px;

  span {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    padding-left: 8px;
    padding-right: 4px;
    margin-bottom: 1px;
  }
  
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 23px;
    padding: 12px 25px;
    background-color: orange;
    border-radius: 30px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    /*transition: background-color duration ease-in-out, border-color duration ease-in-out;*/
    border: 1px solid transparent;
    text-decoration: none;
  }
`

export const StldHeaterCartWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

export default StldHeaderCartDiv;