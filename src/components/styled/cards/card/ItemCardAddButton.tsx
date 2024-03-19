import styled from "styled-components";

const ItemCardAddButton = styled.button`
  display: inline-block;
  background-color: orange;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  /*transition: background-color duration ease-in-out, border-color duration ease-in-out;*/
  border: 1px solid transparent;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 10px 15px;
    min-width: 70px;
  }

  &:active {
    background-color: #f0a535;
    transform: translateY(1px);
  }
  
  span {
    color: #fff;
    padding: 0 10px;
    font-size: 17px;

    @media(min-width: 320px) and (max-width: 480px){
      font-size: 12px;
    }
    
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
    
    &:hover {
      color: crimson;
    }
  }
`

export default ItemCardAddButton;