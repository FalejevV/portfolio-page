import styled from "styled-components";
import { PContainer } from "../styles/Style.styled";
import UIBorderStat from "../components/UIBorderStat/UIBorderStat";
import TopStatsBar from "./TopStatsBar";



function HomePage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            <TopStatsBar />
        </PContainer>
    )
}


export default HomePage;