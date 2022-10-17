import styled from "styled-components"
import { useState, useContext } from "react"
import { Sidebar } from "./Sidebar"
import { PageContext } from "./PageContext"

export const Header = ({navRef}) => {
    const {dispatch, menuOpen} = useContext(PageContext);

    const toggleMenu = () => {
        dispatch({type: 'menu-toggle'})
    }
    
    const navPage = (type) => {
        navRef.current[type].scrollIntoView({behavior: 'smooth'});
    };

    return (
            <Wrapper className="container-padding">
                <DisplayContainer>
                    <div onClick={()=>{
                        navPage('introduction')
                    }}
                    style={{cursor: 'pointer'}}>RH</div>
                    <MenuBtn onClick={()=>{toggleMenu()}} open={menuOpen}>
                        <MenuIcon open={menuOpen}></MenuIcon>
                    </MenuBtn>
                </DisplayContainer>
                <Sidebar navRef={navRef} menuOpen={menuOpen}/>
            </Wrapper>
            )
}

const Wrapper = styled.div`
    max-width: 100vw;
    background: var(--bg-color);
    z-index: 20;
    color: black;
    position: sticky;
    top: 0;
`
const DisplayContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem; 
`

const MenuBtn = styled.div`
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    transition: all .5s ease-in-out;
    cursor: pointer;
    z-index: 99;
`

const MenuIcon = styled.div`    
    width: 30px;
    height: 2px;
    background: ${props=>props.open === true ? 'transparent': 'black'};
    transform: ${props=>props.open === true && 'transform: translateX(-50px)'};
    transition: all .5s ease-in-out;   
    &:before,
    &:after {
        width: 30px;
        content: '';
        position: absolute;
        height: 2px;
        background: black;
        transition: all .5s ease-in-out;
    }  
    &:before {
        transform: ${props=>props.open === true ? 'rotate(45deg) translate(0px, 0px)' : 'translateY(-10px)'}
    }    
    &:after {
        transform: ${props=>props.open === true ? 'rotate(-45deg) translate(0px, 0px)' : 'translateY(10px)'}
    }`


