import styled from "styled-components";
import UIBorderBottomCorner from "../components/UIBorderBottomCorner/UIBorderBottomCorner";
import Menu from "../components/Menu/Menu";


const UIContainer = styled.footer`
    margin-top:36px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
`


function BottomUI(props:{
    page:string,
    setPage:Function,
}){
    return(
        <UIContainer>
            <UIBorderBottomCorner leftTitleLineWidth="30%" leftCorner text={"0x37b"} />
            <Menu setPage={props.setPage} page={props.page} />
            <UIBorderBottomCorner leftTitleLineWidth="314%" rightCorner text={"0x66f"} />
        </UIContainer>
    )
}


export default BottomUI;