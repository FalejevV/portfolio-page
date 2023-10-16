import { ColorPicker, ColorPickerSVG, TOEArrowSVG, TOEBackgroundSVG, TOEButtonContainer, TOEContainer, TOESVG } from "./ToggleOverlayEffect.styled";


function ToggleOverlayEffect(props: {
    toggle: boolean,
    setToggle: Function,
    setThemeId: Function,
    themeId: number
}) {

    function changeTheme() {
        if (props.themeId >= 2) {
            props.setThemeId(0)
        } else {
            props.setThemeId((prev: number) => prev + 1);
        }
    }

    return (
        <>
            <TOEContainer toggle={props.toggle}>
                {!props.toggle &&
                    <TOEArrowSVG viewBox="0 0 24 24">
                        <path d="M13 12H20L12 20L4 12H11V4H13V12Z"></path>
                    </TOEArrowSVG>
                }
            </TOEContainer>

            <ColorPicker onClick={changeTheme}>
                <ColorPickerSVG viewBox="0 0 165 164">
                    <path d="M89.7161 75.1157C91.7067 77.1064 92.7073 79.7195 92.7073 82.3332C92.7073 84.9468 91.7067 87.56 89.7161 89.5506C85.7248 93.5419 79.2729 93.5419 75.2816 89.5506L18.0641 32.3331C7.30467 46.1756 0.832271 63.4888 0.832272 82.3337C0.832274 127.362 37.4698 164 82.4991 164C127.528 164 164.165 127.362 164.165 82.3332C164.165 37.3044 127.528 0.666331 82.4986 0.666333C63.6542 0.666334 46.3305 7.13828 32.498 17.8982L89.7161 75.1157Z" fill="#0C090B" />
                </ColorPickerSVG>
            </ColorPicker>

            <TOEButtonContainer toggle={props.toggle} onClick={() => props.setToggle((prev: boolean) => !prev)}>
                <TOESVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" /><path d="M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z" />
                </TOESVG>

                <TOEBackgroundSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" /><path d="M6.265 3.807l1.147 1.639a8 8 0 1 0 9.176 0l1.147-1.639A9.988 9.988 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.988 9.988 0 0 1 4.265-8.193zM11 12V2h2v10h-2z" />
                </TOEBackgroundSVG>
            </TOEButtonContainer>
        </>
    )
}

export default ToggleOverlayEffect;