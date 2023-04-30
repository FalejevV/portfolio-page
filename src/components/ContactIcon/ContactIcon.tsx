import { ReactNode } from "react";
import { ContactContainer, ContactIconSVG } from "./ContactIcon.styled";



function ContactIcon(props:{
    title:string,
    svg:ReactNode,
    href:string,
}){
    return(
        <a href={props.href} target="_blank">
            <ContactContainer>
                <ContactIconSVG viewBox="0 0 24 24">
                    {props.svg}
                </ContactIconSVG>
            </ContactContainer>
        </a>
    )
}

export default ContactIcon;