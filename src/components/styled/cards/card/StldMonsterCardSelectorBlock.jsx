import styled from "styled-components";

const StldMonsterCardSelectorBlock = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;

    &:first-of-type {
      margin-bottom: 6px;
    }

    li {
      padding: 8px;
      margin: 1px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      border-radius: 5px;
      border: 3px solid transparent;
      
      &.active{
        background: #ffffff;
      }
      
      &:hover {
        //background: #ffffff;
        border: 3px solid white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }
  }
`

export default StldMonsterCardSelectorBlock;