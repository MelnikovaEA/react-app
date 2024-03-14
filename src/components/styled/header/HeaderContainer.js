import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #c1f092;
  border-bottom: 1px solid;
  padding: 18px 0;
  position: fixed;
  min-height: 105px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 5px;
    min-height: 170px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    padding: 10px 5px;
    min-height: 155px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {

  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    #header-logo {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 3;
    }

    #search-input {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 2;
    }

    #cart-item {
      grid-row-start: 2;
      grid-column-start: 2;

      grid-row-end: 3;
      grid-column-end: 3;
    }
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    display: flex;
    justify-content: start;
  }
`

export const HeaderLogoDiv = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    align-items: center;
  }
`

export const HeaderInfoWrapper = styled.div`
  @media (min-width: 821px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const HeaderText = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    font-size: 16px;
  }
`

export const HeaderDescription = styled.p`

`

export default HeaderContainer;