import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./Header";
import { About } from "./About";
import { Introduction } from "./Introduction";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Sidebar } from "./Sidebar";

import { useRef } from "react";

const App = () => {
  const navRef = useRef(null);

  return (
    <Wrapper>
      <GlobalStyle/>
      <Column>
      <Header navRef={navRef}/>
      <Row>
      <Content>
        <Introduction navRef={navRef}/>
        <About navRef={navRef}/>
        <Projects navRef={navRef}/>
        <Skills navRef={navRef}/>
        <Contact navRef={navRef}/>
      </Content>
      <Sidebar navRef={navRef}/>
      </Row>
      </Column>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`

const Column = styled.div`
display: flex;
flex-direction: column;
width: 100%;`

const Row = styled.div`
display: flex;
max-width: 100%;
`

const Content = styled.div`
max-width: 100%;

margin-left: auto;

@media screen and (min-width: 800px) {
  max-width: calc(100% - 35px);
  
}`