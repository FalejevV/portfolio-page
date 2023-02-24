import { ButtonText, MenuButton, MenuContainer } from "./Menu.styled";



function Menu(props:{
    page:string,
    setPage:Function,
}){

    function switchPage(pageName:string){
        if(pageName !== props.page){
            props.setPage(pageName);
        }
    }

    return(
        <MenuContainer>
            <MenuButton onClick={() => switchPage("HOME")} toggle={props.page === "HOME"}>
                <ButtonText>HOME</ButtonText>
            </MenuButton>
            <MenuButton onClick={() => switchPage("WORK")} toggle={props.page === "WORK"}>
                <ButtonText>WORK</ButtonText>
            </MenuButton>
            <MenuButton onClick={() => switchPage("CONTACT")} toggle={props.page === "CONTACT"}>
                <ButtonText>CONTACT</ButtonText>
            </MenuButton>
        </MenuContainer>
    )
}


export default Menu;