import { PContainer } from "../styles/Style.styled";

function ContactPage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            CONTACT
        </PContainer>
    )
}


export default ContactPage;