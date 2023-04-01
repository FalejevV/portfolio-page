import { nanoid } from "nanoid";
import { IProject } from "../../projects";

import { LinkContainer, WorkAboutContainer, WorkAboutImage, WorkAboutImageContainer, WorkAboutImages, WorkAboutText, WorkAboutTitle, WorkAboutTitleContainer } from "./WorkAbout.styled";
import { Link } from "../../styles/Style.styled";



function WorkAbout(props:{
    data:IProject,
    setZoomedImage:Function,
}){
    
    return(
        <WorkAboutContainer>
            <WorkAboutTitleContainer>
                <WorkAboutTitle textAlign="left">{props.data.name}</WorkAboutTitle>

                <LinkContainer>
                    {props.data.liveLink.trim() !== "" && <Link target="_blank" href={props.data.liveLink}>LIVE</Link>}
                    {props.data.sourceLink.trim() !== "" && <Link target="_blank" href={props.data.sourceLink}>SOURCE</Link>}
                </LinkContainer>
            </WorkAboutTitleContainer>
            
            <WorkAboutText>{props.data.about}</WorkAboutText>
            
                <WorkAboutImageContainer>
                    <WorkAboutImages>
                        {props.data.images.map((image:string) => <WorkAboutImage onClick={() => props.setZoomedImage(image)} key={nanoid()} alt="Project image" src={image} />)}
                    </WorkAboutImages>
                </WorkAboutImageContainer>
        </WorkAboutContainer>
    )
}

export default WorkAbout;