import { nanoid } from "nanoid";
import { IProject } from "../../projects";

import { LinkContainer, WorkAboutContainer, WorkAboutImage, WorkAboutImageContainer, WorkAboutImages, WorkAboutText, WorkAboutTitle, WorkAboutTitleContainer, ZoomedImage, ZoomedImageContainer } from "./WorkAbout.styled";
import { Link } from "../../styles/Style.styled";
import { useState } from "react";



function WorkAbout(props:{
    data:IProject
}){
    const [zoomedImage,setZoomedImage] = useState("");
    
    return(
        <WorkAboutContainer>
            {zoomedImage.trim() !== "" &&
            <ZoomedImageContainer onClick={() => setZoomedImage("")}>
                <ZoomedImage src={zoomedImage} />
            </ZoomedImageContainer>
            }
            
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
                        {props.data.images.map((image:string,index:number) => <WorkAboutImage onClick={() => setZoomedImage(image)} key={nanoid()} alt="Project image" src={image} />)}
                    </WorkAboutImages>
                </WorkAboutImageContainer>
        </WorkAboutContainer>
    )
}

export default WorkAbout;