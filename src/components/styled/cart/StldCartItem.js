import styled from "styled-components";

const CartItemDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid darkgrey;
`


export const CartItemImg = styled.img`
  width: 120px;
  height: 120px;
  align-self: center;
`

export const CartItemInfo = styled.div`
 
`

export const CartItemCount = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 150px;

  b {
    margin: 0 15px;
  }
`

export const CartItemSum = styled.div`
  margin: 0 50px 0 100px;
`

export const CartItemSmallButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid orange;
  background-color: white;
  color: orange;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  
  &:hover{
    background-color: orange;
    color: white;
  }
  
  &.delete{
    width: 30px;
    height: 30px;
    border: 3px solid darkgrey;
    color: darkgrey;

    &:hover{
      background-color: darkgrey;
      color: white;
    }
  }
`

export default CartItemDiv;