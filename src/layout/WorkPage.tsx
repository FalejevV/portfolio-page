import { PContainer } from "../styles/Style.styled";

function WorkPage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            WORK
        </PContainer>
    )
}


export default WorkPage;