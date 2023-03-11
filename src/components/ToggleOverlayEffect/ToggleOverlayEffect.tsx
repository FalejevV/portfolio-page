import { TOEButton, TOEContainer } from "./ToggleOverlayEffect.styled";


function ToggleOverlayEffect(props:{
    toggle:boolean,
    setToggle:Function,
}){
    return(
        <>
            <TOEContainer toggle={props.toggle}></TOEContainer>
            <TOEButton toggle={props.toggle} onClick={() => props.setToggle()}></TOEButton>
        </>
    )
}

export default ToggleOverlayEffect;