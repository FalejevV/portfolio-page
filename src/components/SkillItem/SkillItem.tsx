import { SkillImage, SkillItemContainer, SkillName } from "./SkillItem.styled";


function SkillItem(props:{
    icon:string,
    skillName:string,
    opacity?:string,
}){

    return(
        <SkillItemContainer opacity={props.opacity}>
            <SkillImage alt="Skill image" src={props.icon} />
            <SkillName>{props.skillName}</SkillName>
        </SkillItemContainer>
    )
}


export default SkillItem;