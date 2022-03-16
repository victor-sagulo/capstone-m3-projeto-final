import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --redError: #FF0000;
        --cleanBlack: #222222;
        --white: #FFFFFF;
        --purple: #9D4EDD;
        --black: #000000;
        --grey: #C4C4C4;
        --blackComment: #111111;
        --mainFont: "Inter", sans-serif;
        --blackOpsFont: "Black Ops One", cursive;
    }

    body, input, button {
        font-size: 1rem;
    }

    h1, h2, h3, h4, p, span {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    figcaption {
        display: none;
    }

    ul{
        list-style: none;
    }
    body{
        background-color: #10002B;
        height: 100vh;
    }

`