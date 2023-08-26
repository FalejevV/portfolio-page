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
    left:calc(50% - 3px);
    top:46px;
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

export const TOEButtonContainer = styled.div<{
    toggle:boolean,
}>`
    cursor: pointer;
    position: absolute;
    width:40px;
    height:40px;
    left:${({ theme }) => `calc(50% + (${theme.maxWidth} / 2) + 25px)` || "1000px"};
    top: ${({ theme }) => `calc(${theme.maxHeight} + 50px)` || "1000px"};
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: center;
    ${({ toggle }) => toggle && css`
        opacity: 0.5;
        transform: scale(0.96);
    `}

    @media(max-width:1550px){
        display: none;
    }
`

export const TOESVG = styled.svg`
    width:30px;
    height:30px;
    fill:${({ theme }) => theme.mainColor};
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    filter:blur(1px);
`

export const TOEBackgroundSVG = styled(TOESVG)`
    filter:blur(5px) brightness(2);
`


export const flickerArrowAnimation = keyframes`
  0%,50%,100% {
    opacity: 0.7;
  }
  25%,75% {
    opacity: 0;
  }
  
`

export const TOEArrowSVG = styled.svg`
    width:50px;
    height:50px;
    fill:green;
    position: absolute;
    right:200px;
    bottom: 200px;
    transform: rotate(-45deg);
    opacity:0;
    animation: ${flickerArrowAnimation} 2s ease-out 5s infinite normal none;
`