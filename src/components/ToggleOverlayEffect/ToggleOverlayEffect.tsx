import { ColorPicker, TOEArrowSVG, TOEBackgroundSVG, TOEButtonContainer, TOEContainer, TOESVG } from "./ToggleOverlayEffect.styled";


function ToggleOverlayEffect(props:{
    toggle:boolean,
    setToggle:Function,
    setThemeId:Function,
    themeId:number
}){

    function changeTheme(){
        if(props.themeId >= 2){
            props.setThemeId(0)
        }else{
            props.setThemeId((prev:number) => prev +1);
        }
    }

    return(
        <>
            <TOEContainer toggle={props.toggle}>
                {!props.toggle && 
                <TOEArrowSVG viewBox="0 0 24 24">
                    <path d="M13 12H20L12 20L4 12H11V4H13V12Z"></path>
                </TOEArrowSVG>
                }
            </TOEContainer>

            <ColorPicker onClick={changeTheme} />

            <TOEButtonContainer toggle={props.toggle} onClick={() => props.setToggle((prev:boolean) => !prev)}>
                <TOESVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z"/>
                </TOESVG>

                <TOEBackgroundSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z"/>
                </TOEBackgroundSVG>
            </TOEButtonContainer>
        </>
    )
}

export default ToggleOverlayEffect;