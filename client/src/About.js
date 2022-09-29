
import styled from "styled-components"
import Portrait from './imgs/portrait.jpg'
import { AiOutlineDownload, AiOutlineGithub } from 'react-icons/ai'
import Resume from './downloads/rikuo-hirasawa-resume.pdf'
export const About = ({navRef}) => {
    return (
        <Wrapper className="page about"
        ref={el=>navRef.current={...navRef.current, about: el}}>
            <div className="section-title"><span className="margin-left">About</span></div>
            <FlexRow>
            <Container>
                <div>I am a web developer based in Newfoundland, Canada.</div>
                <div>
                    My work specializes in creating seamless applications, both client-facing and behind the scenes.
                </div>
                <div>
                    Currently I am seeking new opportunities to work on exciting new projects, and continue my learning as a developer.
                </div>
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

        width: 250px;
        height: 250px;
        border-radius: 50%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0 18px;
        @media screen and (min-width: 1000px) {
        width: 400px;
        height: 400px;

        }
    }
`

const FlexRow = styled.div`
    
    margin-top: 36px;
    text-align: center;
    @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    }


    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    gap: 8px;
    @media screen and (min-width: 800px) {
        width: 50%;
    }
`

const BtnContainer = styled.div`
    display: flex;
    gap: 6px;
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
