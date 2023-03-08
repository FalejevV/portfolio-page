import { WorkRowContainer, WorkRowIndicator, WorkRowTitle } from "./WorkRow.styled";



function WorkRow(props:{
    toggle:boolean
    name:string,
    onClick:Function,
}){
    
    return(
        <WorkRowContainer>
            <WorkRowIndicator toggle={props.toggle}></WorkRowIndicator>
            <WorkRowTitle onClick={() => props.onClick()} textAlign="left">{props.name}</WorkRowTitle>
        </WorkRowContainer>
    )
}


export default WorkRow;