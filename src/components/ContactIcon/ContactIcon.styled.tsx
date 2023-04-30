import styled from "styled-components";
import pointerCursor from "../../img/PointerCursor.png";

export const ContactContainer = styled.div`
    width:80px;
    height:80px;
    cursor:pointer;
    opacity:0.8;
    cursor: url(${pointerCursor}), pointer;
    
    &:hover{
        opacity:1;
    }
`

export const ContactIconSVG = styled.svg`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    aspect-ratio:1/1;
    fill:${({ theme }) => theme.mainColor || "black"};
    padding:20px;
    background-color: ${({ theme }) => theme.dimmColor || "black"};
`