import { PContainer } from "./PageContainer.styled";



function PageContainer(props:{
    bgColor:string,
    name:string,
}){
    return(
        <PContainer id={props.name} bgColor={props.bgColor}>
            
        </PContainer>
    )
}

export default PageContainer;