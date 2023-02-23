import styled from "styled-components"

const OGRG = styled.div`
    position: absolute;
    left:0px;
    top:0px;
    width:100%;
    height: 100%;
    background: radial-gradient(136.57% 136.57% at 50% 50%, rgba(0, 0, 0, 0) 0%, #000000 100%);
    background-color: #0B4716;
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