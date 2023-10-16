import styled, { css, keyframes } from "styled-components";

const toggleAnim = (props: { theme: { dimmColor: string } }) => keyframes`
    0%{
        z-index: 9999;
        background-color:black;
    }
    20%{
        background-color: ${props.theme.dimmColor};
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
    95%{
        background-color: ${props.theme.dimmColor};
    }
    100%{
        z-index: -1;
        background-color: transparent;
    }
`

export const TOEContainer = styled.div<{
    toggle: boolean,
}>`
    width: ${({ theme }) => `calc(${theme.maxWidth} + 7px)`};
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
    border-radius:4px;
    filter: brightness(20%); 
    @media(max-width:1550px){
        display: none;
    }
`

export const TOEButtonContainer = styled.div<{
    toggle: boolean,
}>`
    cursor: pointer;
    position: absolute;
    width:40px;
    height:40px;
    left:${({ theme }) => `calc(50% + (${theme.maxWidth} / 2) + 30px)` || "1000px"};
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


export const ColorPicker = styled.div`
    cursor: pointer;
    position: absolute;
    width:28px;
    height:28px;
    left:${({ theme }) => `calc(50% + (${theme.maxWidth} / 2) + 36px)` || "1000px"};
    top: ${({ theme }) => `calc(${theme.maxHeight} - 10px)` || "1000px"};
    background-color: ${({ theme }) => theme.dimmColor};
    box-shadow: 2px 0px 7px 4px rgba(0,0,0,0.5) inset;
    -webkit-box-shadow: 0px 0px 7px 4px rgba(0,0,0,0.5) inset;
    -moz-box-shadow: 0px 0px 7px 4px rgba(0,0,0,0.5) inset;
    border-radius: 50%;
    padding:3px;
    filter:blur(1px);

    &:after{
        content:"";
        position:absolute;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.dimmColor};
        filter:blur(5px);
        z-index:-1;
        opacity:0.5;
    }
    
    @media(max-width:1550px){
        display: none;
    }
`


export const ColorPickerSVG = styled.svg`
    width:100%;
    height:100%;

    rotate:${({ theme }) => theme.knobRotation};
`