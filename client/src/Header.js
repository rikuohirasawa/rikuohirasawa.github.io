import styled from "styled-components"
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export const Header = () => {
    return (
        <Wrapper>
            <div>Rikuo H</div>
            <NavContainer>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
                <a className='external-link' href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub/></a>
                <a className='external-link' href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'><AiOutlineLinkedin/></a>
            </NavContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
    `

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    .external-link {
        color: inherit;
        font-size: 1.4rem;
        transition: all .1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.2)
        }
    }
    `

