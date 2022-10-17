import styled from "styled-components"
import { useState, useContext, useEffect } from "react"
import { BsFillCircleFill } from 'react-icons/bs'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import Resume from './downloads/rikuo-hirasawa-resume.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

import { PageContext } from "./PageContext"


export const Sidebar = ({navRef}) => {
    const {dispatch, menuOpen} = useContext(PageContext);

    const clickNav = (type) => {
        dispatch({type: 'menu-toggle'});
        navRef.current[type].scrollIntoView({behavior: 'smooth'})
    };


    // prevent page scrolling when sidebar opens
    const htmlNode = document.querySelector('html');
    const htmlStyle = htmlNode.style;
    // change body overflow to visible to allow position sticky to be used on header
    const bodyNode = document.querySelector('body');
    useEffect(()=>{
        if (menuOpen) {
            htmlStyle.overflowY = 'hidden'
        } else {
            htmlStyle.overflowY = 'visible'
            bodyNode.style.overflow = 'clip'
        }
    }, [menuOpen])
   
    return (
        <Wrapper open={menuOpen}>
            <NavContainer>
                <NavLink onClick={()=>{clickNav('about')}}>About</NavLink>
                <NavLink onClick={()=>{clickNav('projects')}}>Projects</NavLink>
                <NavLink onClick={()=>{clickNav('skills')}}>Skills</NavLink>
                <NavLink onClick={()=>{clickNav('contact')}}> Contact</NavLink>
                <NavLink className="external-link" href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'>LinkedIn</NavLink>
                <NavLink className="external-link" href='https://github.com/rikuohirasawa' target='_blank'>Github</NavLink>
                <NavLink className='download-link' href={Resume} download><AiOutlineDownload/> Resume</NavLink>
            </NavContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    transform: translateX(${props=>props.open ? 0 : 100}vw);
    background: var(--bg-color);
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    position: fixed;
    height: 100vh;
    width: 40vw;
    top: 0px;
    bottom: 0px;
    right: 0px;
    box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
    z-index: 10;
    transition: all .5s ease-in-out;
    margin: 0;


    div {
        font-size: 1.1rem;
    }
`

const NavContainer = styled.div`
margin: 0;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .external-link {
            &:hover,
            &:focus {
                text-decoration: underline;

            }
        }

    .download-link {
        align-items: center;
        gap: 8px;
        &:hover,
        &:focus {
                text-decoration: underline;
            }
    }
    `

const NavLink = styled.a`
    font-size: 30px;
    color: inherit;
    text-decoration: none;
    display: flex;
    cursor: pointer;
    transition: all .1s ease-in-out;
    margin: 8px;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }

    @media screen and (min-width: 800px) {  
        font-size: 40px;
    }
  `

//     const style = {
//         buttonHide: {
//             width: '55px',
//             marginLeft: 'auto'
//         },
//         buttonShow: {
//             width: '100%'
//         },
//         showSidebar: {
//             width: '200px',
//             paddingLeft: '18px',
//             zIndex: '999999999'
//         },
//         hideSidebar: {
//             width: '60px'
//         },
//     }
//     return (
//         <Wrapper
//         style={sidebarDisplay ? style.showSidebar : style.hideSidebar}>  

//             {sidebarDisplay && 
//             <NavContainer>
//                 <NavLink onClick={()=>{clickNav('about')}}>About</NavLink>
//                 <NavLink onClick={()=>{clickNav('projects')}}>Projects</NavLink>
//                 <NavLink onClick={()=>{clickNav('skills')}}>Skills</NavLink>
//                 <NavLink onClick={()=>{clickNav('contact')}}> Contact</NavLink>
//                 <NavLink className="external-link" href='https://www.linkedin.com/in/rikuo-hirasawa-5085b9229/' target='_blank'>LinkedIn</NavLink>
//                 <NavLink className="external-link" href='https://github.com/rikuohirasawa' target='_blank'>Github</NavLink>
//             </NavContainer>
//             }
//         <SidebarToggle 
//         style={sidebarDisplay ? style.buttonHide : style.buttonShow}
//         onClick={()=>{
//             setSidebarDisplay(!sidebarDisplay)
//         }}>    
//             {sidebarDisplay ?
//             <>
//             <IoIosArrowBack/>
//             <IoIosArrowBack/>
//             </>
//             : 
//             <>
//             <IoIosArrowForward/>
//             <IoIosArrowForward/>
//             </>
//             }
//         </SidebarToggle>
//         </Wrapper>
//     )
// }

// const Wrapper = styled.div`
//     display: none;
//     position: fixed;
//     top: 0;
//     background: #fff;

//     justify-content: space-evenly;
//     align-items: center;
//     outline: 1px solid rgba(0, 0, 0, 0.1);
//     height: 100vh;
//     transition: all 0.3s ease-in-out;
//     width: 0;

//     @media screen and (min-width: 800px) {
//         display: flex;
//     }


// `

// const NavContainer = styled.div`
//     transition: all 0.5s ease-in-out;
//     display: flex;
//     flex-direction: column;

//     .external-link {
//             &:hover,
//             &:focus {
//                 text-decoration: underline;

//             }
//         }
//     `

// const NavLink = styled.a`
//     margin: 8px;
//     color: inherit;
//     text-decoration: none;
//     display: flex;
//     cursor: pointer;
//     transition: all .1s ease-in-out;
//         &:hover,
//         &:focus {
//             transform: scale(1.05)
//         }


//   `

// const SidebarToggle = styled.div`
//     transition: all 0.5s ease-in-out;

//     font-size: 1rem;
//     cursor: pointer;
//     background: inherit;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-left: 1px solid rgba(0, 0, 0, 0.1);
// `