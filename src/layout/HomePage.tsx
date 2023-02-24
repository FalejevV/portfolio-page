import { PContainer } from "../styles/Style.styled";

function HomePage(props:{
    toggle:boolean;
}){
    return(
        <PContainer toggle={props.toggle}>
            HOME
        </PContainer>
    )
}


export default HomePage;