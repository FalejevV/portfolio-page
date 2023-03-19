import styled, { css, keyframes } from "styled-components";

const toggleAnim = keyframes`
    0%{
        z-index: 9999;
        background-color: #256832;
    }
    71%{
        background-color: black;
    }
    85%{
        background-color: black;
    }
    90%{
        background-color: black;
    }
    99%{
        background-color: #256832;
    }
    100%{
        z-index: -1;
        background-color: transparent;
    }
`

export const TOEContainer = styled.div<{
    toggle:boolean,
}>`
    width: ${({ theme }) => `calc(${theme.maxWidth} + 5px)`};
    height: ${({ theme }) => theme.maxHeight};
    background-color: black;
    left:50%;
    top:45px;
    transform: translateX(-50%);
    position: absolute;
    pointer-events: default;
    z-index: -1;
    ${({ toggle }) => toggle && css`
        animation: ${toggleAnim} 1s forwards;
    `}

    @media(max-width:1550px){
        display: none;
    }
`

export const TOEButton = styled.button<{
    toggle:boolean,
}>`
    position: absolute;
    right:calc(50% - 774px);
    top:1070px;
    width:18px;
    height:40px;
    background: ${({ theme }) => theme.mainColor};
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.mainColor};
    z-index: 999999;
    cursor: pointer;

    ${({ toggle }) => toggle && css`
        background: ${({ theme }) => theme.dimmColor};
        box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.dimmColor};
        transform: scale(0.9);
    `}

    @media(max-width:1550px){
        display: none;
    }
`