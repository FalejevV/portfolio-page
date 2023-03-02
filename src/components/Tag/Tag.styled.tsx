import styled from "styled-components";

export const TagText = styled.p`
    background-color: ${({ theme }) => theme.mainColor || "red"};
    padding:5px 15px;
    color:black;
    font-weight: bold;
    font-size:20px;
    opacity:0.8;

    transition: all 0.3s;
    &:hover{
        opacity:1;
    }

    @media(max-width:650px){
        font-size:18px;
        padding:5px 10px;
    }
`