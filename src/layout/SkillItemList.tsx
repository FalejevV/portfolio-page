import styled from "styled-components";
import SkillItem from "../components/SkillItem/SkillItem";


import cssIcon from "../img/skill-icons/css.svg";
import htmlIcon from "../img/skill-icons/html.svg";
import jsIcon from "../img/skill-icons/javascript.svg";
import nextIcon from "../img/skill-icons/next-js.svg";
import reactIcon from "../img/skill-icons/react.svg";
import styledIcon from "../img/skill-icons/styled.svg";
import expressIcon from "../img/skill-icons/express.svg";


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