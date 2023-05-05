import styled from "styled-components";
import { PText } from "../../styles/Style.styled";

export const WorkAboutContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap:25px;
    padding-left:25px;
    padding-bottom:25px;
    
    @media(max-width:940px){
        padding-left:25px;
        padding-bottom:25px;
        padding-top:25px;
        gap:20px;
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
    line-height:30px;
    text-align: left;
    flex:1 auto;
    opacity: 0.6;
    transition: all 0.3s;
    overflow-y:scroll;
    padding-right:15px;
    max-height:150px;
    &:hover{
        opacity: 1;
    }

    @media(max-width:940px){
        flex:unset;
        opacity: 1;
    }

    @media(max-width:650px){
        font-size:20px;
        height:100%;
        max-height:170px;
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


    @media(max-width:650px){
        min-height: 160px;
        max-height: 160px;
    }
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

    @media(max-width:768px){
        filter:unset;
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


export const MobileLinkContainer = styled(LinkContainer)`
    padding:10px;
    display: flex;
    width:100%;
    align-items: center;
    justify-content: center;
    gap:20px;
    white-space: nowrap;
    border-top:3px solid ${({ theme }) => theme.dimmColor || "red"};
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