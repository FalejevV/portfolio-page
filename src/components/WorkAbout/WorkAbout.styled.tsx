import styled from "styled-components";
import { PText } from "../../styles/Style.styled";

export const WorkAboutContainer = styled.div`
    width:100%;
    height:100%;
    padding:25px;
    display:flex;
    flex-direction: column;
    gap:25px;
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

    @media(max-width:940px){
        flex:unset;
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
    min-height: 200px;
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

    filter: sepia(100%) hue-rotate(100deg) saturate(900%) brightness(0.5);

    transition: all 0.3s;
    &:hover{
        filter: unset;
    }
`

export const LinkContainer = styled.div`
    display:flex;
    align-items: center;
    gap:20px;

    @media(max-width:1200px){
        gap:0px;
    }
`

export const ZoomedImageContainer = styled.div`
    position: absolute;
    top:-100px;
    left:50%;
    transform: translateX(-50%);
    width:100%;
    height: ${({ theme }) => theme.maxHeight || "1000px"};
    max-width: ${({ theme }) => theme.maxWidth || "1000px"};
    max-height: ${({ theme }) => theme.maxHeight || "1000px"};
    z-index:9999;
    background-color: #0000009d;
`

export const ZoomedImage = styled.img`
    position: absolute;
    top:10%;
    left:50%;
    transform: translateX(-50%);
    width:100%;
    max-width: 1000px;
    height:100%;
    max-height: 700px;
    object-fit: contain;
`


export const TagsContainer = styled.div`
    gap:10px;
    display: flex;
    width:100%;
    height:100%;
    flex-wrap: wrap;
`