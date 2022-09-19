import styled from "styled-components"
import { useState } from "react"

export const Skills = () => {
    const [toggleDisplay, setToggleDisplay] = useState(false);

    return (
        <Wrapper>
            <div className="section-title">Skills</div>
            <SkillsGrid>
                <SkillContainer>
                    <div>JavaScript</div>
                    <div className="accent-text">console.log('hello!')</div>
                </SkillContainer>
                <SkillContainer>
                    <div>React.js</div>  
                        <div className="accent-text">{`useEffect(()=>{`}<br/>{`setState('welcome')`}<br/>{`})`}</div>
                </SkillContainer>
                <SkillContainer>
                    <div>MongoDB</div>
                    <div className="accent-text">{`await db.collection('to').findOne({my: website})`}</div>
                </SkillContainer>
                <SkillContainer>
                    <div>Node.js</div>
                    <div className="accent-text">{`.get('/thank-you', veryMuch)`}</div>
                </SkillContainer>
                <SkillContainer>
                    <div>HTML</div>
                    <div className="accent-text">{`<div>for visiting!</div>`}</div>
                </SkillContainer>
                <SkillContainer>
                    <div>CSS</div>
                        <div className="accent-text">{`.enjoy-your-stay {`}<br/>display: flex;<br/>{`}`}</div>
                </SkillContainer>
            </SkillsGrid>
            <SeeMoreBtn onClick={()=>{setToggleDisplay(!toggleDisplay)}}>{!toggleDisplay ? 'See More...' : 'Hide'}</SeeMoreBtn>
            {toggleDisplay && 
            <ToolsGrid>
                <ToolsContainer>
                    <div>Material UI</div>
                    <div className="accent-text">UI library</div>
                </ToolsContainer>
                <ToolsContainer>
                    <div>Swiper.js</div>
                    <div className="accent-text">JavaScript plugin</div>
                </ToolsContainer>
                <ToolsContainer>
                    <div>Express.js</div>
                    <div className="accent-text">Web application framework</div>
                </ToolsContainer>
                <ToolsContainer>
                    <div>Git</div>
                    <div className="accent-text">Version control</div>
                </ToolsContainer>
                <ToolsContainer>
                    <div>Yarn/NPM</div>
                    <div className="accent-text">Package management</div>
                </ToolsContainer>
                <ToolsContainer>
                    <div>Redux</div>
                    <div className="accent-text">State management</div>
                </ToolsContainer>
            </ToolsGrid>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 35px;
`

const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;


    .accent-text {
        color: rgba(0, 0, 0, 0.4)
    }`

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;`

const ToolsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    border: 1px solid red;
    transition: all 1s ease-in-out;
    position: relative;
    `

const ToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .accent-text {
    color: rgba(0, 0, 0, 0.4)
    }`

const SeeMoreBtn = styled.button`
    font-family: inherit;
    background: inherit;
    font-size: 1rem;
    border: none;
    cursor: pointer;

    
    &:hover,
    &:focus {
        text-decoration: underline;
    }`