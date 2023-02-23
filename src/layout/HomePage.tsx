import styled from "styled-components";
import { PContainer } from "../styles/Style.styled";
import UIBorderStat from "../components/UIBorderStat/UIBorderStat";
import TopStatsBar from "./TopStatsBar";



function HomePage(){
    return(
        <PContainer toggle={true}>
            <TopStatsBar />
        </PContainer>
    )
}


export default HomePage;