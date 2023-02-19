import { createGlobalStyle } from "styled-components";

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
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: DM Sans, sans-serif;
    border:0px;
    scroll-behavior: smooth;
    }
`