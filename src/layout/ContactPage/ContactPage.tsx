import { FormEvent, useEffect, useState } from "react";
import InputField from "../../components/InputField/InputField";
import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import { PContainer } from "../../styles/Style.styled";
import { ContactContainer, ContactListWrap, MailStatus, SubmitButton } from "./ContactPage.styled";
import emailjs from '@emailjs/browser';
import ContactList from "../ContactList/ContactList";

function ContactPage(props:{
    toggle:boolean
}){

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [mailStatus, setMailStatus] = useState("");


    function submitForm(e:FormEvent){
        if(buttonDisabled){
            return;
        }
        e.preventDefault();
        setButtonDisabled(true);
        
        let formTarget = e.target as HTMLFormElement;
        let title = formTarget[0] as HTMLInputElement;
        let email = formTarget[1] as HTMLInputElement;
        let message = formTarget[2] as HTMLInputElement;
        if(title && email && message){
            if(title.value.trim() !== "" && email.value.trim() !== "" && message.value.trim() !== ""){
                emailjs.send(process.env.REACT_APP_SERVICE ||"",process.env.REACT_APP_TEMPLATE || "", {
                    title:title.value,
                    email:email.value,
                    message:message.value,
                }, process.env.REACT_APP_KEY || "")
                .then(function(response) {
                    setMailStatus("Message sent!");
                    setButtonDisabled(false);
                }, function(err) {
                    setMailStatus("Error. Try again later :/");
                    setButtonDisabled(false);
                });
                
            }else{
                setMailStatus("Some fields are empty!");
                setButtonDisabled(false);
            }
        }
    }

    useEffect(() => {
        if(mailStatus.trim() !== ""){
            setTimeout(() => {
                setMailStatus("");
            },2000);
        }
    },[mailStatus]);

    return(
        <PContainer flexDirection="column" toggle={props.toggle}>
            <UIBorderStat leftTitleLineWidth="350%" fullCorner title={"CONTACT FORM"} element={
                <ContactContainer onSubmit={(e) => submitForm(e)}>
                    <InputField title="Title" name="title"/>
                    <InputField title="Email" name="email"/>
                    <InputField title="Message" name="message"/>
                    <SubmitButton disabled={buttonDisabled} >Send</SubmitButton>

                    {mailStatus.trim() !== "" && <MailStatus>{mailStatus}</MailStatus>}
                </ContactContainer>
            } />
            <ContactListWrap>
                <ContactList />
            </ContactListWrap>
        </PContainer>
    )
}

export default ContactPage;