import { nanoid } from "nanoid";
import { IProject } from "../../projects";

import { LinkContainer, WorkAboutContainer, WorkAboutImage, WorkAboutImageContainer, WorkAboutImages, WorkAboutText, WorkAboutTitle, WorkAboutTitleContainer } from "./WorkAbout.styled";
import { Link } from "../../styles/Style.styled";



function WorkAbout(props:{
    data:IProject
}){
    
    return(
        <WorkAboutContainer>
            <WorkAboutTitleContainer>
                <WorkAboutTitle textAlign="left">{props.data.name}</WorkAboutTitle>

                <LinkContainer>
                    <Link target="_blank" href={props.data.liveLink}>LIVE</Link>
                    <Link target="_blank" href={props.data.sourceLink}>SOURCE</Link>
                </LinkContainer>
            </WorkAboutTitleContainer>
            
            <WorkAboutText>{props.data.about}</WorkAboutText>
            
                <WorkAboutImageContainer>
                    <WorkAboutImages>
                        {props.data.images.map((image:string,index:number) => <WorkAboutImage key={nanoid()} alt="Project image" src={image} />)}
                    </WorkAboutImages>
                </WorkAboutImageContainer>
        </WorkAboutContainer>
    )
}

export default WorkAbout;