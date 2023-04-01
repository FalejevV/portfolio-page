import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import WorkRow from "../../components/WorkRow/WorkRow";
import { PContainer, PText } from "../../styles/Style.styled";
import {  MobileContainer, TagsContainer, WPCreationListGrid, WPProjectReviewContainer, WPProjectReviewMainContainer, WorkPageContainer } from "./WorkPage.styled";
import projects, { IProject } from "../../projects";
import { useState } from "react";
import WorkAbout from "../../components/WorkAbout/WorkAbout";
import Tag from "../../components/Tag/Tag";
import { nanoid } from "nanoid";
import useSmallScreenEffect from "../../hooks/useSmallScreenEffect";


function WorkPage(props:{
    toggle:boolean;
}){

    const [currentProject,setCurrentProject] = useState(0);
    const [isSmallScreen] = useSmallScreenEffect();
    

    return(
        <PContainer toggle={props.toggle}>
            <WorkPageContainer>
                    {!isSmallScreen && <>
                        <UIBorderStat leftTitleLineWidth="11%" fullCorner title={"USER CREATIONS"} element={
                        <WPCreationListGrid>
                            <PText dimm textAlign="left">Active</PText>
                            <PText dimm textAlign="left">Project Name</PText>
                            {projects.map((project,index:number) => <WorkRow key={nanoid()} onClick={() => setCurrentProject(index)} name={project.name} toggle={currentProject===index} />)}
                        </WPCreationListGrid>
                        }/>

                        <WPProjectReviewContainer>
                            <WPProjectReviewMainContainer>
                                <WorkAbout data={projects[currentProject]} />
                            </WPProjectReviewMainContainer>

                            <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                                <TagsContainer>
                                    {projects[currentProject].usedTools.map((tool:string) => <Tag key={nanoid()} title={tool} />)}
                                </TagsContainer>
                            }/>
                        </WPProjectReviewContainer>

                    </>
                    }
                    
                    {isSmallScreen && <MobileContainer>
                        {projects.map((project:IProject) => 
                        <WPProjectReviewContainer key={nanoid()}>
                            <WPProjectReviewMainContainer>
                                <WorkAbout data={project} />
                            </WPProjectReviewMainContainer>
                            
                            <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                                <TagsContainer>
                                    {project.usedTools.map((tool:string) => <Tag key={nanoid()} title={tool} />)}
                                </TagsContainer>
                            }/>
                        </WPProjectReviewContainer>)}
                    </MobileContainer>
                    }


            </WorkPageContainer>
        </PContainer>
    )
}


export default WorkPage;