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
import monitorImage from "./img/monitor.png";
import ToggleOverlayEffect from "./components/ToggleOverlayEffect/ToggleOverlayEffect";




const themeMainColors = [
    "#11b12e",
    "#2aaed6",
    "#cc9133"
]

const themeDimmColors = [
    "#256832",
    "#1a6a83",
    "#ad7c2c"
]

const themeBackgroundColors = [
    "radial-gradient(circle, rgba(3,48,13,1) 0%, rgba(0,17,4,1) 100%)",
    "radial-gradient(circle, #021e27 0%, #021f27 100%)",
    "radial-gradient(circle, #493310 0%, #201401 100%)"
]

const hueRotation = [
    "100deg",
    "150deg",
    "10deg"
]

const knobRotation = [
    "0deg",
    "45deg",
    "90deg"
]

const cursors = [
    {
        default:"/cursor/CursorDefault.png",
        pointer:"/cursor/PointerCursor.png",
        text:"/cursor/TextCursor.png"
    },
    {
        default:"/cursor/CursorDefaultBlue.png",
        pointer:"/cursor/PointerCursorBlue.png",
        text:"/cursor/TextCursorBlue.png"
    },
    {
        default:"/cursor/CursorDefaultYellow.png",
        pointer:"/cursor/PointerCursorYellow.png",
        text:"/cursor/TextCursorYellow.png"
    }
]

function App() {
    const [page, setPage] = useState("HOME");
    const [toggleScreen, setToggleScreen] = useState(false);
    const [themeId, setThemeId] = useState<number>(0);


    const theme = {
        maxWidth: "1440px",
        maxHeight: "1024px",
        mainColor: themeMainColors[themeId],
        dimmColor: themeDimmColors[themeId],
        backgroundColor: themeBackgroundColors[themeId],
        hueRotate: hueRotation[themeId],
        knobRotation: knobRotation[themeId],
        cursorDefault: cursors[themeId].default,
        cursorPointer: cursors[themeId].pointer,
        cursorText: cursors[themeId].text
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalContainer>

                <GlobalStyle />
                <MonitorFrame alt="monitor frame" src={monitorImage} />
                <ToggleOverlayEffect toggle={toggleScreen} setToggle={() => setToggleScreen(prev => !prev)} setThemeId={setThemeId} themeId={themeId} />
                <MainContainer toggle={toggleScreen}>
                    <OverlayGreenRadialGradient />
                    <TopStatsBar />

                    {page === "HOME" && <HomePage toggle={true} />}
                    {page === "WORK" && <WorkPage toggle={true} />}
                    {page === "CONTACT" && <ContactPage toggle={true} />}

                    <BottomUI setPage={setPage} page={page} />
                </MainContainer>

            </GlobalContainer>
        </ThemeProvider>
    )
}

export default App;