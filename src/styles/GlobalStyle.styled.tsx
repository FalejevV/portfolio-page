import { createGlobalStyle } from "styled-components";
import textCursor from "../img/TextCurspor.png";


export const GlobalStyle = createGlobalStyle`
    html,
    body {
    scrollbar-width: none;
    ::-webkit-scrollbar {
        width: 0px;
    }

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
        &::selection{
            background-color: #17FF42;
            color:black;
        }
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #00ff1e transparent !important;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height:8px;
    }

    *::-webkit-scrollbar-track {
        background: #ffffff0;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #00ff1ea2;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #00ff1e;
        border-radius: 0px;
        border: 0px none #ffffff0;
    }

`

