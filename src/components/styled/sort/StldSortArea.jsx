import styled from "styled-components";

const StldSortArea = styled.div`
  position: relative;
`

export const StldSortLabel = styled.div`
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    b {
      margin-right: 8px;
    }

    span {
      color: orange;
      border-bottom: 1px dashed orange;
      cursor: pointer;
    }
`
export const StldSortPopUp = styled.div`
  position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 200px;

    ul {
      overflow: hidden;
      li {
        padding: 12px 20px;
        cursor: pointer;
        list-style-type: none;
        
        &.active {
          color: orange;
        }
        
        &:hover {
          background: rgba(254, 95, 30, 0.05);
        }
      }
    }
`

export default StldSortArea;