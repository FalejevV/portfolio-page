import styled from "styled-components";
import { PContainer } from "../styles/Style.styled";
import TopStatsBar from "./TopStatsBar";
import BottomCornersUI from "./BottomCornersUI";

function HomePage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            <TopStatsBar />
            <BottomCornersUI />
        </PContainer>
    )
}


export default HomePage;