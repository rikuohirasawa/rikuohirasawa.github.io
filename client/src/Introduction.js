import styled from "styled-components"

export const Introduction = ({navRef}) => {
    const navPage = (type) => {
        navRef.current[type].scrollIntoView({behavior: 'smooth'});
    };
    return (
        <Wrapper
        ref={el=>navRef.current={...navRef.current, introduction: el}}
        >
            <Content>
                <BorderContainer>
                    <div className="text-bold largest-header-text">Rikuo Hirasawa</div>
                <div className="translate-Y">
                    <div className="subheader-text">web developer</div>
                    <BtnContainer>
                        <Btn onClick={()=>{navPage('projects')}}>Projects</Btn>
                        <Btn onClick={()=>{navPage('contact')}}>Contact</Btn>
                    </BtnContainer>
                </div>
                </BorderContainer>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    filter: grayscale(100%);
    max-width: 100%;
    background-position: center;
    background-size: cover;
    
    padding: 0 20px;
    @media screen and (min-width: 600px) {  
        padding: 0 50px;
    }
    @media screen and (min-width: 1000px) {  
        padding: 0 350px;
    }
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
    .translate-Y {
        z-index: 99;
        transform: translate(4%, 0%);
    @media only screen and (min-width: 600px) {
        transform: translate(8%, 0%);
    }

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    border: 1px solid var(--dark-color);
    border-radius: 50%;
    height: 380px;
    width: 380px;

    @media only screen and (min-width: 600px) {
        padding: 16px;
        height: 450px;
        width: 450px;
    }

    .subheader-text {
        font-size: 42px;
        margin: 0 auto;
    }
`


const BtnContainer = styled.div`
    display: flex;
    gap: 6px;
    margin: 16px auto;
`

const Btn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid var(--dark-color);
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


