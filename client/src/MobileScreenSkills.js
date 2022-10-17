import styled from "styled-components"
import { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation'
import 'swiper/components/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import { AiOutlineHtml5, } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { SiMongodb, SiCss3, SiSwiper, SiRedux, SiMaterialui } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FiGitBranch } from 'react-icons/fi'
import { CgNpm } from 'react-icons/cg'

// skills component for small screens - I was wrestling with media queries for a while - but the combination of grid and swiper
// proved difficult for me to manipulate properly, and so eventually it was easier to just make a new component, as
// the amount of cards in a grid is changing based on screen size


SwiperCore.use([Navigation, Pagination])
export const MobileScreenSkills = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // change windowWidth state when window is resized - saved in state to ensure that the component rerenders
    window.addEventListener('resize', event => {
        setWindowWidth(event.currentTarget.innerWidth)
    })
    const style = {
        logo: {
            width: '24px',
            height: '100%'
        },
        swiperSlide: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
        },
    }
    
    return (
        <Wrapper>
            {windowWidth < 1000 ? 
        <Swiper navigation slidesPerView={1}>
            <SwiperSlide style={style.swiperSlide}>
                <div className='section-title flex-center'>Skills & Tools</div>
            </SwiperSlide>
            <SwiperSlide>
                <SkillContainer onClick={()=>{window.open('https://www.javascript.com/', '_blank')}}>
                    <div className="flex-icon">JavaScript <SiJavascript style={style.logo}/></div>
                    <div className="accent-text">Programming Language</div>
                    <div className="accent-text margin-top">console.log('hello!')</div>
                </SkillContainer>
                <SkillContainer onClick={()=>{window.open('https://reactjs.org/', '_blank')}}>
                    <div className="flex-icon">React.js <GrReactjs style={style.logo}/></div>  
                    <div className="accent-text">JavaScript Library</div>
                    <div className="accent-text margin-top">{`useEffect(()=>{`}<br/>{`setState('welcome')`}<br/>{`})`}</div>
                </SkillContainer>
            </SwiperSlide>
            <SwiperSlide>
                <SkillContainer onClick={()=>{window.open('https://www.mongodb.com/', '_blank')}}>
                    <div className="flex-icon">MongoDB <SiMongodb style={style.logo}/></div>
                    <div className="accent-text">Database</div>
                    <div className="accent-text margin-top">{`await db.collection('to').findOne({my: website})`}</div>
                </SkillContainer>
                <SkillContainer onClick={()=>{window.open('https://nodejs.org/en/', '_blank')}}>
                    <div className="flex-icon">Node.js <FaNodeJs style={style.logo}/></div>
                    <div className="accent-text">JavaScript Environment</div>
                    <div className="accent-text margin-top">{`.get('/thank-you', veryMuch)`}</div>
                </SkillContainer>
            </SwiperSlide>
            <SwiperSlide>
                <SkillContainer onClick={()=>{window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')}}>
                    <div className='flex-icon'>HTML <AiOutlineHtml5 style={style.logo}/></div>
                    <div className="accent-text">Markup Language</div>
                    <div className="accent-text margin-top">{`<div>for visiting!</div>`}</div>
                </SkillContainer>
                <SkillContainer onClick={()=>{window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')}}>
                    <div className="flex-icon">CSS <SiCss3 style={{width: '20px', height: '100%'}}/></div>
                    <div className="accent-text">Style Sheet Language</div>
                    <div className="accent-text margin-top">{`.enjoy-your-stay {`}<br/>display: flex;<br/>{`}`}</div>
                </SkillContainer>
                </SwiperSlide>
                <SwiperSlide>
                <SkillContainer onClick={()=>{window.open('https://mui.com/', '_blank')}}>
                    <div className="flex-icon">Material UI <SiMaterialui style={style.logo}/></div>
                    <div className="accent-text">UI library</div>
                </SkillContainer>
                <SkillContainer onClick={()=>{window.open('https://swiperjs.com/', '_blank')}}>
                    <div className="flex-icon">Swiper.js <SiSwiper style={style.logo}/></div>
                    <div className="accent-text">JavaScript plugin</div>
                </SkillContainer>
                </SwiperSlide>
                <SwiperSlide>
                <SkillContainer onClick={()=>{window.open('https://expressjs.com/', '_blank')}}>
                    <div className="flex-icon">Express.js <SiJavascript style={style.logo}/></div>
                    <div className="accent-text">Web application framework</div>
                </SkillContainer>
                <SkillContainer onClick={()=>{window.open('https://git-scm.com/', '_blank')}}>
                    <div className="flex-icon">Git <FiGitBranch style={style.logo}/></div>
                    <div className="accent-text">Version control</div>
                </SkillContainer>
            </SwiperSlide>
            <SwiperSlide>
            <SkillContainer>
                <div className="flex-icon" onClick={()=>{window.open('https://www.npmjs.com/', '_blank')}}>NPM/Yarn <CgNpm style={style.logo}/></div>
                <div className="accent-text">Package management</div>
            </SkillContainer>
            <SkillContainer onClick={()=>{window.open('https://redux.js.org/', '_blank')}}>
                <div className="flex-icon">Redux <SiRedux style={style.logo}/></div>
                <div className="accent-text">State management</div>
                <div className="accent-text">(Currently learning)</div>
            </SkillContainer>
            </SwiperSlide>
        </Swiper>
        : 
        <Swiper navigation slidesPerView={1}>
            <SwiperSlide style={style.swiperSlide}>
                <div className='section-title flex-center'>Skills & Tools</div>
            </SwiperSlide>
            <SwiperSlide>
                <SkillsGrid>
                    <SkillContainer onClick={()=>{window.open('https://www.javascript.com/', '_blank')}}>
                        <div className="flex-icon">JavaScript <SiJavascript style={style.logo}/></div>
                        <div className="accent-text">Programming Language</div>
                        <div className="accent-text margin-top">console.log('hello!')</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://reactjs.org/', '_blank')}}>
                        <div className="flex-icon">React.js <GrReactjs style={style.logo}/></div>  
                        <div className="accent-text">JavaScript Library</div>
                        <div className="accent-text margin-top">{`useEffect(()=>{`}<br/>{`setState('welcome')`}<br/>{`})`}</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://www.mongodb.com/', '_blank')}}>
                        <div className="flex-icon">MongoDB <SiMongodb style={style.logo}/></div>
                        <div className="accent-text">Database</div>
                        <div className="accent-text margin-top">{`await db.collection('to').findOne({my: website})`}</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://nodejs.org/en/', '_blank')}}>
                        <div className="flex-icon">Node.js <FaNodeJs style={style.logo}/></div>
                        <div className="accent-text">JavaScript Environment</div>
                        <div className="accent-text margin-top">{`.get('/thank-you', veryMuch)`}</div>
                    </SkillContainer>
                </SkillsGrid>
            </SwiperSlide>
            <SwiperSlide>
                <SkillsGrid>
                    <SkillContainer onClick={()=>{window.open('https://mui.com/', '_blank')}}>
                        <div className="flex-icon">Material UI <SiMaterialui style={style.logo}/></div>
                        <div className="accent-text">UI library</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://swiperjs.com/', '_blank')}}>
                        <div className="flex-icon">Swiper.js <SiSwiper style={style.logo}/></div>
                        <div className="accent-text">JavaScript plugin</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://expressjs.com/', '_blank')}}>
                        <div className="flex-icon">Express.js <SiJavascript style={style.logo}/></div>
                        <div className="accent-text">Web application framework</div>
                    </SkillContainer>
                    <SkillContainer onClick={()=>{window.open('https://git-scm.com/', '_blank')}}>
                        <div className="flex-icon">Git <FiGitBranch style={style.logo}/></div>
                        <div className="accent-text">Version control</div>
                    </SkillContainer>
                </SkillsGrid>
        </SwiperSlide>
        </Swiper>
        }
        </Wrapper>
    )
}

const Wrapper = styled.div`

    height: 100vh;
    display: flex;
    align-items: center;

    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;

        @media screen and (min-width: 800px) {  
            width: auto;
}

   
    }

    .swiper-button-prev,
    .swiper-button-next {
    color: inherit;
    z-index: 99;
    opacity: 1;
    transition: 0.5s ease-in-out;
}

    .swiper-button-disabled {
        visibility: hidden;
        opacity: 0;
        transition: 0.5s ease-in-out;
    }

    .swiper-container {
        width: 100%;
    }

    .swiper-slide {
        height: 80%;
        margin: auto 0;
    }
`

const Content = styled.div`
    display: flex;
    height: 85%;
    align-items: center;
    `

const SkillsGrid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    width: 80%;
    margin: auto;
    padding: 4px;`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    padding: 16px;
    height: 200px;
    margin: 18px;
    &:hover,
    &:focus {
        box-shadow: 0 8px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .flex-icon {
        display: flex;
        align-items: flex-end;
        gap: 6px;
    }

    .accent-text {
        color: rgba(0, 0, 0, 0.4);
        word-wrap: break-word;
        max-width: 100%;
        text-align: center;

        @media screen and (min-width: 800px) {
        text-align: left;
        }
    }

    .margin-top {
        margin-top: 12px;
    }`