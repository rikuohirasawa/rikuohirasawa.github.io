import styled from "styled-components"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

import { EmailForm } from "./EmailForm"
export const Contact = () => {
    return (
        <>
        <div className="section-title">Contact</div>
        <Wrapper>
        <EmailForm/>
            <Container>

                <div className="align-items"><AiOutlineMail/>rikuoh84@gmail.com</div>
                <div className="align-items"><AiOutlinePhone/>(709)-730-5377</div>
                <NavContainer>
                <a className='external-link' href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub/></a>
                <a className='external-link' href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'><AiOutlineLinkedin/></a>
                </NavContainer>
            </Container>

        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    padding: 35px;
    display: flex;
    justify-content: center;
    gap: 80px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .align-items {
        display: flex;
        align-items: center;
        gap: 8px;
    }

`

const NavContainer = styled.div`
    display: flex;
    gap: 8px;


    .external-link {
    color: inherit;
    font-size: 1.8rem;
    transition: all .1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.2)
        }
}`