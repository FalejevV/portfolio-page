import styled from "styled-components";
import { PText } from "../../styles/Style.styled";

export const SkillItemContainer = styled.div<{
    opacity?:string,
}>`

    width:100%;
    max-width: 120px;
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

    @media(max-width:600px){
        max-width: 70px;
        max-height: 70px;
    }
`

export const SkillImage = styled.img`
    width:100%;
    max-width:70px;
    aspect-ratio: 1/1;

    @media(max-width:600px){
        max-width: 30px;
        max-height: 30px;
    }
`

export const SkillName = styled(PText)`
    color:black;
    font-weight:bold;
    font-size:22px;

    @media(max-width:600px){
        font-size:18px;
    }
`