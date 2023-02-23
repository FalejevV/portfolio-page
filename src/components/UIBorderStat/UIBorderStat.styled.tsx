import styled, { css } from "styled-components";

export const UIBorderStatContainer = styled.div`
    position:relative;
`


export const UIStatValueText = styled.p<{
    leftCorner?:boolean,
    rightCorner?:boolean,
}>`
    width:100%;
    padding:15px 25px;
    padding-top:25px;
    
    color:#17FF42;
    font-size:24px;
    position:relative;
    text-align: center;

    ${({ leftCorner }) => leftCorner && css`
        border-left:3px solid #17ff417e;
    `}

    ${({ leftCorner }) => !leftCorner && css`
        &:before{
            left:0px;
            top:0px;
            position: absolute;
            content:"";
            width:3px;
            height:20px;
            background-color:#17ff417e;
        }
    `}

    ${({ rightCorner }) => rightCorner && css`
        border-right:3px solid #17ff417e;
    `}

    ${({ rightCorner }) => !rightCorner && css`
        &:after{
            right:0px;
            top:0px;
            position: absolute;
            content:"";
            width:3px;
            height:20px;
            background-color:#17ff417e;
        }
    `}
`

export const UITitleContainer = styled.div`
    display:flex;
    align-items: center;
    position: relative;
    gap:16px;
    top:16.5px;
`

export const UITitleLine = styled.hr<{
    leftTitleLineWidth?:string,
}>`
    min-width: 15px;
    height:3px;
    width:${({ leftTitleLineWidth }) => leftTitleLineWidth || "50%"};
    background-color:#17ff417e;

    &:last-child{
        width:100%;
    }
`

export const UIStatTitleText = styled.p`
    color:#17ff417e;
    font-size:30px;
    white-space: nowrap;
`