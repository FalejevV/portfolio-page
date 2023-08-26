import styled, { css } from "styled-components";
import UIBorderStat from "../components/UIBorderStat/UIBorderStat";

const TopStatsBarContainer = styled.header`
    display: flex;
    gap:20px;
    width:100%;
    height:fit-content;
    z-index: 4;
    padding-top:35px;

    @media(max-width:940px){
        display:none;
    }
`

export const LangContainer = styled.div<{
    doDisplay?:boolean,
}>`
    display:flex;
    gap:20px;

    @media(max-width:940px){
        justify-content: flex-end;

        display:none;

        ${({ doDisplay }) => doDisplay && css`
            display:flex;
        `}
    }
`

export const StatsWindow = styled.div`
    display:flex;
    flex:1 auto;
    gap:20px;
    justify-content: space-between;
`


function TopStatsBar(){
   return(
        <TopStatsBarContainer>
            <UIBorderStat leftCorner leftTitleLineWidth="40%" title="USER" value="Vladimir Falejev" />
            <StatsWindow>
                <LangContainer >
                    <UIBorderStat leftTitleLineWidth="100%" title="ENG" value="65%" />
                    <UIBorderStat leftTitleLineWidth="100%" title="RU" value="100%" />
                    <UIBorderStat leftTitleLineWidth="100%" title="LT" value="65%" />
                </LangContainer>
                <UIBorderStat rightCorner leftTitleLineWidth="160%" title="LOCATION" value="Lithuania" />
            </StatsWindow>
        </TopStatsBarContainer>
    )
}

export default TopStatsBar;