import styled from "styled-components";

const CardsContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(4, minmax(22%, 1fr));
  gap: 2%;
  justify-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
  
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, minmax(100%, 1fr));
    row-gap: 5px;
  }

  @media (min-width: 571px) and (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(47%, 1fr));
    column-gap: 3%;
    row-gap: 10px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(47%, 1fr));
    column-gap: 3%;
    row-gap: 10px;
  }

  //@media (min-width: 1025px) and (max-width: 1280px) {
  //  grid-template-columns: repeat(4, minmax(22%, 1fr));
  //}
  ////
  //@media (min-width: 1281px) {
  //  grid-template-columns: repeat(4, minmax(22%, 1fr));
  //}
`

export default CardsContainer;