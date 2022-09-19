import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation'
import 'swiper/components/pagination'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import MuseProject from './imgs/muse-image.JPG'

SwiperCore.use([Navigation, Pagination])
export const Projects = () => {
    return (
    <Wrapper>
    <div className="section-title">Projects</div>
        <Swiper navigation pagination slidesPerView={1} loop={true}>
            <SwiperSlide>
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
                <div>Project 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>Project 3</div>
            </SwiperSlide>
        </Swiper>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 35px;

    .swiper-button-prev,
    .swiper-button-next {
    color: inherit;
}
    .swiper-pagination-bullet-active {
        background-color: black;
    }
`


const SlideContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    .slide-title {
        font-size: 1.5rem;
        margin: 12px 0;
    }

    .muse-image {
        height: 400px;
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