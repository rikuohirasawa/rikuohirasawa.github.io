import styled from "styled-components"
import emailjs from 'emailjs-com'
import { Snackbar } from '@mui/material'
import { useState } from "react";


export const EmailForm = () => {
    const REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    const [emailSuccess, setEmailSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_PUBLIC_KEY)
        .then(res=>{
            console.log(res)
            e.target.reset();
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
        <Form onSubmit={(e)=>{handleSubmit(e)}}>
            <Label htmlFor='name'>Name <span className="accent-text align-right">(required)</span></Label>
            <Input name='name' id='name' type='text'/>
            <Label htmlFor='email'>Email <span className="accent-text align-right">(required)</span></Label>
            <Input name='email' id='email' type='email' placeholder='Email'/>
            <Label htmlFor='subject'>Subject</Label>
            <Input name='subject' id='subject' type='text'/>
            <Label htmlFor='message'>Message  <span className="accent-text align-right">(required)</span></Label>
            <Message name='message' id='message'/>
            <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
        </>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 280px;
    `

const Label = styled.label`
    .align-right {
        float: right;
    }`

const Input = styled.input`
    font-family: inherit;
    font-size: inherit;`

const Message = styled.textarea`
    font-family: inherit;
    font-size: inherit;
    resize: none;
    height: 100px;`

const SubmitBtn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid black;
    cursor: pointer;
    padding: 6px 15px;
    font-size: inherit;
    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.01);
        }`