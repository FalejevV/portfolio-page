import styled from "styled-components";

export const FOEContainer = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    left:0px;
    top:0px;
    pointer-events:none;

    z-index: 1000;
    opacity: 0.5;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,0) 37%, rgba(0,0,0,1) 100%);


    @media(max-width:768px){
        display:none;
    }
`