import styled, { css } from "styled-components";
import UIBorderStat from "../components/UIBorderStat/UIBorderStat";
import { useEffect, useState } from "react";

const TopStatsBarContainer = styled.header`
    display: flex;
    gap:20px;
    width:100%;
    height:fit-content;
    z-index: 4;
    padding-top:35px;

    @media(max-width:500px){
        margin-top:-20px;
        height: 90px;
    }
`

export const LangContainer = styled.div<{
    doDisplay?:boolean,
}>`
    display:flex;
    gap:20px;

    @media(max-width:940px){
        justify-content: flex-end;

        display:none;

        ${({ doDisplay }) => doDisplay && css`
            display:flex;
        `}
    }
`

export const StatsWindow = styled.div`
    display:flex;
    flex:1 auto;
    gap:20px;
    justify-content: space-between;

    @media(max-width:940px){
        justify-content: flex-end;
    }
`


function TopStatsBar(){
    const [displayTimer,setDisplayTimer] = useState(3);
    const [displayToggle,setDisplayToggle] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 940){
            if(!displayToggle){
                setDisplayToggle(true);
            }
        }


        let timer = setInterval(() => {
            setDisplayTimer(prev => {
                if(prev < 3){
                    return prev + 1;
                }
                return 0;
            })
        },3000);
        

        
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 940){
                if(!displayToggle){
                    setDisplayToggle(true);
                }
            }else{
                if(displayToggle){
                    setDisplayToggle(false);
                }
            }
        })

        return () => {
            clearInterval(timer);

            window.removeEventListener('resize', () => {
                if(window.innerWidth <= 940){
                    if(!displayToggle){
                        setDisplayToggle(true);
                    }
                }else{
                    if(displayToggle){
                        setDisplayToggle(false);
                    }
                }
            })
        }
    },[displayToggle]);

    return(
        <TopStatsBarContainer>
            <UIBorderStat leftCorner leftTitleLineWidth="40%" title="USER" value="Vladimir Falejev" />
            <StatsWindow>
                <LangContainer doDisplay={displayTimer >= 0 && displayTimer <= 2 && displayToggle}>
                    <UIBorderStat displayToggle={displayToggle} doDisplay={displayTimer === 0 && displayToggle} leftTitleLineWidth="100%" title="ENG" value="65%" />
                    <UIBorderStat displayToggle={displayToggle} doDisplay={displayTimer === 1 && displayToggle} leftTitleLineWidth="100%" title="RU" value="100%" />
                    <UIBorderStat displayToggle={displayToggle} doDisplay={displayTimer === 2 && displayToggle} leftTitleLineWidth="100%" title="LT" value="65%" />
                </LangContainer>
                <UIBorderStat displayToggle={displayToggle} doDisplay={displayTimer === 3} rightCorner leftTitleLineWidth="160%" title="LOCATION" value="Lithuania" />
            </StatsWindow>
        </TopStatsBarContainer>
    )
}

export default TopStatsBar;