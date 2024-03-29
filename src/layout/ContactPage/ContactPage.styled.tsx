import styled from "styled-components";

export const ContactContainer = styled.form`
    width:calc(100vw - 55px);
    max-width:400px;
    height:100%;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:50px;

    @media(max-width:420px){
        padding:20px 10px;
    }
`

export const SubmitButton = styled.button`
    padding:15px 30px;
    font-size:25px;
    color:${({ theme }) => theme.mainColor || 'red'};
    background-color: transparent;

    cursor: url(${({ theme }) => theme.cursorPointer}), pointer;
    position: relative;
    transition: all 0.1s;

    &:after{
        transition: all 0.04s;
        content: '';
        position: absolute;
        left:0px;
        bottom:0px;
        width:100%;
        height:0px;
        background-color:${({ theme }) => theme.mainColor || 'red'};
        z-index: -1;
    }

    &:hover{
        color:black;

        &:after{
            height:100%;
        }
    }

    &:disabled{
        background-color: ${({ theme }) => theme.dimmColor || 'red'};
        color:black;

        &:hover{
            &:after{
                height:0px;
            }
        }
    }
`

export const MailStatus = styled.p`
    position: absolute;
    width:calc(100% + 35px);
    height: calc(100% + 35px);
    left:-25px;
    top:-25px;
    background-color: ${({ theme }) => theme.dimmColor || "red"};

    color: ${({ theme }) => theme.mainColor || "red"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`

export const ContactListWrap = styled.div`

`