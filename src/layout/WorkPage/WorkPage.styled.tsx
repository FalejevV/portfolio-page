import styled from "styled-components";

export const WorkPageContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: flex-start;

    @media(max-width:500px){
        max-height:820px;
        margin-bottom:10px;
    }
`


export const WPCreationListGrid = styled.div`
    display: grid;
    height:639px;
    width:10000vw;
    max-width: 470px;
    grid-template-columns: min-content 3fr;
    grid-auto-rows:40px;
    column-gap:20px;

    @media(max-width:1270px){
        max-width: 370px;
        grid-auto-rows:max-content;
        row-gap:20px;
    }
    
    @media(max-width:1000px){
        grid-auto-rows:35px;
        max-width: 300px;
        grid-auto-rows:max-content;
        row-gap:20px;
    }
`

export const WPProjectReviewContainer = styled.div`
    width:100%;
    flex:1 auto;
    height:490px;
    position:relative;
    &:after{
        content:"";
        position:absolute;
        left:0px;
        top:-25px;
        width:3px;
        height:690px;
        background-color: ${({ theme }) => theme.dimmColor || "red"};
    }

    @media(max-width:940px){
        height:fit-content;

        &:after{
            display:none;
        }
    }
    
`

export const WPProjectReviewMainContainer = styled.div`
    height:100%;
    width:100%;
    overflow-x:hidden;
    overflow-y:scroll;
    @media(max-width:940px){
        height:fit-content;
        max-height: unset;
    }
`

export const TagsContainer = styled.div`
    gap:10px;
    display: flex;
    width:100%;
    height:100%;
    max-height: 200px;
    flex-wrap: wrap;
    overflow-x:hidden;
    overflow-y: scroll;

    @media(max-width:940px){
        padding-top:10px;
        max-height: 100px;
    }
`



export const MobileContainer = styled(WorkPageContainer)`
    flex-direction: column;
    width:100%;
    gap:10px;
    max-height: unset;
    overflow-y: scroll;
    padding-top: 4px;

    ${WPProjectReviewContainer}{
        border:3px solid ${({ theme }) => theme.dimmColor || "red"};
    }
`

export const MobileProjectWrap = styled.div`
    height:fit-content;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:35px;
`

export const ProjectDivider = styled.div`
    width:100%;
    height:3px;
    background-color: ${({ theme }) => theme.dimmColor || "red"};
`