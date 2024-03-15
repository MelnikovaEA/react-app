import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: relative;
  padding-left: 30px;
  
  @media(min-width: 320px) and (max-width: 480px){
   padding-left: 0;
  }

  @media (min-width: 481px) and (max-width: 820px) {
    padding-left: 0;
  }
  
  @media (min-width: 821px) and (max-width: 1024px) {
    padding-left: 5px;
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

  @media(min-width: 320px) and (max-width: 480px){
    max-width: 150px;
    max-height: 30px;
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (min-width: 821px) and (max-width: 1024px) {
    max-width: 230px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 200px;
  }

  &:focus {
    outline-color: darkseagreen;
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