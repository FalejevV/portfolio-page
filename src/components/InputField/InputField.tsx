import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { InputContainer, InputCursor, InputFieldLabel, InputPlaceholder, InputTextField } from "./InputField.styled";
import useSmallScreenEffect from "../../hooks/useSmallScreenEffect";



function InputField(props:{
    title:string,
    name:string,
}){

    const [value,setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [smallScreen] = useSmallScreenEffect();
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        if(navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")){
            setIsPhone(true);
        }else{
            setIsPhone(false);
        }
    },[]);

    function changeValue(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let value = target.value;
        setValue(value);
    }

    function selectorPosition(e:SyntheticEvent<HTMLInputElement, Event>){
        if(isPhone || smallScreen){
            return;
        }
        let target = e.target as HTMLInputElement;
        target.setSelectionRange(target.value.length,target.value.length);
    }
    return(
        <InputContainer>
            <InputTextField mobile={smallScreen || isPhone} onSelect={(e) => selectorPosition(e)} symbolCount={value.length} onBlur={() => setIsFocused(false)} onFocus={(e) => {setIsFocused(true); selectorPosition(e)}} id={props.name} value={value} onChange={(e) => changeValue(e)} type="text" />
            <InputPlaceholder toggle={value.trim() !== "" || isFocused}>{props.title}</InputPlaceholder>
            <InputCursor mobile={smallScreen || isPhone} focused={isFocused}></InputCursor>
            <InputFieldLabel htmlFor={props.name}></InputFieldLabel>
        </InputContainer>
    )
}

export default InputField;