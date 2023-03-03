import InputField from "../../components/InputField/InputField";
import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import { PContainer } from "../../styles/Style.styled";
import { ContactContainer } from "./ContactPage.styled";


function ContactPage(props:{
    toggle:boolean
}){
    return(
        <PContainer toggle={props.toggle}>
            <UIBorderStat fullCorner title={"CONTACT FORM"} element={
                <ContactContainer>
                    <InputField title="Title" name="title"/>
                </ContactContainer>
            } />
        </PContainer>
    )
}

export default ContactPage;