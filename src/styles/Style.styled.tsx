import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    height: ${({ theme }) => theme.maxHeight || "1000px"};
    max-width: ${({ theme }) => theme.maxWidth || "1000px"};
    max-height: ${({ theme }) => theme.maxHeight || "1000px"};
    position: relative;
    margin: 0 auto;
    overflow-x:hidden;
    display: flex;
    flex-direction: column;
    padding:0px 30px;


    @media(max-width:500px){
        padding:10px;
    }
`

export const PContainer = styled.div<{
    toggle:boolean,
}>`
    width:100%;
    opacity:0;
    display: none;
    pointer-events:none;
    user-select:none;
    ${({ toggle }) => toggle && css`
        display: flex;
        opacity:1;
        pointer-events:unset;
        user-select:unset;
    `}
    position:relative;
    flex:1 auto;
    
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding:50px 0px;
`

export const PText = styled.p<{
    textAlign?:string,
}>`
    font-size: 27px;
    color${({ theme }) => theme.mainColor || "red"};
    text-align: ${({ textAlign }) => textAlign || "center"};
    @media(max-width:1000px){
        font-size:20px;
    }
`