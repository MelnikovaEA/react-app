import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: relative;
  padding-left: 30px;
  
  @media(min-width: 320px) and (max-width: 480px){
    padding-left: 20px;
  }
`
const SearchInput = styled.input`
  width: 300px;
  max-height: 40px;
  padding: 12px 20px;
  font-size: 18px;
  background: rgba(193, 240, 146, 0.5);
  color: dimgrey;
  border: 1px solid darkseagreen;
  border-radius: 30px;
  cursor: pointer;
  box-sizing: content-box;

  &:focus {
    outline-color: darkseagreen;
  }

  @media(min-width: 320px) and (max-width: 480px){
    max-width: 280px;
    max-height: 30px;
    padding: 10px 20px;
    font-size: 14px;
  }
`
export const SearchCloseIcon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 50%;
`

export default SearchInput;