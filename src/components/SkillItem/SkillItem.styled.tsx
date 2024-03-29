import styled from "styled-components";
import { PText } from "../../styles/Style.styled";

export const SkillItemContainer = styled.div<{
    opacity?:string,
}>`
    cursor: url(${({ theme }) => theme.cursorDefault}), default;
    width:100%;
    aspect-ratio:1/1;
    background-color:${({ theme }) => theme.mainColor || "red"};
    padding:10px;
    padding-bottom: 5px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    user-select:none;
    transition: all 0.3s;

    opacity:${({ opacity }) => opacity || "0.6"};

    &:hover{
        opacity:1;
    }
`

export const SkillImage = styled.img`
    width:100%;
    max-width:70px;
    aspect-ratio: 1/1;

    @media(max-width:600px){
        max-width: 40px;
        max-height: 40px;
    }
`

export const SkillName = styled(PText)`
    color:black;
    font-weight:bold;
    font-size:22px;
    cursor: url(${({ theme }) => theme.cursorDefault}), default;
    @media(max-width:600px){
        font-size:18px;
    }
`