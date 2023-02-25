import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import { PContainer, PText } from "../../styles/Style.styled";
import SkillItemList from "../SkillItemList";
import { AlertSVG, HomePageGrid, UserAboutContainer, UserIntroContainer, UserSkillsContainer } from "./HomePage.styled";

function HomePage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            <HomePageGrid>
                <UIBorderStat leftTitleLineWidth="85px" noRight noBottom fullCorner title={"STATUS"} element={<PText textAlign="left">Jr. Frontend Developer</PText>} />
                <UIBorderStat noBottom leftTitleLineWidth="16%" fullCorner title={"USER INTRO"} element={
                    <UserIntroContainer>
                        <AlertSVG viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                        </AlertSVG>

                        <PText>Cool opening phrase not found</PText>

                        <AlertSVG viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                        </AlertSVG>
                    </UserIntroContainer>
                } />
                <UIBorderStat leftTitleLineWidth="65px" textAlign="left" gCol={"2 span"} noBottom fullCorner title={"ABOUT"} element={
                    <UserAboutContainer>
                        <PText textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium leo suscipit hendrerit auctor. Sed ultrices mauris tempor sagittis imperdiet. Sed porttitor sapien non nisl tincidunt, et finibus justo molestie. Phasellus egestas in felis eu molestie. Aliquam pretium nisl in maximus pretium.</PText>
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