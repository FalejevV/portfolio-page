import styled, { css } from "styled-components";


export const MenuContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;    
    justify-content: center;
    align-items: flex-end;
    flex:1fr;
    gap:25px;
    padding: 0px 25px;
    padding-bottom: 15px;

    @media(max-width: 900px){
        padding: 0px 0px;
        padding-bottom: 15px;
        gap:10px;
    }
`


export const ButtonText = styled.p`
    transition: all 0.4s;
`


export const MenuButton = styled.button<{
    toggle:boolean,
}>`
    display: flex;
    padding-bottom: 5px;
    align-items: flex-end;
    justify-content: center;
    width:100%;
    max-width:200px;
    min-width: 150px;
    height: 100%;
    font-size: 26px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    &:after{
        transition: all 0.3s;
        position: absolute;
        content:"";
        width:100%;
        bottom: 0px;
        left:0px;
        height:0px;

        background-color: ${({ theme }) => theme.mainColor || "black"};
        opacity:0.2;
    }

    ${({ toggle }) => toggle && css`
        &:after{
            height:100%;
            opacity:1;
        }
        color:black;
    `}

    ${({ toggle }) => !toggle && css`
        color: ${({ theme }) => theme.mainColor || "black"};

        &:hover{
            &:after{
                height:100%;
            }
        }
    `}


    @media(max-width: 900px){
        min-width: 100px;
    }
`
