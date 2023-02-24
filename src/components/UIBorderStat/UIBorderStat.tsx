import { UIBorderStatContainer, UIStatProgressBar, UIStatTitleText, UIStatValueText, UITitleContainer, UITitleLine } from "./UIBorderStat.styled"



function UIBorderStat(props:{
    title:string,
    value:string,
    leftTitleLineWidth?:string,
    leftCorner?:boolean,
    rightCorner?:boolean,
    fullCorner?:boolean,
    displayToggle?:boolean,
    doDisplay?:boolean,
}){
    return(
        <UIBorderStatContainer displayToggle={props.displayToggle} doDisplay={props.doDisplay}>
            <UITitleContainer>
                <UITitleLine leftTitleLineWidth={props.leftTitleLineWidth} />
                <UIStatTitleText>{props.title}</UIStatTitleText>
                <UITitleLine />
            </UITitleContainer>
            <UIStatValueText fullCorner={props.fullCorner} progress={props.value.includes("%")} leftCorner={props.leftCorner} rightCorner={props.rightCorner || props.displayToggle}>{props.value}
                <UIStatProgressBar progress={props.value || "50%"}></UIStatProgressBar>
            </UIStatValueText>
        </UIBorderStatContainer>
    )
}

export default UIBorderStat