
import styled from "styled-components"
import Portrait from './imgs/portrait.jpg'
import { AiOutlineDownload, AiOutlineGithub } from 'react-icons/ai'
import Resume from './downloads/rikuoh-resume.pdf'
export const About = ({navRef}) => {
    return (
        <Wrapper className="page about"
        ref={el=>navRef.current={...navRef.current, about: el}}>
            <div className="section-title"><span className="margin-left">About</span></div>
            <FlexRow>
            <Container>
                <div>A full stack web developer from Newfoundland looking for new opportunities.</div>
                <div>
                    I've been interested in programming for quite some time, and decided to take the leap
                    a few months ago by attending the Web Development program at Concordia
                    University.
                </div>
                <div>During this time I learned a variety of skills, many related to frontend/backend development
                    - but most important - the thought process behind being a good developer.
                </div>
                <div>I'm very excited to continue learning, and am now looking for the opportunity to do so in a professional environment.</div>
                <div>... but that doesn't mean I've stopped on my own projects ;) - you're welcome to take a look below to see what I've been working on.</div>
                <div>Thank you for checking out my portfolio!</div>
                <div>- Rikuo</div>
                <BtnContainer>
                    <Btn href={Resume} download><AiOutlineDownload/> Resume</Btn>
                    <Btn href='https://github.com/rikuohirasawa' target='_blank'><AiOutlineGithub /> Github</Btn>
                </BtnContainer>
            </Container>
            <img className="portrait" src={Portrait}/>
            </FlexRow>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 35px;

    @keyframes slidein {
    from {
        -webkit-transform: translateX(100%);
    }
    to {
        -webkit-transform: translateX(0%);
    }
    };

    .portrait {
        width: 400px;
        height: 400px;

        border-radius: 50%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0 18px;
        /* border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.1); */
        /* animation: 18s ease 0s infinite normal none running fadein; */
    }
`

const FlexRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 8px;
    width: 50%;

    
`

const BtnContainer = styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;
    margin: 18px 0;`

const Btn = styled.a`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 6px 15px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }
    `
