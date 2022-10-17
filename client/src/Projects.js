import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation'
import 'swiper/components/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import MuseProject from './imgs/muse-image.JPG'
import PortfolioImage from './imgs/portfolio-website.JPG'
import CritterImage from './imgs/critter.JPG'
import LabImage from './imgs/mh-lab.JPG'

import { Page } from './GlobalStyles'

SwiperCore.use([Navigation, Pagination])

export const Projects = ({navRef}) => {

    const styles = {
        swiperSlide: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
    return (
    <Page>
    <Wrapper
    className="page projects"
    ref={el=>navRef.current={...navRef.current, projects: el}}>
        <Swiper navigation slidesPerView={1}
        style={{
            height: '100%'
        }}>
        <SwiperSlide style={styles.swiperSlide}>
            <div className="section-title">Projects</div>
            </SwiperSlide>
            <SwiperSlide style={styles.swiperSlide}>
                <SlideContent>
                    <div>
                        <div className="slide-title">Muse</div>
                        <div>A virtual museum tour using the Chicago Art Institute API</div>
                        <div>Frontend created using React.js, and backend using Node.js, Express.js & MongoDB</div>
                        <ExternalLinkContainer>
                            <ExternalLink href='https://github.com/rikuohirasawa/muse' target='_blank'>View on Github</ExternalLink>
                        </ExternalLinkContainer>
                    </div>
                    <img className='muse-image' src={MuseProject}/>
                </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
            <SlideContent>
                    <div>
                        <div className="slide-title">Critter</div>
                        <div>Twitter clone... cat themed</div>
                        <div>Final project for React.js module of Full-Stack Web Development Program at Concordia University</div>
                        <div>Created using React.js and Express.js</div>
                        <ExternalLinkContainer>
                            <ExternalLink href='https://github.com/rikuohirasawa/Critter' target='_blank'>View on Github</ExternalLink>
                        </ExternalLinkContainer>
                    </div>
                    <img className='portfolio-image' src={CritterImage}/>
                </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent>
                    <div>
                        <div className="slide-title">Personal Portfolio</div>
                        <div>My personal portfolio... what you're viewing right now!</div>
                        <div>Created using React.js, and hosted via Github pages</div>
                        <ExternalLinkContainer>
                            <ExternalLink href='https://github.com/rikuohirasawa/rikuohirasawa.github.io' target='_blank'>View on Github</ExternalLink>
                        </ExternalLinkContainer>
                    </div>
                    <img className='portfolio-image' src={PortfolioImage}/>
                </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent>
                    <div>
                        <div className="slide-title">Michiru Hirasawa Laboratory</div>
                        <div>Neuroscience research laboratory at Memorial University of Newfoundland</div>
                        <div>Currently a work in progress, first implementation of my work in Typescript</div>
                        <div>Created using React.js, Typescript, Node.js, Express.js and MongoDB </div>
                        <ExternalLinkContainer>
                            <ExternalLink href='https://github.com/rikuohirasawa/michiru-lab' target='_blank'>View on Github</ExternalLink>
                        </ExternalLinkContainer>
                    </div>
                    <img className='portfolio-image' src={LabImage}/>
                </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
                <SlideContent>
                    <div>...more coming soon!</div>
                </SlideContent>
            </SwiperSlide>
        </Swiper>
    </Wrapper>
    </Page>
    )
}

const Wrapper = styled.div`
    padding: 0 35px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: #fff;

    .projects-title {
        font-size: 100px;
        font-weight: 700;


    }

    .swiper-button-prev,
    .swiper-button-next {
        color: inherit;
}   
    .swiper-button-disabled {
        visibility: hidden;
        opacity: 0;
        transition: 0.5s ease-in-out;
    }
    .swiper-pagination-bullet-active {
        background-color: black;
    }

    .swiper-container {
    }
    .swiper-slide {
        height: 80%;
        margin: auto 0;
    }
`


const SlideContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 16px;
    line-height: 1.6;

    @media screen and (min-width: 800px) {  
            font-size: 20px;
            text-align: center;
}


    @media screen and (min-width: 1450px) {
        flex-direction: row;
        text-align: left;
        height: 100%;
    }
    width: 100%;
    
    .slide-title {
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 12px;

        @media screen and (min-width: 800px) {  
            font-size: 48px;
}
    }

    .muse-image {
        height: 250px;
        @media screen and (min-width: 800px) {
            height: 400px;
        }
    }
    
    .portfolio-image {
        height: 280px;
        max-width: 90%;
        object-fit: cover;
        @media screen and (min-width: 800px) {
            height: 500px;
            width: auto;
        }

    }`

const ExternalLinkContainer = styled.div`
    margin: 24px 0;
`

const ExternalLink = styled.a`
    font-family: inherit;
    background: inherit;
    color: inherit;
    text-decoration: none;
    border: 1px solid black;
    padding: 4px 12px;
    cursor: pointer;
    display: inline-block;
    transition: all 0.1s ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.05);
    }

    @media screen and (min-width: 800px) {
        font-size: 20px;
        padding: 6px 15px;
        }
    `