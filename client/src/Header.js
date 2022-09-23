import styled from "styled-components"
import { useState } from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMenu } from 'react-icons/ai'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

export const Header = ({navRef}) => {
    const navPage = (type) => {
        navRef.current[type].scrollIntoView({behavior: 'smooth'});
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', event => {
        setWindowWidth(event.currentTarget.innerWidth)
    })

    const [dropDisplay, setDropDisplay] = useState(false);

    return (
        <>
        {windowWidth > 800 ? 
        
        <Wrapper>
            <div className="flex-wrapper">
            <div className="logo">Rikuo H</div>
            <NavContainer>
                <a className='nav-page'onClick={()=>{navPage('about')}}>About</a>
                <a className='nav-page'onClick={()=>{navPage('projects')}}>Projects</a>
                <a className='nav-page'onClick={()=>{navPage('contact')}}>Contact</a>
                <a className='external-link' href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub/></a>
                <a className='external-link' href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'><AiOutlineLinkedin/></a>
            </NavContainer>
            </div>
        </Wrapper>
        : 
        <Dropdown
        style={dropDisplay ? {height: '150px', transition: 'all 0.2s ease-in-out'} : {height: '40px', transition: 'all 0.5s ease-in-out'}}>
            <div className="dropdown-title" styles={!dropDisplay && {height: '100%'}} onClick={()=>{setDropDisplay(!dropDisplay)}}>Rikuo H {dropDisplay ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
            <DropdownContent style={dropDisplay ? {opacity: '1', visibility: 'visible', transition: 'all 0.5s ease-in-out'} : {opacity: '0', visibility: 'hidden', transition: 'all 0.2s ease-in-out'}}>
                <a className='nav-page'onClick={()=>{navPage('about')}}>About</a>
                <a className='nav-page'onClick={()=>{navPage('projects')}}>Projects</a>
                <a className='nav-page'onClick={()=>{navPage('skills')}}>Skills</a>
                <a className='nav-page'onClick={()=>{navPage('contact')}}>Contact</a>
                <div className="link-container">
                    <a className='external-link' href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub/></a>
                    <a className='external-link' href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'><AiOutlineLinkedin/></a>
                </div>
            </DropdownContent>
        </Dropdown>}
        </>
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

    .logo {
        margin-left: 20px;
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


const Dropdown = styled.div`
    width: 100%;
    position: absolute;
    z-index: 9999999999999999999;
    background: #fff;
    height: 110px;
    text-align: center;
    padding: 8px 0 0 0;
    transition: all 0.5s ease-in-out;
    .dropdown-title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        font-size: 1.25rem;
        cursor: pointer;

    }
`

const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: all 1s linear;
    align-items: center;
    padding: 8px 0;

    .link-container {
        display: flex;
        gap: 8px;
    }

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
    }`

