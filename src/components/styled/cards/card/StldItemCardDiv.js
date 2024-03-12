import styled from "styled-components";

const StldItemCardDiv = styled.div`
  width: 360px;
  max-width: 360px;
  text-align: center;
  padding: 5px 5px 15px 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 300px;
    max-width: 300px;
  }
`

export const StldItemCardImg = styled.img`
  width: 260px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 210px;
  }
`

export const StldItemName = styled.h4`

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    margin-top: 0;
  }
`

export const StldItemCardPriceBlock = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
  width: 40%;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    line-height: 17px;
  }
`

export const StldItemCardPriceAndButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`

export default StldItemCardDiv;