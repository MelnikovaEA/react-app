import styled from "styled-components";

const CartDiv = styled.div`
  
`

export const CartTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const CartWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const CartHeader = styled.h2`
  display: flex;
  align-items: center;
  font-size: 30px;
`

export const CartIcon = styled.img`
  width: 40px;
  height: 40px;
`

export const CartOrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    margin: 5px;
  }
`

export const CartButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`

export default CartDiv;