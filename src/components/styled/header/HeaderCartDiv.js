import styled from "styled-components";

const HeaderCartDiv = styled.div`
  display: flex;
  margin: 10px 10px 10px 30px;

  @media(min-width: 320px) and (max-width: 480px){
    margin: 5px 0;
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
    padding: 12px 25px;
    background-color: orange;
    border-radius: 30px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;
    text-decoration: none;

    @media(min-width: 320px) and (max-width: 480px){
      padding: 4px 20px;
      min-width: 70px;
    }
  }
`

export const HeaderCartWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

export default HeaderCartDiv;