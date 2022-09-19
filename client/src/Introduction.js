import styled from "styled-components"

export const Introduction = () => {
    return (
        <BgContainer>
         <Content>
                <div>Hi, I'm Rikuo</div>
                <div>Web Developer</div>
                <BtnContainer>
                    <Btn>Projects</Btn>
                    <Btn>Contact</Btn>
                </BtnContainer>
            </Content>
        </BgContainer>
    )
}

const BgContainer = styled.div`
    /* background-image: url('https://images.unsplash.com/photo-1658471466829-c480462ef47a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');
    width: 100%;
    height: 900px;
    background-size: cover;
    background-repeat: no-repeat; */
    /* filter: grayscale(100%); */
    /* display: flex; */

`

const Content = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
`



const BtnContainer = styled.div`
    display: flex;
    gap: 6px;
`

const Btn = styled.button`
    font-family: inherit;
    background: inherit;
    border: 1px solid black;
    font-size: 1rem;
    padding: 6px 15px;
    cursor: pointer;

    transition: all 0.1s ease-in-out;
        &:hover,
        &:focus {
            transform: scale(1.05);
        }
`


