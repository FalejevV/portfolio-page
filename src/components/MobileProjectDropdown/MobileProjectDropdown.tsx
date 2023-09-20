import styled, { css } from "styled-components"
import { IProject } from "../../projects"
import { MobileProjectComponent } from "../../layout/WorkPage/WorkPage"

const Container = styled.div`
    width:100%;
    height:fit-content;    
`
const DropdownContainer = styled.div<{
    isToggled:boolean
}>`
    cursor:pointer;
    width:100%;
    height:fit-content;
    font-size:25px;
    padding:5px 10px 5px 20px;
    color:white;
    background-color:${({ theme }) => theme.dimmColor};
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${({isToggled}) => isToggled && css`
        background-color: ${({ theme }) => theme.mainColor};
        color:black;
    `}

`

const ChevronSVG = styled.svg<{
    isToggled:boolean
}>`
    width:30px;
    height:30px;

    ${({ isToggled }) => isToggled && css`
        transform:rotate(180deg);
    `}
`

export default function MobileProjectDropdown(props:{
    isToggled:boolean,
    index:number,
    setCurrentProject:Function,
    project:IProject,
    setZoomedImage:Function,
    isSmallScreen:boolean
}){

    function toggleProject(){
        if(props.isToggled){
            props.setCurrentProject(-1);
        }else{
            props.setCurrentProject(props.index);
        }
    }
    return(
        <Container>
            <DropdownContainer isToggled={props.isToggled} onClick={toggleProject}>
                {`${props.project.name}`}
                <ChevronSVG isToggled={props.isToggled} viewBox="0 0 24 24">
                    <path d="M12 16L6 10H18L12 16Z"></path>
                </ChevronSVG>
            </DropdownContainer>
            {props.isToggled && <MobileProjectComponent project={props.project} setZoomedImage={props.setZoomedImage} isSmallScreen={props.isSmallScreen} />}
        </Container>
    )
}