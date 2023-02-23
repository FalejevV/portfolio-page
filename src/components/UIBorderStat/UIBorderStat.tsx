import { UIBorderStatContainer, UIStatTitleText, UIStatValueText, UITitleContainer, UITitleLine } from "./UIBorderStat.styled"



function UIBorderStat(props:{
    title:string,
    value:string,
    leftTitleLineWidth?:string,
    leftCorner?:boolean,
    rightCorner?:boolean,
}){
    return(
        <UIBorderStatContainer>
            <UITitleContainer>
                <UITitleLine leftTitleLineWidth={props.leftTitleLineWidth} />
                <UIStatTitleText>{props.title}</UIStatTitleText>
                <UITitleLine />
            </UITitleContainer>
            <UIStatValueText leftCorner={props.leftCorner} rightCorner={props.rightCorner}>{props.value}</UIStatValueText>
        </UIBorderStatContainer>
    )
}

export default UIBorderStat