import styled from "styled-components"
import { useState } from "react"
import { Page } from "./GlobalStyles"


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

import { MobileScreenSkills } from './MobileScreenSkills'



SwiperCore.use([Navigation, Pagination])
export const Skills = ({navRef}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // change windowWidth state when window is resized - saved in state to ensure that the component rerenders
    window.addEventListener('resize', event => {
        setWindowWidth(event.currentTarget.innerWidth)
    })

    console.log(typeof windowWidth)

    const style = {
        logo: {
            width: '24px',
            height: '100%'
        },
        swiperSlide: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxHeight: '100%',
            border: '1px solid red'
        },
    }
    return (


        <Wrapper
        ref={el=>navRef.current={...navRef.current, skills: el}}>
            {windowWidth < 1670 ? 
                <MobileScreenSkills/> 
                :  
            <Content>
            <Swiper navigation slidesPerView={1}>

                <SwiperSlide>
                    <div className='flex-center section-title'>Skills & Tools</div>
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
                        <SkillContainer>
                            <div className="flex-icon" onClick={()=>{window.open('https://www.npmjs.com/', '_blank')}}>NPM/Yarn <CgNpm style={style.logo}/></div>
                            <div className="accent-text">Package management</div>
                        </SkillContainer>
                        <SkillContainer onClick={()=>{window.open('https://redux.js.org/', '_blank')}}>
                            <div className="flex-icon">Redux <SiRedux style={style.logo}/></div>
                            <div className="accent-text">State management</div>
                            <div className="accent-text">(Currently learning)</div>
                        </SkillContainer>
                    </SkillsGrid>
                </SwiperSlide>
            </Swiper>
            
            </Content>
            }


            {/* <SeeMoreBtn onClick={()=>{setToggleDisplay(!toggleDisplay)}}>{!toggleDisplay ? 'See More...' : 'Hide'}</SeeMoreBtn>
            {toggleDisplay && 
            } */}
        </Wrapper>

    )
}

const Wrapper = styled.div`
    padding: 0 35px;



    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
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

    }

    .swiper-slide {
        height: 80%;
        margin: auto 0;
    }
`

const Content = styled.div`
    /* display: flex;
    align-items: center; */
    `

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

    @media screen and (min-width: 1670px) {  
        width: 375px;
        height: 200px;
    }


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
        color: rgba(0, 0, 0, 0.4)
    }

    .margin-top {
        margin-top: 12px;
    }`

const SkillsGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    height: 100%;

    width: 80%;
    margin: 0 auto;
    padding: 4px;`
