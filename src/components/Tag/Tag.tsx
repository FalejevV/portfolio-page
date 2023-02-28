import { TagText } from "./Tag.styled";


function Tag(props:{
    title:string
}){
    return(
        <TagText>{props.title}</TagText>
    )
}

export default Tag;