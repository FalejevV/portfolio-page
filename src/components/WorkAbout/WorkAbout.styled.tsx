import styled from "styled-components";
import { PText } from "../../styles/Style.styled";
import pointerCursor from "../../img/PointerCursor.png";

export const WorkAboutContainer = styled.div`
    width:100%;
    height:100%;
    padding:25px;
    display:flex;
    flex-direction: column;
    gap:25px;
    position:relative;

    @media(max-width:940px){
        height: 540px;
    }
`

export const WorkAboutTitle = styled(PText)`
    font-size:28px;

    @media(max-width:1200px){
        font-size:24px;
    }

    @media(max-width:650px){
        font-size:22px;
    }
`

export const WorkAboutTitleContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WorkAboutText = styled(PText)`
    font-size:24px;
    text-align: left;
    flex:1 auto;
    opacity: 0.6;
    transition: all 0.3s;
    overflow-y:scroll;
    &:hover{
        opacity: 1;
    }

    @media(max-width:650px){
        font-size:20px;
    }
`
export const WorkAboutImageContainer = styled.div`
    display: flex;
    height:100%;
    width:100%;
    max-height: 200px;
    overflow: scroll;
    position:relative;

    
`

export const WorkAboutImages = styled.div`
    display:flex;
    position: absolute;
    left:0px;
    top:0px;
    height:100%;
    width:100%;
    align-items: center;
    gap:10px;
`

export const WorkAboutImage = styled.img`
    height:100%;
    object-fit: cover;
`

export const LinkContainer = styled.div`
    display:flex;
    align-items: center;
    gap:20px;

    @media(max-width:1200px){
        gap:0px;
    }
`


export const TagsContainer = styled.div`
    gap:10px;
    display: flex;
    width:100%;
    height:100%;
    flex-wrap: wrap;
`