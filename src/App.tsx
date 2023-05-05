import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import { GlobalContainer, MainContainer, MonitorFrame } from "./styles/Style.styled";
import OverlayGreenRadialGradient from "./components/OverlayGreenRadialGradient/OGRG";
import BottomUI from "./layout/BottomUI";
import TopStatsBar from "./layout/TopStatsBar";
import WorkPage from "./layout/WorkPage/WorkPage";
import HomePage from "./layout/HomePage/HomePage";
import ContactPage from "./layout/ContactPage/ContactPage";
import LinesOverlayEffect from "./components/LinesOverlayEffect/LinesOverlayEffect";
import FadeOverlayEffect from "./components/FadeOverlayEffect/FadeOverlayEffect";
import assImage from "./img/ass.png";
import ToggleOverlayEffect from "./components/ToggleOverlayEffect/ToggleOverlayEffect";

const theme = {
    maxWidth:"1440px",
    maxHeight:"1024px",
    mainColor:"#17FF42",
    dimmColor:"#256832",
}

function App(){
    const [page,setPage] = useState("HOME");
    const [toggleScreen, setToggleScreen] = useState(false);
    
    return(
        <GlobalContainer>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MonitorFrame alt="monitor frame" src={assImage}/>
                <ToggleOverlayEffect toggle={toggleScreen} setToggle={() => setToggleScreen(prev => !prev)} />
                <MainContainer toggle={toggleScreen}>
                    <LinesOverlayEffect />
                    <FadeOverlayEffect />
                    <OverlayGreenRadialGradient />
                    <TopStatsBar />

                    <HomePage toggle={page === "HOME"} />
                    <WorkPage toggle={page === "WORK"} />
                    <ContactPage toggle={page === "CONTACT"} />

                    <BottomUI setPage={setPage} page={page} />
                </MainContainer>
            </ThemeProvider>
        </GlobalContainer>
    )
}

export default App;