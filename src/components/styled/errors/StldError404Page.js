import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: coral;
  font-size: 50px;
  font-weight: 600;

  @media(min-width: 320px) and (max-width: 480px){
    font-size: 30px;
    margin-top: 45%;
  }
`

export const Image = styled.img`
  width: 40vw;
  padding: 30px;

  @media(min-width: 320px) and (max-width: 480px){
    padding: 10px;
  }
`

