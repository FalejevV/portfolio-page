import { LinkContainer, LinkElement } from "./Link.styled";



function Link(props:{
    title:string,
    location:string,
    setPage:Function,
}){
    return(
        <LinkContainer onClick={() => props.setPage(props.location)}>
            <LinkElement>{props.title}</LinkElement>
        </LinkContainer>
    )
}

export default Link;