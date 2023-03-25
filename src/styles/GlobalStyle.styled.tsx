import { createGlobalStyle } from "styled-components";
import textCursor from "../img/TextCurspor.png";
import circleCursor from "../img/CircleCursor.png";


export const GlobalStyle = createGlobalStyle`
    html,
    body {
    scrollbar-width: none;
    padding: 0;
    margin: 0;
    font-family: DM Sans, sans-serif;
    max-width: 100vw;
    min-height:100vh;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    background-color: black;
    font-family: 'VT323', monospace;
    cursor:url(${circleCursor}) 16 16, pointer;
    }

    

    a {
    color: inherit;
    text-decoration: none;
    }

    p{
        cursor:url(${textCursor}), text;
    }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: DM Sans, sans-serif;
    border:0px;
    scroll-behavior: smooth;
    font-family: 'VT323', monospace;
    z-index: 5;
    pointer-events: auto;
    scrollbar-width: thin;
    scrollbar-color: #17FF42 transparent;

        &::selection{
            background-color: #17FF42;
            color:black;
        }
    }

`