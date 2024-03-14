import styled from "styled-components";

const HeaderCartButton = styled.button`
  display: flex;
  margin: 10px 10px 10px 30px;

  @media(min-width: 320px) and (max-width: 480px){
    margin: 5px 0;
    padding: 7px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    margin: 0;
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    margin-bottom: 1px;
    padding-left: 8px;
    padding-right: 4px;
  }
  
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 23px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    @media(min-width: 320px) and (max-width: 480px){
      min-width: 70px;
    }
  }
`

export const HeaderCartWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

export default HeaderCartButton;