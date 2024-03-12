import styled from "styled-components";

const StldCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  justify-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  
  @media(min-width: 320px) and (max-width: 480px){
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export default StldCardsContainer;