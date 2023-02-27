import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import WorkRow from "../../components/WorkRow/WorkRow";
import { PContainer, PText } from "../../styles/Style.styled";
import { WPCreationListGrid, WPProjectReviewContainer, WPProjectReviewMainContainer, WorkPageContainer } from "./WorkPage.styled";
import projects from "../../projects";
import { useState } from "react";
import WorkAbout from "../../components/WorkAbout/WorkAbout";


function WorkPage(props:{
    toggle:boolean;
}){

    const [currentProject,setCurrentProject] = useState(0);


    return(
        <PContainer toggle={props.toggle}>
            <WorkPageContainer>
                <UIBorderStat leftTitleLineWidth="11%" fullCorner title={"USER CREATIONS"} element={
                    <WPCreationListGrid>
                        <PText dimm textAlign="left">Active</PText>
                        <PText dimm textAlign="left">Project Name</PText>
                        {projects.map((project,index:number) => <WorkRow key={index} onClick={() => setCurrentProject(index)} name={project.name} toggle={currentProject===index} />)}
                    </WPCreationListGrid>
                }/>

                <WPProjectReviewContainer>
                    <WPProjectReviewMainContainer>
                        <WorkAbout data={projects[currentProject]} />
                    </WPProjectReviewMainContainer>

                    <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight />
                </WPProjectReviewContainer>
            </WorkPageContainer>
        </PContainer>
    )
}


export default WorkPage;