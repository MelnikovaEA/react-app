import styled from "styled-components";

const EmptyCartContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 10vh;
  margin-top: 105px;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 20px;
    margin-top: 120px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    margin-top: 155px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    margin-top: 125px;
  }
`

export const EmptyCardButton = styled.button`
  width: 150px;
  padding: 20px;
  
  @media(min-width: 320px) and (max-width: 480px){
    font-size: 12px;
    padding: 12px;
  }
`

export const EmptyCartImg = styled.img`
  width: 130px;
  padding: 100px;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 50px 100px;
  }
`

export default EmptyCartContainer;