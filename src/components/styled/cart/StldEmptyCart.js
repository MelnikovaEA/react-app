import styled from "styled-components";

const EmptyCartContainer = styled.div`
  align-items: center;
  text-align: center;
  padding: 10vh;

  @media(max-width: 400px){
    padding: 20px;
  }
`

export const EmptyCardButton = styled.button`
  width: 150px;
  padding: 20px;
  
  @media(max-width: 400px){
    font-size: 12px;
    padding: 12px;
  }
`

export const EmptyCartImg = styled.img`
  width: 130px;
  padding: 100px;

  @media(max-width: 400px){
    padding: 50px 100px;
  }
`

export default EmptyCartContainer;