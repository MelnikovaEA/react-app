import styled from "styled-components";

const StldHeader = styled.header`
  background-color: #c1f092;
  border-bottom: 1px solid;
  padding: 20px 0;
`

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const HeaderLogoDiv = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 auto;
  }
`

export const HeaderText = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 22px;
  }
`

export const HeaderDescription = styled.p`

`

export default StldHeader;