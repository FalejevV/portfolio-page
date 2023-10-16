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
        
    }

`

