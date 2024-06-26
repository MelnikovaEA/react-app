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

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr 1.3fr 0.7fr;


    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 2;
    }

    #item-1 {
      grid-row-start: 1;
      grid-column-start: 2;

      grid-row-end: 2;
      grid-column-end: 4;
    }

    #item-2 {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 2;
    }

    #item-3 {
      grid-row-start: 2;
      grid-column-start: 2;

      grid-row-end: 3;
      grid-column-end: 3;
    }

    #item-4 {
      grid-row-start: 2;
      grid-column-start: 3;

      grid-row-end: 3;
      grid-column-end: 4;

      justify-items: right;
    }
  }
`


export const CartItemImg = styled.img`
  width: 120px;
  height: 120px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    max-width: 30px;
  }

  span {
    justify-content: center;
    display: flex;
  }
`

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  b {
    margin: 0 15px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
`

export const CartItemSum = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    justify-self: center;
  }
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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    font-size: 12px;
  }

  &:hover {
    background-color: orange;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 25px;
    height: 25px;
    border: 1px solid orange;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    width: 30px;
    height: 30px;
    border: 2px solid orange;
  }

  &.delete {
    width: 30px;
    height: 30px;
    border: 3px solid darkgrey;
    color: darkgrey;

    &:hover {
      background-color: darkgrey;
      color: white;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      width: 22px;
      height: 22px;
      justify-self: end;
      border: 1px solid darkgrey;
    }

    @media (min-width: 481px) and (max-width: 820px) {
      width: 27px;
      height: 27px;
      justify-self: end;
      border: 1px solid darkgrey;
    }
  }
`

export default CartItemDiv;