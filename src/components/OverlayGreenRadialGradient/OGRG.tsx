import styled from "styled-components"

const OGRG = styled.div`
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:0px;
    width:1440px;
    height: 100%;
 background: rgb(3,48,13);
background: radial-gradient(circle, rgba(3,48,13,1) 0%, rgba(0,17,4,1) 100%); 
    z-index: 1;
    pointer-events: none;
    user-select: none;
`


function OverlayGreenRadialGradient() {
    return (
        <OGRG>

        </OGRG>
    )
}

export default OverlayGreenRadialGradient