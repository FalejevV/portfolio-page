import styled, { css } from "styled-components";

export const UIBorderStatContainer = styled.div`
    position:relative;
    pointer-events:none;
    display:flex;
    flex-direction: column;
    
`


export const UIStatProgressBar = styled.div<{
    progress:string,
}>`
    position:absolute;
    width:70px;
    height:25px;
    top:25px;
    left:50%;
    transform: translateX(-50%);
    background-color:${({ theme }) => theme.dimmColor || "red"};

    &:after{
        content:"";
        position: absolute;
        left:0px;
        top:0px;
        width:${({ progress }) => progress || "50%"};
        height:100%;
        background-color:${({ theme }) => theme.mainColor || "green"};
    }
`


export const UIStatValueText = styled.p<{
    leftCorner?:boolean,
    rightCorner?:boolean,
    progress?:boolean,
    fullCorner?:boolean,
}>`
    width:100%;
    padding:15px 25px;
    padding-top:25px;

    color:${({ theme }) => theme.mainColor || "green"};
    font-size:24px;
    position:relative;
    text-align: center;

    ${({ leftCorner }) => leftCorner && css`
        border-left:3px solid ${({ theme }) => theme.dimmColor || "red"};
    `}

    ${({ leftCorner }) => !leftCorner && css`
        &:before{
            left:0px;
            top:0px;
            position: absolute;
            content:"";
            width:3px;
            height:20px;
            background-color:${({ theme }) => theme.dimmColor || "red"};
        }
    `}

    ${({ rightCorner }) => rightCorner && css`
        border-right:3px solid ${({ theme }) => theme.dimmColor || "red"};
    `}

    ${({ rightCorner }) => !rightCorner && css`
        &:after{
            right:0px;
            top:0px;
            position: absolute;
            content:"";
            width:3px;
            height:20px;
            background-color:${({ theme }) => theme.dimmColor || "red"};
        }
    `}
    ${UIStatProgressBar}{
        display:none;
    }
    ${({ progress }) => progress && css`
        ${UIStatProgressBar}{
            display:block;
        }
        pointer-events: none;
        user-select: none;
        color:transparent;
        width:120px;
    `}

    
    ${({ fullCorner }) => fullCorner && css`
        &:before, &:after{
            display: none;
        }
        border-left: 3px solid ${({ theme }) => theme.dimmColor || "red"};
        border-bottom: 3px solid ${({ theme }) => theme.dimmColor || "red"};
        border-right:3px solid ${({ theme }) => theme.dimmColor || "red"};
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
    background-color:${({ theme }) => theme.dimmColor || "red"};

    &:last-child{
        width:100%;
    }
`

export const UIStatTitleText = styled.p`
    color:${({ theme }) => theme.dimmColor || "red"};
    font-size:30px;
    white-space: nowrap;
`