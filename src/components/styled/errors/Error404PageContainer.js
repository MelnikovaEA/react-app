import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: coral;
  font-size: 50px;
  font-weight: 600;
  margin-top: 105px;

  @media(min-width: 320px) and (max-width: 480px){
    font-size: 30px;
    margin-top: 120px;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    margin-top: 155px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    margin-top: 125px;
  }
`

export const Image = styled.img`
  width: 40vw;
  padding: 30px;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 10px;
  }
`

