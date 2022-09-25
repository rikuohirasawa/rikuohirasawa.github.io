import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation'
import 'swiper/components/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import MuseProject from './imgs/muse-image.JPG'
import PortfolioImage from './imgs/portfolio-website.JPG'

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
    <div className="section-title"><span className="margin-left">Projects</span></div>
        <Swiper navigation slidesPerView={1} loop={true} 
        style={{
            height: '100%'
        }}>
            <SwiperSlide style={styles.swiperSlide}>
                <SlideContent>
                    <div>
                        <div className="slide-title">Muse</div>
                        <div>A virtual museum tour using the Chicago Art Institute API</div>
                        <div>Frontend created using React.js, and backend using Node.js & MongoDB</div>
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
                <div>Project 3</div>
            </SwiperSlide>
        </Swiper>
    </Wrapper>
    </Page>
    )
}

const Wrapper = styled.div`
    padding: 0 35px;
    height: 100%;

    .swiper-button-prev,
    .swiper-button-next {
        color: inherit;
}
    .swiper-pagination-bullet-active {
        background-color: black;
    }

    .swiper-container {
        margin: 0 auto;
    }
    .swiper-slide {
        height: 80%;
        margin: auto 0;
        display: flex;
    }
`


const SlideContent = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    margin: auto 0;
    margin-top: -12px;


    @media screen and (min-width: 1450px) {
        flex-direction: row;
        text-align: left;
        height: 100%;
    }
    width: 100%;
    
    .slide-title {
        font-size: 1.5rem;
        margin-bottom: 12px;
    }

    .muse-image {
        height: 280px;
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
    font-size: 1rem;
    padding: 6px 15px;
    cursor: pointer;
    display: inline-block;

    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }
    `