import styled, { css } from "styled-components";


export const UIBBContainer = styled.div<{
    leftCorner?:boolean,
    rightCorner?:boolean,
}>`
    display: flex;
    align-items: center;
    position: relative;
    width:100%;
    max-width: 300px;
    opacity: 0.5;
    ${({ leftCorner }) => leftCorner && css`
        &:before{
            content: '';
            left:0px;
            width:3px;
            height:70px;
            position: absolute;
            bottom: 1.5px;
            transform: translateY(-50%);
            background-color: ${({ theme }) => theme.dimmColor || "green"};
        }
    `}

    ${({ rightCorner }) => rightCorner && css`
        &:before{
            content: '';
            right:0px;
            width:3px;
            height:70px;
            position: absolute;
            bottom: 1.5px;
            transform: translateY(-50%);
            background-color: ${({ theme }) => theme.dimmColor || "green"};
        }
    `}
`

export const UIBBText = styled.p`
    padding:15px 10px;

    color:${({ theme }) => theme.dimmColor || "green"};
    font-size:26px;
    position:relative;
    text-align: center;
`

export const UIBBLine = styled.hr<{
    leftTitleLineWidth?:string,
}>`
    min-width: 30px;
    height:3px;
    width:${({ leftTitleLineWidth }) => leftTitleLineWidth || "50%"};
    background-color:${({ theme }) => theme.dimmColor || "red"};

    &:last-child{
        width:100%;
    }
    
`