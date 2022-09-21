import styled from "styled-components"
import NewfoundlandBG from './imgs/newfoundland-bg.jpg'
import Portrait from './imgs/portrait.jpg'

export const Introduction = ({navRef}) => {
    const navPage = (type) => {
        navRef.current[type].scrollIntoView({behavior: 'smooth'});
    };
    return (
        <Wrapper
        // style={{backgroundImage:`url(${NewfoundlandBG})` }}
        >
            {/* <img className='portrait-image' src={Portrait}/> */}
            <Content>
                <BorderContainer>
                <div>Hi, I'm Rikuo</div>
                <div>I create things for the Web</div>
                <BtnContainer>
                    <Btn onClick={()=>{navPage('projects')}}>Projects</Btn>
                    <Btn onClick={()=>{navPage('contact')}}>Contact</Btn>
                </BtnContainer>
                </BorderContainer>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( rgba(0, 0, 0, 0.1), 
    rgba(0, 0, 0, 0.35) ), url(${NewfoundlandBG});
    filter: grayscale(100%);

    background-position: center;
    background-size: cover;
    
    @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    };
    
    @keyframes slidein {
    from {
        -webkit-transform: translateX(100%);
    }
    to {
        -webkit-transform: translateX(0%);
    }
    };
    
    .portrait-image {
        width: 450px;
        height: 100%;
        animation: 3s ease-in 0s 1 fadein;
    }
`



const Content = styled.div`
    animation: fadein 3s;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 90vh;
`

const BorderContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 1px solid #fff;
    /* border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(255, 255, 255, 1); */
    border-radius: 50%;
    height: 450px;
    width: 450px;
    padding: 16px;`


const BtnContainer = styled.div`
    display: flex;
    gap: 6px;
`

const Btn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid #fff;
    color: inherit;
    font-size: 1rem;
    padding: 6px 15px;
    cursor: pointer;

    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }
`


