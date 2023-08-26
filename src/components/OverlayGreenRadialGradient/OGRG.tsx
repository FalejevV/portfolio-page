import styled from "styled-components"

const OGRG = styled.div`
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:0px;
    width:1440px;
    height: 100%;
    background-color: #022209;
    z-index: 1;
    pointer-events: none;
    user-select: none;
`


function OverlayGreenRadialGradient(){
    return(
        <OGRG>

        </OGRG>
    )
}

export default OverlayGreenRadialGradient