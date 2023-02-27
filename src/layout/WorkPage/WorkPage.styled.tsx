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
    width:10000vw;
    max-width: 470px;
    grid-template-columns: min-content 3fr;
    grid-auto-rows:40px;
    column-gap:20px;

    
    @media(max-width:1000px){
        grid-auto-rows:35px;
    }
`

export const WPProjectReviewContainer = styled.div`
    width:100%;
    height:100%;
    flex:1 auto;
    border:3px solid ${({ theme }) => theme.dimmColor || "red"};
    margin-top:-2px;
    max-height: 695px;
    border-left:0px;
`

export const WPProjectReviewMainContainer = styled.div`
    max-height: 540px;
    height:100%;
    width:100%;
    overflow-x:hidden;
    overflow-y:scroll;
`