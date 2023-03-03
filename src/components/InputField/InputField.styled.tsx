import styled, { css } from "styled-components";

export const InputContainer = styled.div`
    width:380px;
    height:50px;
    position: relative;
    display:flex;   
`


export const InputCursor = styled.div<{
    focused:boolean;
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
    `}
`


export const InputTextField = styled.input.attrs((props:{symbolCount:number}) => ({
    style:{
        width:`calc(${props.symbolCount} * 1ch + 5ch)`
    }
}))<{symbolCount:number}>`
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

`


export const InputFieldLabel = styled.label`
    position: absolute;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    border:3px solid ${({ theme }) => theme.dimmColor || "red"};
`
