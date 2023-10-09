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
import reduxIcon from "../img/skill-icons/redux-icon.svg";
import typescriptIcon from "../img/skill-icons/typescript-icon.svg";
import tailwindIcon from "../img/skill-icons/tailwind-icon.svg"

const SkillItemsContainer = styled.div`
    padding:5px 0px;
    display:grid;
    grid-template-columns: repeat( auto-fit, minmax(120px, 1fr));
    grid-auto-columns: 150px;
    gap:12px;
    width:100%;

    @media(max-width:600px){
        grid-template-columns: repeat( auto-fit, minmax(90px, 1fr));
    }
    @media(max-width:500px){
        grid-template-columns: repeat( auto-fit, minmax(80px, 1fr));
    }


`



function SkillItemList() {
    return (
        <SkillItemsContainer>
            <SkillItem opacity="0.95" icon={teaIcon} skillName={"Tea"} />
            <SkillItem icon={cssIcon} skillName={"CSS"} />
            <SkillItem icon={htmlIcon} skillName={"HTML"} />
            <SkillItem icon={jsIcon} skillName={"JavaScript"} />
            <SkillItem icon={reactIcon} skillName={"React"} />
            <SkillItem icon={styledIcon} skillName={"Styled"} />
            <SkillItem opacity="0.3" icon={reduxIcon} skillName={"Redux"} />
            <SkillItem opacity="0.3" icon={tailwindIcon} skillName={"Tailwind"} />
            <SkillItem opacity="0.3" icon={typescriptIcon} skillName={"TypeScript"} />
            <SkillItem opacity="0.3" icon={nextIcon} skillName={"NextJS"} />
            <SkillItem opacity="0.2" icon={expressIcon} skillName={"ExpressJS"} />
        </SkillItemsContainer>
    )
}


export default SkillItemList;