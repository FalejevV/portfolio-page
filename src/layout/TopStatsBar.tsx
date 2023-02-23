import styled from "styled-components";
import UIBorderStat from "../components/UIBorderStat/UIBorderStat";

const TopStatsBarContainer = styled.div`
    display: flex;
    gap:20px;
    width:100%;
    height:fit-content;
    z-index: 4;
`

const BlankDivider = styled.div`
    flex:1 auto;
`


function TopStatsBar(){
    return(
        <TopStatsBarContainer>
            <UIBorderStat leftCorner leftTitleLineWidth="40%" title="USER" value="Vladimir Falejev 24 y/o" />
            <UIBorderStat leftTitleLineWidth="100%" title="ENG" value="65%" />
            <UIBorderStat leftTitleLineWidth="100%" title="RU" value="100%" />
            <UIBorderStat leftTitleLineWidth="100%" title="LT" value="65%" />
            <BlankDivider></BlankDivider>
            <UIBorderStat rightCorner leftTitleLineWidth="160%" title="LOCATION" value="Lithuania --- Visaginas" />
        </TopStatsBarContainer>
    )
}

export default TopStatsBar;