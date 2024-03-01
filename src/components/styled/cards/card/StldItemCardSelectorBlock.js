import styled from "styled-components";

const StldItemCardSelectorBlock = styled.div`
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
    padding: 0;
    margin: 3px;

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

      &span {
        margin: 0;
        padding: 2px;
        font-size: 14px;
      }

      &.active {
        background: #ffffff;
      }

      &.active.select {
        &::before {
          content: '\\2713'; /* код символа для галочки */
          margin-right: 0.5em;
        }
      }

      &:hover {
        //background: #ffffff;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }

    .prop {
      padding: 4px 10px;
    }

    .prop-span {
      display: block;
      color: darkgrey;
      font-size: 10px;
    }
    
  }
`

export default StldItemCardSelectorBlock;