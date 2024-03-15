import styled from "styled-components";

export const HeaderButtonsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  @media(min-width: 320px) and (max-width: 480px),
  (min-width: 481px) and (max-width: 820px),
  (min-width: 821px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: end;
  }
`

export const HeaderCheckInButton = styled.button`
  margin: 10px 10px 10px 30px;
  font-weight: 600;
  font-size: 16px;
  
  @media(min-width: 320px) and (max-width: 480px){
    font-size: 12px;
    margin: 3px;
    padding: 5px 10px;
  }
`

const HeaderCartButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 30px;
  font-weight: 600;
  font-size: 16px;

  @media(min-width: 320px) and (max-width: 480px){
    font-size: 12px;
    margin: 3px;
    padding: 5px 10px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
   
  }

  span {
    display: flex;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    padding: 0 2px;
  }

  svg {
    height: 16px;
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

export default HeaderCartButton;