import styled from "styled-components";
import PageContainer from "../components/PageContainer/PageContainer";
import glassImage from "../img/glass.png";

const ScreenContainer = styled.div`
    margin: 0 auto;
    width:100%;
    max-width: 1440px;
    height:100%;
    max-height: 1000px;
    position: relative;
`

const ScreenImageOverlay = styled.img`
    position: fixed;
    top:0px;
    left:50%;
    transform: translateX(-50%);
    z-index:20;
    width:100%;
    max-width: 1440px;
    height:100vh;
    max-height: 1000px;
`


function ScreenFrame(props:{
    page:string
}){
    return(
        <ScreenContainer>
            <ScreenImageOverlay src={glassImage}/>
            <PageContainer toggle={props.page === "first"} bgColor={"grey"} name={"first"} />
            <PageContainer toggle={props.page === "second"} bgColor={"green"} name={"second"} />
            <PageContainer toggle={props.page === "third"} bgColor={"blue"} name={"third"} />
            <PageContainer toggle={props.page === "fourth"} bgColor={"purple"} name={"fourth"} />
        </ScreenContainer>
    )
}

export default ScreenFrame;