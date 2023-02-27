import styled from "styled-components";

export const WorkPageContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    user-select: none;
`

export const WPCreationListGrid = styled.div`
    display: grid;
    height:639px;
    width:100%;
    max-width: 500px;
    grid-template-columns: min-content 3fr;
    grid-auto-rows:40px;
    column-gap:20px;

    
    @media(max-width:1000px){
        grid-auto-rows:35px;
    }
`
