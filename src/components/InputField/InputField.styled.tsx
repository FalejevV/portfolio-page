import styled, { css, keyframes } from "styled-components";

export const InputContainer = styled.div`
    width:380px;
    height:50px;
    position: relative;
    display:flex;

    @media(max-width:520px){
        width:300px;
    }

    @media(max-width:420px){
        width:250px;
    }

    @media(max-width:350px){
        width:200px;
    }
`

const blink = keyframes`
    0%{
        opacity: 1;
    }70%{
        opacity: 1;
    }80%{
        opacity: 0;
    }
`

export const InputCursor = styled.div<{
    focused:boolean,
    mobile:boolean,
}>`
    position: relative;
    right:2.5ch;
    width:1ch;
    height:60%;
    top:50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.mainColor || "red"};
    z-index: -1;
    opacity: 0;


    ${({ focused }) => focused && css`
        opacity: 1;
        animation: ${blink} 1s infinite;
    `}

    ${({mobile}) => mobile && css`
        display:none;
    `}
`


export const InputTextField = styled.input.attrs((props:{symbolCount:number,mobile:boolean}) => ({
    style:{
        width: props.mobile === false ? `calc(${props.symbolCount} * 1ch + 5ch)` : "100%",
    }
}))<{symbolCount:number, mobile:boolean}>`
    caret-color: transparent;
    position: relative;
    left:0px;
    top:0px;
    max-width: 380px;
    height:100%;
    user-select: none;
    background-color: transparent;
    font-size: 23px;
    color: ${({ theme }) => theme.mainColor || "red"};
    padding:0px 20px;

    &:focus{
        outline:none;
    }

    &::selection{
        background-color: transparent;
    }
    
    ${({ mobile }) => mobile && css`
        width:100%;
        caret-color: ${({ theme }) => theme.mainColor || "red"};
    `}
`


export const InputFieldLabel = styled.label`
    position: absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    border:3px solid ${({ theme }) => theme.dimmColor || "red"};
`


export const InputPlaceholder = styled.p<{
    toggle:boolean;
}>`
    position: absolute;
    left:10px;
    top:50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.mainColor || "red"};

    opacity: 0.6;

    ${({ toggle }) => toggle && css`
        opacity: 0.4;
        top:-15px;
    `}
`