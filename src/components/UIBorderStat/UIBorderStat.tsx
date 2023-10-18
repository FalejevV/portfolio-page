import { UIBorderStatContainer, UIStatProgressBar, UIStatTitleText, UIStatValueText, UITitleContainer, UITitleLine } from "./UIBorderStat.styled"



function UIBorderStat(props:{
    title:string,
    value?:string,
    leftTitleLineWidth?:string,
    leftCorner?:boolean,
    rightCorner?:boolean,
    fullCorner?:boolean,
    displayToggle?:boolean,
    doDisplay?:boolean,
    noBottom?:boolean,
    noRight?:boolean,
    noLeft?:boolean,
    gCol?:string,
    textAlign?:string,
    element?:JSX.Element,
    customPadding?:string
}){
    return(
        <UIBorderStatContainer gCol={props.gCol} displayToggle={props.displayToggle} doDisplay={props.doDisplay}>
            <UITitleContainer>
                <UITitleLine leftTitleLineWidth={props.leftTitleLineWidth} />
                <UIStatTitleText>{props.title}</UIStatTitleText>
                <UITitleLine />
            </UITitleContainer>
            <UIStatValueText
                            customPadding={props.customPadding}
                            textAlign={props.textAlign}
                            noLeft={props.noLeft}
                            noRight={props.noRight}
                            noBottom={props.noBottom}
                            fullCorner={props.fullCorner}
                            progress={props.value?.includes("%")}
                            leftCorner={props.leftCorner}
                            rightCorner={props.rightCorner || props.displayToggle}>
                                {props.element || props.value}
                {props.value && <UIStatProgressBar progress={props.value || "50%"}></UIStatProgressBar>}
            </UIStatValueText>
        </UIBorderStatContainer>
    )
}

export default UIBorderStat