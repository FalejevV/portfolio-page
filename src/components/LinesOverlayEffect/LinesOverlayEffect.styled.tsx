import styled, { keyframes } from "styled-components";

const fallAnimation = keyframes`
    from{
        top:-100%;
    }to{
        top:0%;
    }
`

export const LOEContainer = styled.div`
    width:100%;
    height:200%;
    background: repeating-linear-gradient(transparent, transparent 10px, ${({ theme }) => theme.mainColor || "red"} 10px, ${({ theme }) => theme.mainColor || "red"} 13px);
    position: absolute;
    left:0px;
    top:-100%;
    opacity:0.03;
    animation: ${fallAnimation} 50s infinite linear;
    pointer-events: none;
    z-index: 1000;
`