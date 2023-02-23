import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    height: ${({ theme }) => theme.maxHeight || "1000px"};
    max-width: ${({ theme }) => theme.maxWidth || "1000px"};
    max-height: ${({ theme }) => theme.maxHeight || "1000px"};
    position: relative;
    margin: 0 auto;
`

export const PContainer = styled.div<{
    toggle:boolean,
}>`
    width:100%;
    height:100%;
    border:2px solid green;
    opacity:0;
    pointer-events:none;
    user-select:none;
    position: absolute;
    top:0px;
    left:0px;
    ${({ toggle }) => toggle && css`
        opacity:1;
        pointer-events:unset;
        user-select:unset;
    `}

    padding:0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`