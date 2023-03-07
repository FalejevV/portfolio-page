import styled, { css, keyframes } from "styled-components";

export const MonitorFrame = styled.img`
    width:1750px;
    height:1110px;
    position: absolute;
    left:50%;
    top:0px;
    transform: translateX(-50%);
    opacity: 0.2;
    filter:blur(5px);
    @media(max-width:1550px){
        display:none;
    }
`

const someFlickerStuff = keyframes`
    0%{
        opacity: 1;
    }
    5%{
        opacity: 1;
    }
    5.01%{
        opacity: 0.7;
    }
    5.05%{
        opacity: 1;
    }
    20%{
        opacity: 1;
    }
    20.01%{
        opacity: 0.3;
    }
    20.05%{
        opacity: 1;
    }
    30%{
        opacity: 1;
    }
    31.1%{
        opacity: 0.9;
    }
    31.5%{
        opacity: 1;
    }
    32.5%{
        opacity: 1;
    }
    33.1%{
        opacity: 0.7;
    }
    33.5%{
        opacity: 1;
    }
    44%{
        opacity: 1;
    }
    40.01%{
        opacity: 0.9;
    }
    40.05%{
        opacity: 1;
    }
    55%{
        opacity: 1;
    }
    55.01%{
        opacity: 0.7;
    }
    55.05%{
        opacity: 1;
    }
    70%{
        opacity: 1;
    }
    70.01%{
        opacity: 0.7;
    }
    70.05%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    90.01%{
        opacity: 0.7;
    }
    90.05%{
        opacity: 1;
    }


`

export const MainContainer = styled.div`
    height: ${({ theme }) => theme.maxHeight || "1000px"};
    max-width: ${({ theme }) => theme.maxWidth || "1000px"};
    max-height: ${({ theme }) => theme.maxHeight || "1000px"};
    position: relative;
    margin: 0 auto;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    padding:0px 30px;

    animation: ${someFlickerStuff} 60s linear infinite;
    margin-top:45px;

    @media(max-width:1550px){
        margin-top:0px;
    }

    @media(max-width:500px){
        padding:10px;
    }


`

export const PContainer = styled.div<{
    toggle:boolean,
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