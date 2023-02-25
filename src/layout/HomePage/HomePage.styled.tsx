import styled from "styled-components";


export const HomePageGrid = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: minmax(400px,1fr) minmax(400px,2fr);
    grid-auto-rows: min-content;
    position: relative;
    z-index: 10;
`

export const  UserIntroContainer = styled.div`
    padding-top:7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap:20px;
    width:100%;
    margin-top:-10px;
`

export const UserAboutContainer = styled.div`
    width:100%;
    height:100%;
    max-height: 100px;
    overflow-x:hidden;
    overflow-y: scroll;
`

export const AlertSVG = styled.svg`
    width:34px;
    height:34px;
    fill:${({ theme }) => theme.mainColor || "red"};
`

export const UserSkillsContainer = styled.div`
    width:100%;
    height:420px;
    max-height:420px;
    overflow-y: scroll;
    position: relative;
    z-index: 1000;    
`
