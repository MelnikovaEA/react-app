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
    height: 120px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    padding: 10px 5px;
    height: 155px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    padding: 0;
    height: 125px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 480px),
  (min-width: 481px) and (max-width: 820px),
  (min-width: 821px) and (max-width: 1024px) {
    display: grid;

    grid-template-rows: 1fr 1fr;
    //grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0;
    height: 100%;

    #header-logo {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 6;
    }

    #search-input {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 6;
    }

    #cart-item {
      grid-row-start: 1;
      grid-column-start: 6;

      grid-row-end: 3;
      grid-column-end: 7;
    }
  }
`

export const HeaderLogoDiv = styled.div`
  display: flex;
  align-items: center;

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
    font-size: 15px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
  }

`

export const HeaderDescription = styled.p`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
  }
`

export default HeaderContainer;