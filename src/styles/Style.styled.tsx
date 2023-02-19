import styled, { css } from "styled-components";

export const GlobalContainer = styled.div<{
    zoom:boolean,
}>`
    position: relative;
    width:100%;
    height:100%;
    max-width:100vw;
    max-height: 100vh;
    display:grid;
    grid-template-columns: repeat(2,minmax(100vw, 1440px));
    gap:100vw;
    grid-template-rows: repeat(3, 100vh);
    overflow:hidden;
    background-color:black;


    transition: transform 0.3s, filter 0.5s;
    ${({ zoom }) => zoom && css`
        transform: scale(0.6);
        filter:blur(50px);
    `}
`