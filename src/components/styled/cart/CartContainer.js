import styled from "styled-components";

const CartDiv = styled.div`
  margin-top: 105px;
  width: 80%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 94%;
  }
`

export const CartTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: space-around;
    h3 {
      display: flex;
      align-items: center;
      font-size: 13px;
    }
  }
`

export const CartWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const CartHeader = styled.h2`
  display: flex;
  align-items: center;
  font-size: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
  }
`

export const CartIcon = styled.img`
  width: 40px;
  height: 40px;
`

export const CartOrderDetails = styled.div`
  display: flex;
  justify-content: space-around;

  span {
    font-size: 20px;
    margin: 10px 5px 5px 5px;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 13px;
    }
  }
`

export const CartButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0 30px 0;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 10px;
    justify-content: space-between;

    button {
      padding: 5px;

      span {
        font-size: 12px;
      }
    }
  }
`

export default CartDiv;