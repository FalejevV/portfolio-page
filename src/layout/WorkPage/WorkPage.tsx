import UIBorderStat from "../../components/UIBorderStat/UIBorderStat";
import WorkRow from "../../components/WorkRow/WorkRow";
import { Link, PContainer, PText } from "../../styles/Style.styled";
import { MobileContainer, MobileProjectWrap, ProjectDivider, TagsContainer, WPCreationListGrid, WPProjectReviewContainer, WPProjectReviewMainContainer, WorkPageContainer } from "./WorkPage.styled";
import projects, { IProject } from "../../projects";
import { useMemo, useState } from "react";
import WorkAbout from "../../components/WorkAbout/WorkAbout";
import Tag from "../../components/Tag/Tag";
import { nanoid } from "nanoid";
import useSmallScreenEffect from "../../hooks/useSmallScreenEffect";
import { MobileLinkContainer, ZoomedImage, ZoomedImageContainer } from "../../components/WorkAbout/WorkAbout.styled";
import { useInView } from "react-intersection-observer";


function MobileProjectComponent(props: {
    project: IProject,
    setZoomedImage: Function,
    isSmallScreen: boolean
}) {
    
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    console.log(inView);

    return useMemo(() =>(
        <MobileProjectWrap key={props.project.name} ref={ref}>
            <WPProjectReviewContainer>
                <WPProjectReviewMainContainer>
                    <WorkAbout inView={inView} setZoomedImage={props.setZoomedImage} data={props.project} isSmallScreen={props.isSmallScreen} />
                </WPProjectReviewMainContainer>
                {inView && <>
                <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                    <TagsContainer>
                        {props.project.usedTools.map((tool: string) => <Tag key={nanoid()} title={tool} />)}
                    </TagsContainer>
                } />
                
                <MobileLinkContainer>
                    {props.project.liveLink.trim() !== "" && <Link target="_blank" href={props.project.liveLink}>VIEW LIVE</Link>}
                    {props.project.sourceLink.trim() !== "" && <Link target="_blank" href={props.project.sourceLink}> VIEW SOURCE</Link>}
                </MobileLinkContainer>
                </>}
            </WPProjectReviewContainer>

            <ProjectDivider></ProjectDivider>
            <ProjectDivider></ProjectDivider>
            <ProjectDivider></ProjectDivider>

        </MobileProjectWrap>
    ),[props.isSmallScreen, inView, props.setZoomedImage]);
}



function WorkPage(props: {
    toggle: boolean;
}) {

    const [currentProject, setCurrentProject] = useState(0);
    const [isSmallScreen] = useSmallScreenEffect();
    const [zoomedImage, setZoomedImage] = useState("");




    return (
        <PContainer toggle={props.toggle}>
            {zoomedImage.trim() !== "" &&
                <ZoomedImageContainer onClick={() => setZoomedImage("")}>
                    <ZoomedImage src={zoomedImage} />
                </ZoomedImageContainer>
            }

            <WorkPageContainer>
                {!isSmallScreen && <>
                    <UIBorderStat customPadding="25px 0px 25px 25px" leftTitleLineWidth="11%" fullCorner title={"USER CREATIONS"} element={

                        <WorkPageContainer>
                            <WPCreationListGrid>
                                <PText dimm textAlign="left">Active</PText>
                                <PText dimm textAlign="left">Project Name</PText>
                                {projects.map((project, index: number) => <WorkRow key={nanoid()} onClick={() => setCurrentProject(index)} name={project.name} toggle={currentProject === index} />)}
                            </WPCreationListGrid>


                            <WPProjectReviewContainer>
                                <WPProjectReviewMainContainer>
                                    <WorkAbout setZoomedImage={setZoomedImage} data={projects[currentProject]} isSmallScreen={isSmallScreen} />
                                </WPProjectReviewMainContainer>

                                <UIBorderStat leftTitleLineWidth="20%" title={"USED TOOLS"} noBottom noLeft noRight element={
                                    <TagsContainer>
                                        {projects[currentProject].usedTools.map((tool: string) => <Tag key={nanoid()} title={tool} />)}
                                    </TagsContainer>
                                } />
                            </WPProjectReviewContainer>
                        </WorkPageContainer>

                    } />
                </>
                }

                {useMemo(() => {
                    if (isSmallScreen) return (
                        <MobileContainer>
                            {projects.map((project: IProject, index: number) =>
                                <MobileProjectComponent key={index} project={project} setZoomedImage={setZoomedImage} isSmallScreen={isSmallScreen} />
                            )}
                        </MobileContainer>
                    )
                }, [isSmallScreen])
                }


            </WorkPageContainer>
        </PContainer>
    )
}


export default WorkPage;