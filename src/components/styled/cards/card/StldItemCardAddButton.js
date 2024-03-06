import styled from "styled-components";

const StldItemCardAddButton = styled.button`
  display: inline-block;
  background-color: orange;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  /*transition: background-color duration ease-in-out, border-color duration ease-in-out;*/
  border: 1px solid transparent;

  &:active {
    background-color: #f0a535;
    transform: translateY(1px);
  }
  
  span {
    color: #fff;
    padding: 0 10px;
    font-size: 17px;
    
    &:hover {
      color: crimson;
    }
  }
  
  i {
    display: inline-block;
    border-radius: 30px;
    background-color: darkorange;
    color: #fff;
    font-weight: 600;
    width: 25px;
    height: 25px;
    font-style: normal;
    font-size: 17px;
    line-height: 25px;
    position: relative;
    //top: -1px;
    //left: 3px;
    
    &:hover {
      color: crimson;
    }
  }
`

export default StldItemCardAddButton;