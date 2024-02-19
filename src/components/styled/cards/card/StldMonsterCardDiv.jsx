import styled from "styled-components";

const StldMonsterCardDiv = styled.div`
  width: 360px;
  max-width: 360px;
  text-align: center;
  padding: 5px 5px 15px 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 30px;
  
  @media(max-width: 400px){
    width: 300px;
    max-width: 300px;
  }
`

export default StldMonsterCardDiv;