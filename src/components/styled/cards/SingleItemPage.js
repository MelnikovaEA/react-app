import styled from "styled-components";

export const Page = styled.div`
  margin-top: 105px;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media(min-width: 320px) and (max-width: 480px){
    flex-direction: column;
    align-items: center;
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