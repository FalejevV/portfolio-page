import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import HomePage from "./layout/HomePage";
import { MainContainer } from "./styles/Style.styled";
import OverlayGreenRadialGradient from "./components/OverlayGreenRadialGradient/OGRG";
import BottomUI from "./layout/BottomUI";
import TopStatsBar from "./layout/TopStatsBar";
import WorkPage from "./layout/WorkPage";
import ContactPage from "./layout/ContactPage";

const theme = {
    maxWidth:"1440px",
    maxHeight:"1024px",
    mainColor:"#17FF42",
    dimmColor:"#17ff417e",
}

function App(){

    const [page,setPage] = useState("HOME");

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer>
                <OverlayGreenRadialGradient />
                <TopStatsBar />

                <HomePage toggle={page === "HOME"} />
                <WorkPage toggle={page === "WORK"} />
                <ContactPage toggle={page === "CONTACT"} />

                <BottomUI setPage={setPage} page={page} />
            </MainContainer>
        </ThemeProvider>
    )
}

export default App;