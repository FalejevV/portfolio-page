import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import WorkRow from "../../components/WorkRow/WorkRow";
import { LineDivider, Link, PContainer, PText } from "../../styles/Style.styled";
import {  MobileContainer, MobileProjectWrap, ProjectDivider, TagsContainer, WPCreationListGrid, WPProjectReviewContainer, WPProjectReviewMainContainer, WorkPageContainer } from "./WorkPage.styled";
import projects, { IProject } from "../../projects";
import { useMemo, useState } from "react";
import WorkAbout from "../../components/WorkAbout/WorkAbout";
import Tag from "../../components/Tag/Tag";
import { nanoid } from "nanoid";
import useSmallScreenEffect from "../../hooks/useSmallScreenEffect";
import { LinkContainer, MobileLinkContainer, ZoomedImage, ZoomedImageContainer } from "../../components/WorkAbout/WorkAbout.styled";


function WorkPage(props:{
    toggle:boolean;
}){

    const [currentProject,setCurrentProject] = useState(0);
    const [isSmallScreen] = useSmallScreenEffect();
    const [zoomedImage,setZoomedImage] = useState("");
    
    return(
        <PContainer toggle={props.toggle}>
            {zoomedImage.trim() !== "" &&
            <ZoomedImageContainer onClick={() => setZoomedImage("")}>
                <ZoomedImage src={zoomedImage} />
            </ZoomedImageContainer>
            }
            
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
                                <WorkAbout setZoomedImage={setZoomedImage} data={projects[currentProject]} isSmallScreen={isSmallScreen}/>
                            </WPProjectReviewMainContainer>

                            <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                                <TagsContainer>
                                    {projects[currentProject].usedTools.map((tool:string) => <Tag key={nanoid()} title={tool} />)}
                                </TagsContainer>
                            }/>
                        </WPProjectReviewContainer>

                    </>
                    }
                    
                    {useMemo(() => {
                        if(isSmallScreen)
                        return(
                        <MobileContainer>
                            {projects.map((project:IProject) => 
                            <MobileProjectWrap key={nanoid()}>
                                <WPProjectReviewContainer>
                                    <WPProjectReviewMainContainer>
                                        <WorkAbout setZoomedImage={setZoomedImage} data={project} isSmallScreen={isSmallScreen}/>
                                    </WPProjectReviewMainContainer>
                                    
                                    <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                                        <TagsContainer>
                                            {project.usedTools.map((tool:string) => <Tag key={nanoid()} title={tool} />)}
                                        </TagsContainer>
                                    }/>
                                    <MobileLinkContainer>
                                        {project.liveLink.trim() !== "" && <Link target="_blank" href={project.liveLink}>VIEW LIVE</Link>}
                                        {project.sourceLink.trim() !== "" && <Link target="_blank" href={project.sourceLink}> VIEW SOURCE</Link>}
                                    </MobileLinkContainer>
                                </WPProjectReviewContainer>

                                <ProjectDivider></ProjectDivider>
                                <ProjectDivider></ProjectDivider>
                                <ProjectDivider></ProjectDivider>

                            </MobileProjectWrap>
                        )}
                        </MobileContainer>
                        )
                    },[isSmallScreen])
                    }


            </WorkPageContainer>
        </PContainer>
    )
}


export default WorkPage;