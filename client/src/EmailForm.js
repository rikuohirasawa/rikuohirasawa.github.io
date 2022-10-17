import styled from "styled-components"
import emailjs from 'emailjs-com'
import { Snackbar, Alert } from '@mui/material'
import { useState, useRef } from "react";


export const EmailForm = () => {
    // emailjs variables
    const REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [inputFocus, setInputFocus] = useState(false);


    // send form to emailJS on submit (form content specified in e.target)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_PUBLIC_KEY)
        .then(res=>{
            console.log(res)
            e.target.reset();
            setEmailSuccess(true);
        }).catch(err=>{
            console.log(err)
            setEmailError(true);
        })
    }
    return (
        <>
        <Form onSubmit={(e)=>{handleSubmit(e)}}>
            <InputGrid>
                <div>
                <Label htmlFor='name' inputFocus={inputFocus}>Name <span className="align-right" >(required)</span></Label>
                <Input name='name' id='name' type='text' required onFocus={()=>{
                    setInputFocus(true)
                    console.log(inputFocus)
                }}/>
                </div>
                <div>
                <Label htmlFor='email' inputFocus={inputFocus}>Email <span className="align-right" >(required)</span></Label>
                <Input name='email' id='email' type='email' required
                    onFocus={()=>{
                        setInputFocus(true)
                    }}/>
                </div>
                {/* </div>
                <Label htmlFor='subject'>Subject</Label>
                <Input name='subject' id='subject' type='text'/>
                <div> */}
                <div className="grid-span-2">
                <Label htmlFor='message' inputFocus={inputFocus}>Message <span className="align-right">(required)</span></Label>
                <Message name='message' id='message' required style={{width: '100%'}} onFocus={()=>{
                    setInputFocus(true)}}/>
                </div>
            </InputGrid>
            <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
        <Snackbar 
        open={emailSuccess} 
        autoHideDuration={4000} 
        sx={{width: '35%'}}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        onClose={()=>{setEmailSuccess(false)}}>
            <Alert severity="success"
            autoHideDuration={2000} 
            sx={{width: '100%'}}
            >Email Sent</Alert>
        </Snackbar>
        <Snackbar 
        open={emailError} 
        autoHideDuration={4000} 
        sx={{width: '35%'}}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        onClose={()=>{setEmailError(false)}}>
            <Alert severity="error"
            autoHideDuration={6000} 
            sx={{width: '100%'}}
            >Error sending email - please try again or email me directly at rikuoh84@gmail.com</Alert>
        </Snackbar>
        </>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    color: var(--soft-white-color);
    `

const InputGrid = styled.div`
    display: grid;
    gap: 40px;
    width: 100%;

    .grid-span-2 {
        grid-column: span 2
    }
    `



const Input = styled.input`
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    width: 100%;
    background: inherit;
    border: none;
    border-bottom: 1px solid var(--soft-white-color);
    outline: none;
`

const Label = styled.label`


    position: absolute;
    transition: all 0.1s ease-in-out;
    transform: ${props=>props.inputFocus === true ? 'translateY(-120%)' : 'translateY(-10%)'};
    color: ${props=>props.inputFocus ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)'};
    .align-right {

    }`

const Message = styled.textarea`
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    resize: none;
    height: 100px;
    border: none;
    border-bottom: 1px solid #fff;
    background: inherit;
    outline: none;`

const SubmitBtn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid var(--soft-white-color);
    color: var(--soft-white-color);
    cursor: pointer;
    padding: 6px 15px;
    margin-top: 6px;
    width: 200px;
    font-size: inherit;
    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.01);
        }`