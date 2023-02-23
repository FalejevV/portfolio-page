import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import HomePage from "./layout/HomePage";
import { MainContainer } from "./styles/Style.styled";
import OverlayGreenRadialGradient from "./components/OverlayGreenRadialGradient/OGRG";

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
                <HomePage toggle={page === "HOME"} />
            </MainContainer>
        </ThemeProvider>
    )
}

export default App;