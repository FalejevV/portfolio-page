import { PContainer } from "./PageContainer.styled";



function PageContainer(props:{
    bgColor:string,
    name:string,
    toggle:boolean,
}){
    return(
        <PContainer toggle={props.toggle} id={props.name} bgColor={props.bgColor}>
            
        </PContainer>
    )
}

export default PageContainer;