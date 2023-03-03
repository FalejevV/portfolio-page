import { WorkRowContainer, WorkRowIndicator, WorkRowTitle } from "./WorkRow.styled";



function WorkRow(props:{
    toggle:boolean
    name:string,
    onClick:Function,
}){
    
    return(
        <WorkRowContainer onClick={() => props.onClick()}>
            <WorkRowIndicator toggle={props.toggle}></WorkRowIndicator>
            <WorkRowTitle textAlign="left">{props.name}</WorkRowTitle>
        </WorkRowContainer>
    )
}


export default WorkRow;