import { UIBBContainer, UIBBLine, UIBBText } from "./UIBorderBottomCorner.styled";




function UIBorderBottomCorner(props:{
    text:string,
    leftCorner?:boolean,
    rightCorner?:boolean,
    leftTitleLineWidth?:string,
}){
    return(
        <UIBBContainer leftCorner={props.leftCorner} rightCorner={props.rightCorner}>
            <UIBBLine leftTitleLineWidth={props.leftTitleLineWidth}></UIBBLine>
            <UIBBText>{props.text}</UIBBText>
            <UIBBLine></UIBBLine>
        </UIBBContainer>
    )
}

export default UIBorderBottomCorner;