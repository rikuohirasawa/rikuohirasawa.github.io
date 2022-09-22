import styled from "styled-components"
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export const Header = ({navRef}) => {
    const navPage = (type) => {
        navRef.current[type].scrollIntoView({behavior: 'smooth'});
    };
    return (
        <Wrapper>
            <div className="flex-wrapper">
            <div>Rikuo H</div>
            <NavContainer>
                <a className='nav-page'onClick={()=>{navPage('about')}}>About</a>
                <a className='nav-page'onClick={()=>{navPage('projects')}}>Projects</a>
                <a className='nav-page'onClick={()=>{navPage('contact')}}>Contact</a>
                <a className='external-link' href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub/></a>
                <a className='external-link' href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'><AiOutlineLinkedin/></a>
            </NavContainer>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: calc(100% - 35px);
    margin: 0 auto;
    .flex-wrapper {
        display: flex;
        padding: 35px;
        align-items: center;
        justify-content: space-between;
        width: 94%;
        margin-left: auto;
    }
    `

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    margin-left: auto;

    .nav-page {
        cursor: pointer;
        transition: all .1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05)
        }
    }

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

