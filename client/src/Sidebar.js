import styled from "styled-components"
import { useState } from "react"
import { BsFillCircleFill } from 'react-icons/bs'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export const Sidebar = ({navRef}) => {

    const [sidebarDisplay, setSidebarDisplay] = useState(false);

    const clickNav = (type) => {
        setSidebarDisplay(false);
        navRef.current[type].scrollIntoView({behavior: 'smooth'})
    }

    const style = {
        buttonHide: {
            width: '55px',
            marginLeft: 'auto'
        },
        buttonShow: {
            width: '100%'
        },
        showSidebar: {
            width: '200px',
            paddingLeft: '18px',
            zIndex: '999999999'
        },
        hideSidebar: {
            width: '60px'
        },
    }
    return (
        <Wrapper
        style={sidebarDisplay ? style.showSidebar : style.hideSidebar}>  

            {sidebarDisplay && 
            <NavContainer>
                <NavLink onClick={()=>{clickNav('about')}}>About</NavLink>
                <NavLink onClick={()=>{clickNav('projects')}}>Projects</NavLink>
                <NavLink onClick={()=>{clickNav('skills')}}>Skills</NavLink>
                <NavLink onClick={()=>{clickNav('contact')}}> Contact</NavLink>
                <NavLink className="external-link" href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'>LinkedIn</NavLink>
                <NavLink className="external-link" href='https://github.com/rikuohirasawa' target='_blank'>Github</NavLink>
            </NavContainer>
            }
        <SidebarToggle 
        style={sidebarDisplay ? style.buttonHide : style.buttonShow}
        onClick={()=>{
            setSidebarDisplay(!sidebarDisplay)
        }}>    
            {sidebarDisplay ?
            <>
            <IoIosArrowBack/>
            <IoIosArrowBack/>
            </>
            : 
            <>
            <IoIosArrowForward/>
            <IoIosArrowForward/>
            </>
            }
        </SidebarToggle>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    background: #fff;

    justify-content: space-evenly;
    align-items: center;
    outline: 1px solid rgba(0, 0, 0, 0.1);
    height: 100vh;
    transition: all 0.3s ease-in-out;
    width: 0;

    @media screen and (min-width: 800px) {
        display: flex;
    }


`

const NavContainer = styled.div`
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;

    .external-link {
            &:hover,
            &:focus {
                text-decoration: underline;

            }
        }
    `

const NavLink = styled.a`
    margin: 8px;
    color: inherit;
    text-decoration: none;
    display: flex;
    cursor: pointer;
    transition: all .1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05)
        }


  `

const SidebarToggle = styled.div`
    transition: all 0.5s ease-in-out;

    font-size: 1rem;
    cursor: pointer;
    background: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
`