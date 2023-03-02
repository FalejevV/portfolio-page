import { useEffect, useState } from "react";



function useSmallScreenEffect(){
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 940){
            if(!isSmallScreen){
                setIsSmallScreen(true);
            }
        }

        window.addEventListener('resize', () => {
            if(window.innerWidth <= 940){
                if(!isSmallScreen){
                    setIsSmallScreen(true);
                }
            }else{
                if(isSmallScreen){
                    setIsSmallScreen(false);
                }
            }
        })

        return () => {
            window.removeEventListener('resize', () => {
                if(window.innerWidth <= 940){
                    if(!isSmallScreen){
                        setIsSmallScreen(true);
                    }
                }else{
                    if(isSmallScreen){
                        setIsSmallScreen(false);
                    }
                }
            })
        }

    },[isSmallScreen]);


    return [isSmallScreen];
}


export default useSmallScreenEffect;