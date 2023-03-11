import styled from "styled-components";


export const HomePageGrid = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: minmax(400px,1fr) minmax(400px,2fr);
    grid-auto-rows: min-content;
    position: relative;
    z-index: 10;

    @media(max-width:940px){
        display: flex;
        flex-direction: column;
    }
`

export const  UserIntroContainer = styled.div`
    padding-top:7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width:100%;
    margin-top:-10px;
    height:30px;
`

export const UserAboutContainer = styled.div`
    width:100%;
    height:200px;
    overflow-x:hidden;
    overflow-y: scroll;

    @media(max-width:500px){
        height:280px;
    }
`

export const AlertSVG = styled.svg`
    width:31px;
    height:31px;
    fill:${({ theme }) => theme.mainColor || "red"};
`

export const UserSkillsContainer = styled.div`
    width:100%;
    padding:1px;
    height:317px;
    max-height:317px;
    overflow-y: scroll;
    position: relative;

    @media(max-width:940px){
        max-height: 270px;
    }
`
