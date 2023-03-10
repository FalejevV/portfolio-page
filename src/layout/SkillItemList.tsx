import styled from "styled-components";
import SkillItem from "../components/SkillItem/SkillItem";


import cssIcon from "../img/skill-icons/css-icon.svg";
import teaIcon from "../img/skill-icons/tea-icon.svg";
import htmlIcon from "../img/skill-icons/html-icon.svg";
import jsIcon from "../img/skill-icons/js-icon.svg";
import nextIcon from "../img/skill-icons/next-icon.svg";
import reactIcon from "../img/skill-icons/react-icon.svg";
import styledIcon from "../img/skill-icons/styled-icon.svg";
import expressIcon from "../img/skill-icons/express-icon.svg";


const SkillItemsContainer = styled.div`
    padding:5px 0px;
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    width:100%;
`



function SkillItemList(){
    return(
        <SkillItemsContainer>
            <SkillItem opacity="0.8" icon={teaIcon} skillName={"Tea"}  />
            <SkillItem icon={cssIcon} skillName={"CSS"}  />
            <SkillItem icon={htmlIcon} skillName={"HTML"}  />
            <SkillItem icon={jsIcon} skillName={"JS"}  />
            <SkillItem icon={reactIcon} skillName={"React"}  />
            <SkillItem icon={styledIcon} skillName={"Styled"}  />
            <SkillItem opacity="0.3" icon={nextIcon} skillName={"NextJS"}  />
            <SkillItem opacity="0.2" icon={expressIcon} skillName={"ExpressJS"}  />
        </SkillItemsContainer>
    )
}


export default SkillItemList;