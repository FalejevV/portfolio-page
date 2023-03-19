import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import { PContainer, PText } from "../../styles/Style.styled";
import SkillItemList from "../SkillItemList";
import { AlertSVG, HomePageGrid, UserAboutContainer, UserIntroContainer, UserSkillsContainer } from "./HomePage.styled";
import useSmallScreenEffect from "../../hooks/useSmallScreenEffect";
import homepageAbout from "../../homepageAbout";
function HomePage(props:{
    toggle:boolean;
}){

    const [isSmallScreen] = useSmallScreenEffect();

    return(
        <PContainer toggle={props.toggle}>
            <HomePageGrid>
                <UIBorderStat leftTitleLineWidth="85px" noRight={!isSmallScreen} noBottom fullCorner title={"STATUS"} element={
                    <UserIntroContainer>
                        <PText textAlign="left">{homepageAbout.role}</PText>
                    </UserIntroContainer>
                } />
                <UIBorderStat noBottom leftTitleLineWidth="16%" fullCorner title={"USER INTRO"} element={
                    <UserIntroContainer>
                        <AlertSVG viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                        </AlertSVG>

                        <PText>{homepageAbout.phrase}</PText>

                        <AlertSVG viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                        </AlertSVG>
                    </UserIntroContainer>
                } />
                <UIBorderStat leftTitleLineWidth="65px" textAlign="left" gCol={"2 span"} noBottom fullCorner title={"ABOUT"} element={
                    <UserAboutContainer>
                        <PText textAlign="left">{homepageAbout.about}</PText>
                    </UserAboutContainer>
                } />
                <UIBorderStat  leftTitleLineWidth="85px" fullCorner title={"USER IS FAMILIAR WITH"} gCol={"2 span"}  element={
                    <UserSkillsContainer>
                        <SkillItemList />
                    </UserSkillsContainer>
                } />
            </HomePageGrid>
        </PContainer>
    )
}


export default HomePage;