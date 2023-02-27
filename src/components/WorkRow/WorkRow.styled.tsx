import styled, { css } from "styled-components";
import { PText } from "../../styles/Style.styled";

export const WorkRowContainer = styled.div`
    grid-column:1/2 span;
    width:100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap:30px;
    
    @media(max-width:1000px){
        padding-left:15px;
    }
`

export const WorkRowIndicator = styled.div<{
    toggle:boolean
}>`
    width:25px;
    height:25px;
    background-color:transparent;
    
    ${({ toggle }) => toggle && css`
        background-color:${({ theme }) => theme.mainColor || "red"};
    `};

    @media(max-width:1000px){
        width:20px;
        height:20px;
    }
`

export const WorkRowTitle = styled(PText)`
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    padding:0px 10px;
    &:after{
        transition: all 0.05s;
        content:'';
        left:0px;
        bottom:0px;
        width:100%;
        height:0%;
        position: absolute;
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