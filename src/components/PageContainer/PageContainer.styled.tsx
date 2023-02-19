import styled from "styled-components";


export const PContainer = styled.div<{
    bgColor:string
}>`
    width:100%;
    height:100%;
    max-width:100vw;
    max-height:100vh;

    background-color: ${({ bgColor }) => bgColor || "black"};
`