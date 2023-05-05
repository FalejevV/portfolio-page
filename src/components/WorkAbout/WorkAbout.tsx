import { nanoid } from "nanoid";
import { IProject } from "../../projects";

import { LinkContainer, WorkAboutContainer, WorkAboutImage, WorkAboutImageContainer, WorkAboutImages, WorkAboutText, WorkAboutTitle, WorkAboutTitleContainer } from "./WorkAbout.styled";
import { LineDivider, Link } from "../../styles/Style.styled";



function WorkAbout(props:{
    data:IProject,
    setZoomedImage:Function,
    isSmallScreen:boolean,
}){
    return(
        <WorkAboutContainer>
            <WorkAboutTitleContainer>
                <WorkAboutTitle textAlign="left">{props.data.name}</WorkAboutTitle>
                {!props.isSmallScreen && 
                <LinkContainer>
                    {props.data.liveLink.trim() !== "" && <Link target="_blank" href={props.data.liveLink}>LIVE</Link>}
                    {props.data.sourceLink.trim() !== "" && <Link target="_blank" href={props.data.sourceLink}>SOURCE</Link>}
                </LinkContainer>
                }
            </WorkAboutTitleContainer>

            {props.isSmallScreen && <LineDivider></LineDivider>}
            
            <WorkAboutText>{props.isSmallScreen ? props.data.shortAbout : props.data.about}</WorkAboutText>
                <WorkAboutImageContainer>
                    <WorkAboutImages>
                        {props.data.images.map((image:string) => <WorkAboutImage onClick={() => props.setZoomedImage(image)} key={nanoid()} alt="Project image" src={image} />)}
                    </WorkAboutImages>
                </WorkAboutImageContainer>
        </WorkAboutContainer>
    )
}

export default WorkAbout;