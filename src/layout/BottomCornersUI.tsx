import styled from "styled-components";
import UIBorderBottomCorner from "../components/UIBorderBottomCorner/UIBorderBottomCorner";

const BCornersContainer = styled.div`
    width:100%;
    height:70px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    z-index: 4;
    gap:100px;
`

function BottomCornersUI(){
    return(
        <BCornersContainer>
            <UIBorderBottomCorner leftTitleLineWidth="30%" leftCorner text={"0x37b"} />
            <UIBorderBottomCorner leftTitleLineWidth="314%" rightCorner text={"0x66f"} />
        </BCornersContainer>
    )
}


export default BottomCornersUI;