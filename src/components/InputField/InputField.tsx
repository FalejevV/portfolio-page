import { ChangeEvent, SyntheticEvent, useState } from "react";
import { InputContainer, InputCursor, InputFieldLabel, InputTextField } from "./InputField.styled";



function InputField(props:{
    title:string,
    name:string,
}){

    const [value,setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    function changeValue(e:ChangeEvent){
        let target = e.target as HTMLInputElement;
        let value = target.value;
        setValue(value);
    }

    function selectorPosition(e:SyntheticEvent<HTMLInputElement, Event>){
        let target = e.target as HTMLInputElement;
        target.setSelectionRange(-1,-1);
    }
    return(
        <InputContainer>
            <InputTextField onSelect={(e) => selectorPosition(e)} symbolCount={value.length} onBlur={() => setIsFocused(false)} onFocus={(e) => {setIsFocused(true); selectorPosition(e); setValue("")}} id={props.name} value={value} onChange={(e) => changeValue(e)} type="text" />
            <InputCursor focused={isFocused}></InputCursor>
            <InputFieldLabel htmlFor={props.name}></InputFieldLabel>
        </InputContainer>
    )
}

export default InputField;