import styled, { css } from "styled-components";


export const PContainer = styled.div<{
    bgColor:string,
    toggle:boolean,
}>`
    width:100%;
    height:1000px;
    max-width:1440px;
    max-height:1000px;
    background-color: ${({ bgColor }) => bgColor || "black"};
    border:20px solid red;

    opacity:0;
    pointer-events:none;
    user-select:none;
    position: absolute;
    top:0px;
    left:0px;
    ${({ toggle }) => toggle && css`
        opacity:1;
        pointer-events:none;
        user-select:none;
    `}
`