import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { GlobalContainer } from "./styles/Style.styled";
import LinkHolder from "./components/LinkHolder/LinkHolder";
import PageContainer from "./components/PageContainer/PageContainer";





function App(){

    const [page,setPage] = useState("first");
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        setZoom(true);
        setTimeout(() => {
            let targetPage = document.getElementById(page.toString());
            if(targetPage){
                targetPage.scrollIntoView({behavior: 'smooth'});
            }

            setTimeout(() => {
                setZoom(false);
            },500);
        },1000);
    },[page]);
    
    return(
        <>
            <GlobalStyle />
            <LinkHolder setPage={setPage} />
            <GlobalContainer zoom={zoom}>
                <PageContainer name="first" bgColor='#0c4f8a'/>
                <PageContainer name="second" bgColor='#8a680c'/>
                <PageContainer name="third" bgColor='#0c8a88'/>
                <PageContainer name="fourth" bgColor='#470c8a'/>
            </GlobalContainer>
        </>
    )
}

export default App;