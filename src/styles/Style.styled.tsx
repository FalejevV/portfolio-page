import styled, { css, keyframes } from "styled-components";
import defaultCursor from "../img/CursorDefault.png";

export const GlobalContainer = styled.div`
    position:absolute;
    top:0px;
    width:100vw;
    height:fit-content;
    min-height: 100vh;
    transform: scale(0.87) translateY(-100px);


    @media(max-width:1550px){
        transform: unset;
    }

    @media(min-width:2023px){
        transform: unset;
    }
`

export const MonitorFrame = styled.img`
    width:1770px;
    height:1120px;
    position: absolute;
    left:calc(50% - 3px);
    top:0px;
    transform: translateX(-50%);
    opacity: 0.2;
    user-select: none;
    @media(max-width:1550px){
        display:none;
    }
    z-index: 100000;
    pointer-events: none;
`

export const MainContainer = styled.div<{
    toggle:boolean,
}>`
    cursor:url(${defaultCursor}), default;
    height: ${({ theme }) => theme.maxHeight || "1000px"};
    max-width: ${({ theme }) => theme.maxWidth || "1000px"};
    max-height: ${({ theme }) => theme.maxHeight || "1000px"};
    position: relative;
    margin: 0 auto;
    overflow:hidden;
    display: none;
    flex-direction: column;
    padding:0px 30px;
    
    margin-top:45px;
    border-radius: 10px;

    filter: drop-shadow(0px -5px 20px #3789465e);
    @media(max-width:1550px){
        margin-top:0px;
    }

    @media(max-width:500px){
        padding:10px;
    }


    ${({ toggle }) => toggle && css`
        display:flex;
    `}

    @media(max-width:1550px){
        display: flex;
    }
`

export const PContainer = styled.div<{
    toggle:boolean,
    flexDirection?:string,
}>`
    width:100%;
    opacity:0;
    display: none;
    pointer-events:none;
    user-select:none;

    ${({ toggle }) => toggle && css`
        display: flex;
        opacity:1;
        pointer-events:unset;
        user-select:unset;
    `}

    position:relative;
    flex:1 auto;
    ${({ flexDirection }) => flexDirection && css`
        flex-direction: column;
        margin:0 auto;
        gap:15px;
    `}
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding:50px 0px;
    
    @media(max-width:880px){
        padding-bottom: 20px;
    }
`

export const PText = styled.p<{
    textAlign?:string,
    dimm?:boolean
}>`
    font-size: 27px;
    color:${({ theme }) => theme.mainColor || "red"};
    text-align: ${({ textAlign }) => textAlign || "center"};
    @media(max-width:1000px){
        font-size:22px;
    }

    ${({ dimm }) => dimm && css`
        color:${({ theme }) => theme.dimmColor || "gray"};
        filter:brightness(1.2);
    `}
`

export const Link = styled.a`
    text-decoration: underline;
    padding:5px 20px;
    font-size: 22px;
    color:${({ theme }) => theme.mainColor || "red"};
    background-color: transparent;
    transition: all 0.3s;
    
    position:relative;

    &:after{
        transition: all 0.05s;
        position:absolute;
        content: "";
        width:100%;
        height:0px;
        left:0px;
        bottom:0px;
        background-color:${({ theme }) => theme.mainColor || "red"};
        z-index: -1;
    }

    &:hover{
        &:after{
            height:100%;
        }
        color:black;
    }
`

export const LineDivider = styled.div`
    width:calc(100% + 50px);
    height:3px;
    background-color:${({ theme }) => theme.dimmColor || "red"};
    position:relative;
    left:-25px;
`