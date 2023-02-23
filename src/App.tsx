import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import { ThemeProvider } from "styled-components";
import HomePage from "./layout/HomePage";
import { MainContainer } from "./styles/Style.styled";
import OverlayGreenRadialGradient from "./components/OverlayGreenRadialGradient/OGRG";

const theme = {
    maxWidth:"1440px",
    maxHeight:"1024px"
}

function App(){

    const [page,setPage] = useState("first");

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer>
                <OverlayGreenRadialGradient />
                <HomePage />
            </MainContainer>
        </ThemeProvider>
    )
}

export default App;