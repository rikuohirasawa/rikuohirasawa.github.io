
import styled from "styled-components"
import Portrait from './imgs/portrait.jpg'
import { useState } from "react"
export const About = ({navRef}) => {
    const [toggleDetails, setToggleDetails] = useState(false);

    return (
        <>

        <Wrapper
        ref={el=>navRef.current={...navRef.current, about: el}}>
            <ContainerViewPrimary toggleDetails={toggleDetails}>
                <TextContainer>
                <div>
                    Specialized in creating seamless applications, both client-facing and behind the scenes.
                </div>
                </TextContainer>
                <LearnMoreBtn onClick={()=>{setToggleDetails(true)}}>Learn more...</LearnMoreBtn>
            </ContainerViewPrimary>
            <ContainerViewSecondary toggleDetails={toggleDetails}>
                <DetailsContainer>
                    <div className="grid-col">
                        <div className="grid-title">Who</div>
                        <div>Hi, I'm Rikuo and I'm a developer seeking opportunities to work on exciting new projects. 
                            I recently graduated from the Full-Stack Development program at Concordia University, and am now 
                            looking to continue my learning in a professional environment.
                        </div>
                    </div>
                </DetailsContainer>
                <DetailsContainer>
                    <div className="grid-col">
                        <div className="grid-title">What</div>
                        <div>
                            My work focuses primarily on full-stack web development. I've created a number of applications 
                            using the MERN Stack, which I welcome you to have a look at below! More importantly however, I am
                            working to learn new concepts and technologies to continue my growth as a developer.
                        </div>
                    </div>
                </DetailsContainer>
                <DetailsContainer>
                    <div className="grid-col">
                        <div className="grid-title">Where</div>  
                        <div>Currently based out of St. John's, NL - I recommend you visit only in the summer if you can help it.</div>              
                    </div>
                </DetailsContainer>
                <DetailsContainer>
                    <div className="grid-col">
                        <div className="grid-title">Why</div>
                        <div>
                            Being able to be connected with my work is very important to me. In programming I get to see the tangible results of
                            my efforts, even on the backend where things are less obvious - also coding is fun! You know, for the most part.
                        </div>
                    </div>
                </DetailsContainer>
            </ContainerViewSecondary>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    
    background: var(--dark-bg-color);
    max-width: 100vw;
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    margin: 0;
    padding: 0 24px;

    @media only screen and (min-width: 1000px) {
        padding: 0 48px;
    }

    @media only screen and (min-width: 1400px) {
        padding: 0 70px;
    }

    @media only screen and (min-width: 1600px) {
        padding: 0 200px;
    }

`

const DetailsContainer = styled.div`
    justify-self: center;
    font-weight: 700;
    line-height: 1.6;

    @media only screen and (min-width: 1000px) {
        font-size: 20px;
    }

    .grid-title {
        font-size: 30px;
        font-weight: 700;
        
        @media only screen and (min-width: 400px) {
            font-size: 42px;
    }
        @media only screen and (min-width: 1000px) {
            font-size: 60px;
    }
    }
`

const ContainerViewPrimary = styled.div`
    font-weight: 700;
    font-size: 40px;
    visibility: ${props=>props.toggleDetails === true ? 'hidden' : 'visible'};
    opacity: ${props=>props.toggleDetails === true ? '0' : '1'};
    transition: all 0.4s linear;


    @media only screen and (min-width: 600px) {
        font-size: 50px;

    }

    @media only screen and (min-width: 1000px) {
        font-size: 65px;

    }

    @media only screen and (min-width: 1400px) {
        font-size: 88px;
    }
    
    `

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;


    @media only screen and (min-width: 1000px) {
        width: 80%;
    }
`
const ContainerViewSecondary = styled.div`
    position: absolute;
    
    visibility: ${props=>props.toggleDetails === true ? 'visible' : 'hidden'};
    opacity: ${props=>props.toggleDetails === true ? '1' : '0'};
    transition: all 0.4s linear;
    transition-delay: 400ms;

    @media only screen and (min-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(2, 600px);
    gap: 50px;
    justify-content: center;
    }
    
`

const LearnMoreBtn = styled.button`
    width: 150px;
    height: 30px;
    font-family: inherit;
    background: inherit;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }

    @media only screen and (min-width: 600px) {
        font-size: 20px;
        width: 200px;
        height: 40px;
    }
    `



