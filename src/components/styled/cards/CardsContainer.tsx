import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  justify-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  
  @media(min-width: 320px) and (max-width: 480px){
    max-width: 100vw;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (min-width: 481px) and (max-width: 820px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  //
  //@media (min-width: 1281px) {
  //  
  //}
`

export default CardsContainer;