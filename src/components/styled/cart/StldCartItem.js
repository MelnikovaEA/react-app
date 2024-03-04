import styled from "styled-components";

const CartItemDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 2.5fr 3fr 1fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  border-bottom: 1px solid darkgrey;
`


export const CartItemImg = styled.img`
  width: 120px;
  height: 120px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  b {
    margin: 0 15px;
  }
`

export const CartItemSum = styled.div`
  
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