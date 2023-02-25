import styled from "styled-components";
import SkillItem from "../components/SkillItem/SkillItem";


import cssIcon from "../img/skill-icons/css.svg";
import htmlIcon from "../img/skill-icons/html.svg";
import jsIcon from "../img/skill-icons/javascript.svg";
import nextIcon from "../img/skill-icons/next-js.svg";
import reactIcon from "../img/skill-icons/react.svg";
import styledIcon from "../img/skill-icons/styled.svg";


const SkillItemsContainer = styled.div`
    padding:5px 0px;
    display: grid;
    grid-template-columns: repeat(6,minmax(80px,120px));
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
        </SkillItemsContainer>
    )
}


export default SkillItemList;