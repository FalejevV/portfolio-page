import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import LinkHolder from "./components/LinkHolder/LinkHolder";
import ScreenFrame from "./layout/ScreenFrame";


function App(){

    const [page,setPage] = useState("first");

    return(
        <>
            <GlobalStyle />
            <LinkHolder setPage={setPage} />
            <ScreenFrame page={page} />
        </>
    )
}

export default App;