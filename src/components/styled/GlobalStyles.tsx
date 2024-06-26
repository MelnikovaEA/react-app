import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    overflow-y: scroll;
    cursor:default;
  }
  
  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
  
  h1, h2, h3, p, a, button {
    margin: 0;
    padding: 0;
  }
  
  button {
    display: inline-block;
    background-color: orange;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    /*transition: background-color duration ease-in-out, border-color duration ease-in-out;*/
    border: 1px solid transparent;
    
    span {
      color: #fff;
      padding: 0 10px;
      font-size: 17px;

      &:hover {
        color: crimson;
      }
    }

    //:hover {
    //  background-color: #f0a535;
    //}

    :active {
      background-color: #f0a535;
      transform: translateY(1px);
    }

    i {
      display: inline-block;
      border-radius: 30px;
      background-color: darkorange;
      color: #fff;
      font-weight: 600;
      width: 25px;
      height: 25px;
      font-style: normal;
      font-size: 17px;
      line-height: 25px;
      position: relative;
      //top: -1px;
      //left: 3px;

      &:hover {
        color: crimson;
      }
    }
  }
  
`
export default GlobalStyles;