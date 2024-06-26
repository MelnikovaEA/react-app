import styled from "styled-components";

export const Page = styled.div`
  margin-top: 105px;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media(min-width: 320px) and (max-width: 480px){
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    margin-top: 155px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    margin-top: 125px;
  }
`

export const CardWrapper = styled.div`
  width: 25vw;
  
  @media (max-width: 570px) {
    width: 100vw;
  }

  @media (min-width: 571px) and (max-width: 820px) {
    width: 48vw;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    width: 48vw;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Text = styled.text`
  padding: 20px 0 40px 20px;
  max-width: 500px;
  text-align: justify;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 10px 20px;
  }
`

export const Button = styled.button`
  padding: 10px 25px;
  font-size: 16px;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 10px 20px;
    font-size: 14px;
  }
`