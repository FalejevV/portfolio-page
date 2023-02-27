import { IProject } from "../../projects";

import { WorkAboutContainer, WorkAboutImage, WorkAboutImageContainer, WorkAboutImages, WorkAboutText, WorkAboutTitle } from "./WorkAbout.styled";



function WorkAbout(props:{
    data:IProject
}){
    return(
        <WorkAboutContainer>
            <WorkAboutTitle textAlign="left">{props.data.name}</WorkAboutTitle>
            <WorkAboutText>{props.data.about}</WorkAboutText>
            <WorkAboutImageContainer>
                <WorkAboutImages>
                    {props.data.images.map((image:string,index:number) => <WorkAboutImage key={index} alt="Project image" src={image} />)}
                </WorkAboutImages>
            </WorkAboutImageContainer>
        </WorkAboutContainer>
    )
}

export default WorkAbout;