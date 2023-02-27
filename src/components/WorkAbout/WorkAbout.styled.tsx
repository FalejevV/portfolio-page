import styled from "styled-components";
import { PText } from "../../styles/Style.styled";

export const WorkAboutContainer = styled.div`
    width:100%;
    height:100%;
    max-width: 843px;
    padding:23px;
    display:flex;
    flex-direction: column;
    gap:25px;
    position:relative;
`

export const WorkAboutTitle = styled(PText)`
    font-size:28px;
`

export const WorkAboutText = styled(PText)`
    font-size:24px;
    text-align: left;
    flex:1 auto;
`
export const WorkAboutImageContainer = styled.div`
    position: relative;
    display: flex;
    width:100%;
    overflow-x: scroll;
`

export const WorkAboutImages = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
`

export const WorkAboutImage = styled.img`
    height:100%;
    max-height: 250px;
`