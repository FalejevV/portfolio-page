import styled, { css, keyframes } from "styled-components";

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

    *{
        &::selection{
            background-color: ${({ theme }) => theme.mainColor || "black"};
            color:black;
        }
    }

    
    * {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) => theme.mainColor || "black"} transparent !important;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height:8px;
    }

    *::-webkit-scrollbar-track {
        background: #ffffff0;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.mainColor || "black"};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.mainColor || "black"};
        border-radius: 0px;
        border: 0px none #ffffff0;
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


const glowAnimations = (props: {theme: {dimmColor:string}}) => keyframes`
    0% {
        filter: drop-shadow(0px 0px 0px ${props.theme.dimmColor});
    }
    99% {
        filter: drop-shadow(0px 0px 0px ${props.theme.dimmColor});
    }
    100% {
        filter: drop-shadow(0px 0px 25px ${props.theme.dimmColor});
    }
`;



export const MainContainer = styled.main<{
    toggle:boolean,
}>`
    cursor: url(${({ theme }) => theme.cursorDefault}), default;
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

    p{
        cursor: url(${({ theme }) => theme.cursorText}), text;
    }
    animation:${glowAnimations} 1s forwards;
    @media(max-width:1550px){
        margin-top:0px;
    }

    @media(max-width:500px){
        padding:10px;
        padding-bottom:0px;
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
    
    @media(max-width:940px){
        padding-top:35px;
        padding-bottom: 20px;
    }

    @media(max-width:500px){
        padding-bottom: 0px;
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
    cursor: url(${({ theme }) => theme.cursorPointer}), pointer;
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