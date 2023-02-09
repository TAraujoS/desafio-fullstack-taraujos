import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }
    :root {
        --color-black: #000000;
        --color-white: #fff;
        --color-grayform: #212529;
        --color-whitetext:  #F8F9FA;
        --color-graydark: #868E96;
        --color-grayinput: #F8F9FA;
        --color-list: #121214;
        
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
    }
    body {
        width: 100vw;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F8F9FA;
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyle;
