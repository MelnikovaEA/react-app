import styled from "styled-components";

const StldPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    justify-content: space-around;
    padding-inline-start: 0;
  }

  li {
    display: inline-flex;
    width: 35px;
    height: 35px;
    border: 3px solid orange;
    border-radius: 50%;
    padding: 5px 5px;
    margin: 10px 5px;
    color: orange;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    &.active {
      color: white;
      background-color: orange;
    }
    
    &:hover{
      color: white;
      background-color: orange;
    }
    
    
    
  }

  span {
    font-weight: bold;
    font-size: 30px;
    padding: 0 5px 0 0;
    color: orange;
    width: 20px;
    cursor: pointer;
  }

`

export default StldPagination;