import styled from "styled-components";
import Link from "../Link/Link";

const LinkContainer = styled.div`
    position: fixed;
    top:50px;
    left:50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:30px;
`

function LinkHolder(props:{
    setPage:Function,
}){
    return(
        <LinkContainer>
            <Link setPage={props.setPage} title="first" location="first"/>
            <Link setPage={props.setPage} title="second" location="second"/>
            <Link setPage={props.setPage} title="third" location="third"/>
            <Link setPage={props.setPage} title="fourth" location="fourth"/>
        </LinkContainer>
    )
}


export default LinkHolder;